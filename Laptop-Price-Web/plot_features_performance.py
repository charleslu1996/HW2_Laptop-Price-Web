# ==============================================================================
# Forward Feature Selection & Performance Analysis: Laptop Price Predictor
# Methodology: CRISP-DM Feature Subset Evaluation
# Output: features_performance.png
# ==============================================================================

import re
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

# ==============================================================================
# 1. 資料載入與特徵工程 (Data Loading & Preprocessing)
# ==============================================================================
DATA_URL = (
    "https://raw.githubusercontent.com/jeeniagogoi1/"
    "Laptop-Price-predictor/refs/heads/main/laptop_data.csv"
)

print(f"載入筆電資料集: {DATA_URL}")
df = pd.read_csv(DATA_URL)
if "Unnamed: 0" in df.columns:
    df = df.drop(columns=["Unnamed: 0"])

# 數值特徵清洗
df["Ram"] = df["Ram"].astype(str).str.replace("GB", "", regex=False).astype(int)
df["Weight"] = df["Weight"].astype(str).str.replace("kg", "", regex=False).astype(float)
df["Touchscreen"] = df["ScreenResolution"].apply(lambda x: 1 if "Touchscreen" in str(x) else 0)
df["Ips"] = df["ScreenResolution"].apply(lambda x: 1 if "IPS" in str(x) else 0)


def extract_ppi(row):
    res_str = str(row["ScreenResolution"])
    matches = re.findall(r"(\d{3,4})x(\d{3,4})", res_str)
    if matches:
        x_res = float(matches[0][0])
        y_res = float(matches[0][1])
        inches = float(row["Inches"])
        if inches > 0:
            return round((((x_res ** 2) + (y_res ** 2)) ** 0.5) / inches, 2)
    return 141.21


df["Ppi"] = df.apply(extract_ppi, axis=1)


def extract_storage(mem_str, kind):
    total = 0
    parts = str(mem_str).split("+")
    for p in parts:
        p = p.strip()
        if kind in p or (kind == "HDD" and "Hybrid" in p):
            m = re.search(r"(\d+(?:\.\d+)?)\s*(GB|TB)", p, re.IGNORECASE)
            if m:
                v = float(m.group(1))
                if m.group(2).upper() == "TB":
                    v *= 1024
                total += int(v)
    return int(total)


df["HDD"] = df["Memory"].apply(lambda x: extract_storage(x, "HDD"))
df["SSD"] = df["Memory"].apply(lambda x: extract_storage(x, "SSD"))


def categorize_cpu(text):
    text = str(text)
    if "Intel Core i7" in text:
        return "Intel Core i7"
    elif "Intel Core i5" in text:
        return "Intel Core i5"
    elif "Intel Core i3" in text:
        return "Intel Core i3"
    elif text.startswith("Intel"):
        return "Other Intel"
    elif text.startswith("AMD"):
        return "AMD"
    return "Other"


df["Cpu_brand"] = df["Cpu"].apply(categorize_cpu)


def categorize_gpu(text):
    brand = str(text).split()[0]
    return brand if brand in ["Intel", "AMD", "Nvidia"] else "Other"


df["Gpu_brand"] = df["Gpu"].apply(categorize_gpu)


def categorize_os(text):
    text = str(text)
    if "Windows" in text:
        return "Windows"
    elif "Mac" in text or "macOS" in text:
        return "Mac"
    return "Others"


df["OpSys"] = df["OpSys"].apply(categorize_os)

# 對類別型特徵進行 One-Hot Encoding (drop_first=True 避免虛擬變數陷阱)
categorical_cols = ["Company", "TypeName", "Cpu_brand", "Gpu_brand", "OpSys"]
df_encoded = pd.get_dummies(df, columns=categorical_cols, drop_first=True, dtype=float)

# 移除中介欄位
drop_cols = ["Inches", "ScreenResolution", "Cpu", "Memory", "Gpu"]
df_encoded = df_encoded.drop(columns=[c for c in drop_cols if c in df_encoded.columns])

X = df_encoded.drop(columns=["Price"])
y = df_encoded["Price"]

# 切分訓練集與測試集 (80% Train, 20% Test, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# ==============================================================================
# 2. 前向特徵選擇 (Forward Feature Selection)
# ==============================================================================
# 依序加入對筆電價格預測最具統計推動力與解釋力的特徵步驟：
# Step 1: Ram
# Step 2: Ram + SSD
# Step 3: Ram + SSD + Cpu_brand_Intel Core i7
# Step 4: Ram + SSD + Cpu_brand_Intel Core i7 + Gpu_brand_Nvidia
# Step 5: Ram + SSD + Cpu_brand_Intel Core i7 + Gpu_brand_Nvidia + Ppi
# Step 6: 加入所有主要特徵 (含 TypeName, Weight, Touchscreen, Ips, HDD 等)

feature_steps = [
    ["Ram"],
    ["Ram", "SSD"],
    ["Ram", "SSD", "Cpu_brand_Intel Core i7"],
    ["Ram", "SSD", "Cpu_brand_Intel Core i7", "Gpu_brand_Nvidia"],
    ["Ram", "SSD", "Cpu_brand_Intel Core i7", "Gpu_brand_Nvidia", "Ppi"],
    ["Ram", "SSD", "Cpu_brand_Intel Core i7", "Gpu_brand_Nvidia", "Ppi", "TypeName_Gaming"]
]

num_features = []
rmse_list = []
r2_list = []
step_descriptions = [
    "[Ram]",
    "[Ram, SSD]",
    "[Ram, SSD, Intel Core i7]",
    "[Ram, SSD, Intel Core i7, Nvidia GPU]",
    "[Ram, SSD, Core i7, Nvidia, Display PPI]",
    "[Ram, SSD, Core i7, Nvidia, PPI, Gaming Type]"
]

print("\n" + "=" * 70)
print("特徵數量與模型評估指標 (Feature Progression Performance):")
print("-" * 70)

results_table = []

for i, (features, desc) in enumerate(zip(feature_steps, step_descriptions), 1):
    model = LinearRegression()
    # 確保特徵在資料中存在
    valid_features = [f for f in features if f in X_train.columns]
    model.fit(X_train[valid_features], y_train)
    y_pred = model.predict(X_test[valid_features])

    rmse = np.sqrt(np.mean((y_test - y_pred) ** 2))
    r2 = r2_score(y_test, y_pred)

    num_features.append(i)
    rmse_list.append(rmse)
    r2_list.append(r2)

    results_table.append({
        "Number of Features": i,
        "Selected Features": desc,
        "RMSE": round(rmse, 2),
        "R-squared": round(r2, 4)
    })

    print(f"特徵數 {i}: RMSE = ₹{rmse:,.2f}, R² = {r2:.4f} | 使用特徵: {desc}")

# ==============================================================================
# 3. 繪製評估圖表 (Plotting Performance by Number of Features)
# ==============================================================================
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 5), dpi=150)

# 左圖：RMSE by Number of Features
ax1.plot(num_features, rmse_list, marker="o", color="#1f77b4", linewidth=1.8, markersize=6)
ax1.set_title("RMSE by Number of Features", fontsize=12, fontweight="bold")
ax1.set_xlabel("Number of Features", fontsize=10)
ax1.set_ylabel("RMSE", fontsize=10)
ax1.grid(True, linestyle="--", alpha=0.5)

# 右圖：R-squared by Number of Features
ax2.plot(num_features, r2_list, marker="o", color="#1f77b4", linewidth=1.8, markersize=6)
ax2.set_title("R-squared by Number of Features", fontsize=12, fontweight="bold")
ax2.set_xlabel("Number of Features", fontsize=10)
ax2.set_ylabel("R-squared", fontsize=10)
ax2.grid(True, linestyle="--", alpha=0.5)

plt.tight_layout()

# 儲存圖表
output_png = "features_performance.png"
plt.savefig(output_png, dpi=150)
print(f"\n圖表已成功輸出至: {output_png}")

# 輸出彙總表格
summary_df = pd.DataFrame(results_table)
print("\n" + "=" * 70)
print("Forward Feature Selection Summary Table:")
print(summary_df.to_string(index=False))
print("=" * 70)
