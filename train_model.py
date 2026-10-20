# ==============================================================================
# Multiple Linear Regression: Laptop Price Predictor Dataset
# Methodology: CRISP-DM (Cross-Industry Standard Process for Data Mining)
# Dataset: https://raw.githubusercontent.com/jeeniagogoi1/Laptop-Price-predictor/refs/heads/main/laptop_data.csv
# Output: laptop_price_model.pkl & actual_vs_predicted.png
# ==============================================================================

import os
import re
import pickle
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

# Set random seed for reproducibility
RANDOM_STATE = 42

# ==============================================================================
# PHASE 1: BUSINESS UNDERSTANDING
# ==============================================================================
"""
1.1 Project Objective:
    Predict the market retail price (in Indian Rupees, ₹) of laptops based on
    hardware hardware configuration (CPU, GPU, RAM, Storage, Screen, Weight)
    and brand identity (Company, Form Factor, OS).

1.2 Business Value:
    - Consumers: Compare actual market retail price against fair estimated value
      to prevent overpaying.
    - Hardware Vendors & Retailers: Determine data-driven competitive pricing
      tiers for customized or newly assembled notebook models.
    - Component ROI: Quantify the marginal dollar/rupee impact of upgrading RAM,
      SSD storage, or switching CPU tiers.

1.3 Data Mining Goal:
    Formulate the challenge as a Multiple Linear Regression task using scikit-learn,
    ensuring robust preprocessing, categorical encoding, model evaluation, and
    production serialization (.pkl).
"""
print("=" * 70)
print("PHASE 1: BUSINESS UNDERSTANDING")
print("=" * 70)
print("Goal: Build a Multiple Linear Regression model to predict laptop prices")
print("Methodology: CRISP-DM 6-Phase Lifecycle")


# ==============================================================================
# PHASE 2: DATA UNDERSTANDING
# ==============================================================================
print("\n" + "=" * 70)
print("PHASE 2: DATA UNDERSTANDING")
print("=" * 70)

DATA_URL = (
    "https://raw.githubusercontent.com/jeeniagogoi1/"
    "Laptop-Price-predictor/refs/heads/main/laptop_data.csv"
)

print(f"Fetching dataset from: {DATA_URL}")
try:
    df = pd.read_csv(DATA_URL)
except Exception as e:
    print(f"Error fetching online dataset: {e}. Attempting local fallback if exists.")
    local_csv = os.path.join(os.path.dirname(__file__), "laptop_data.csv")
    if os.path.exists(local_csv):
        df = pd.read_csv(local_csv)
    else:
        raise

print("\n--- First 5 rows of raw data ---")
print(df.head())

print(f"\nDataset Dimensions: {df.shape[0]} rows, {df.shape[1]} columns")

print("\n--- Column Data Types & Non-null Counts ---")
print(df.info())

print("\n--- Missing Values Count per Column ---")
print(df.isnull().sum())

print("\n--- Duplicate Rows Count ---")
print(f"Duplicates: {df.duplicated().sum()}")

print("\n--- Target Variable (Price) Statistics ---")
print(df["Price"].describe())


# ==============================================================================
# PHASE 3: DATA PREPARATION
# ==============================================================================
print("\n" + "=" * 70)
print("PHASE 3: DATA PREPARATION")
print("=" * 70)

# 3.1 Drop unnecessary index column if present
if "Unnamed: 0" in df.columns:
    df = df.drop(columns=["Unnamed: 0"])

# 3.2 Clean 'Ram': Remove 'GB' and convert to integer
df["Ram"] = df["Ram"].astype(str).str.replace("GB", "", regex=False).astype(int)

# 3.3 Clean 'Weight': Remove 'kg' and convert to float
df["Weight"] = df["Weight"].astype(str).str.replace("kg", "", regex=False).astype(float)

# 3.4 Feature Engineering on 'ScreenResolution':
#     - Touchscreen (Binary: 1 if present, 0 otherwise)
#     - IPS Panel   (Binary: 1 if present, 0 otherwise)
#     - PPI (Pixels Per Inch): sqrt(X_res^2 + Y_res^2) / Inches
df["Touchscreen"] = df["ScreenResolution"].apply(lambda x: 1 if "Touchscreen" in str(x) else 0)
df["Ips"] = df["ScreenResolution"].apply(lambda x: 1 if "IPS" in str(x) else 0)


def extract_ppi(row):
    """Calculate Pixels Per Inch (PPI) based on resolution and screen size in inches."""
    res_str = str(row["ScreenResolution"])
    matches = re.findall(r"(\d{3,4})x(\d{3,4})", res_str)
    if matches:
        x_res = float(matches[0][0])
        y_res = float(matches[0][1])
        inches = float(row["Inches"])
        if inches > 0:
            ppi = (((x_res ** 2) + (y_res ** 2)) ** 0.5) / inches
            return round(ppi, 2)
    return 141.21  # Default standard 15.6" FHD PPI


df["Ppi"] = df.apply(extract_ppi, axis=1)

# 3.5 Feature Engineering on 'Cpu':
#     Extract major processor tiers:
#     - Intel Core i7
#     - Intel Core i5
#     - Intel Core i3
#     - Other Intel Processor
#     - AMD Processor


def categorize_cpu(cpu_str):
    text = str(cpu_str).strip()
    if "Intel Core i7" in text:
        return "Intel Core i7"
    elif "Intel Core i5" in text:
        return "Intel Core i5"
    elif "Intel Core i3" in text:
        return "Intel Core i3"
    elif text.startswith("Intel"):
        return "Other Intel Processor"
    elif text.startswith("AMD"):
        return "AMD Processor"
    else:
        return "Other Processor"


df["Cpu_brand"] = df["Cpu"].apply(categorize_cpu)

# 3.6 Feature Engineering on 'Memory':
#     Extract explicit SSD and HDD storage capacity in Gigabytes (GB).
#     Handles multi-drive setups (e.g., '128GB SSD + 1TB HDD') and TB to GB conversion (1TB = 1024GB).


def extract_storage_gb(memory_str, storage_type):
    total_gb = 0
    parts = str(memory_str).split("+")
    for part in parts:
        part = part.strip()
        if storage_type == "SSD" and "SSD" in part:
            match = re.search(r"(\d+(?:\.\d+)?)\s*(GB|TB)", part, re.IGNORECASE)
            if match:
                val = float(match.group(1))
                if match.group(2).upper() == "TB":
                    val *= 1024
                total_gb += int(val)
        elif storage_type == "HDD" and ("HDD" in part or "Hybrid" in part):
            match = re.search(r"(\d+(?:\.\d+)?)\s*(GB|TB)", part, re.IGNORECASE)
            if match:
                val = float(match.group(1))
                if match.group(2).upper() == "TB":
                    val *= 1024
                total_gb += int(val)
    return int(total_gb)


df["HDD"] = df["Memory"].apply(lambda x: extract_storage_gb(x, "HDD"))
df["SSD"] = df["Memory"].apply(lambda x: extract_storage_gb(x, "SSD"))

# 3.7 Feature Engineering on 'Gpu':
#     Categorize GPU into top manufacturer brands: Intel, AMD, Nvidia


def categorize_gpu(gpu_str):
    brand = str(gpu_str).split()[0]
    if brand in ["Intel", "AMD", "Nvidia"]:
        return brand
    return "Other"


df["Gpu_brand"] = df["Gpu"].apply(categorize_gpu)

# 3.8 Feature Engineering on 'OpSys':
#     Group operating systems into major categories: Windows, Mac, Others/No OS/Linux


def categorize_os(os_str):
    os_name = str(os_str)
    if "Windows" in os_name:
        return "Windows"
    elif "Mac" in os_name or "macOS" in os_name:
        return "Mac"
    else:
        return "Others/No OS/Linux"


df["OpSys"] = df["OpSys"].apply(categorize_os)

# 3.9 Select final feature subset and separate X (features) and y (target)
features = [
    "Company",
    "TypeName",
    "Ram",
    "Weight",
    "Touchscreen",
    "Ips",
    "Ppi",
    "Cpu_brand",
    "HDD",
    "SSD",
    "Gpu_brand",
    "OpSys"
]

X = df[features]
y = df["Price"]

categorical_features = ["Company", "TypeName", "Cpu_brand", "Gpu_brand", "OpSys"]
numeric_features = ["Ram", "Weight", "Touchscreen", "Ips", "Ppi", "HDD", "SSD"]

print("Final Features:")
print(f"  Categorical ({len(categorical_features)}): {categorical_features}")
print(f"  Numerical   ({len(numeric_features)}): {numeric_features}")
print(f"\nPrepared Data Head (first 3 rows):\n{X.head(3)}")

# 3.10 Construct ColumnTransformer for categorical One-Hot Encoding
preprocessor = ColumnTransformer(
    transformers=[
        (
            "cat",
            OneHotEncoder(handle_unknown="ignore", sparse_output=False),
            categorical_features
        )
    ],
    remainder="passthrough"
)

# 3.11 Train-Test Split (80% Training, 20% Testing)
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=RANDOM_STATE
)

print(f"\nTrain set: {len(X_train)} samples")
print(f"Test set : {len(X_test)} samples")


# ==============================================================================
# PHASE 4: MODELING
# ==============================================================================
print("\n" + "=" * 70)
print("PHASE 4: MODELING")
print("=" * 70)

# Build end-to-end Pipeline combining Preprocessor and Linear Regression
model_pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("regressor", LinearRegression())
    ]
)

print("Fitting Multiple Linear Regression Pipeline on training data...")
model_pipeline.fit(X_train, y_train)
print("Model training completed successfully.")

# Extract Intercept and Feature Coefficients
regressor = model_pipeline.named_steps["regressor"]
encoded_cat_names = (
    model_pipeline.named_steps["preprocessor"]
    .named_transformers_["cat"]
    .get_feature_names_out(categorical_features)
)
all_feature_names = list(encoded_cat_names) + numeric_features

intercept = float(regressor.intercept_)
coefficients = regressor.coef_

coef_df = pd.DataFrame({
    "Feature": all_feature_names,
    "Coefficient": coefficients
})

print(f"\nRegression Intercept: {intercept:,.4f}")
print("\nTop 10 Feature Coefficients by absolute weight:")
print(coef_df.reindex(coef_df["Coefficient"].abs().sort_values(ascending=False).index).head(10).to_string(index=False))


# ==============================================================================
# PHASE 5: EVALUATION
# ==============================================================================
print("\n" + "=" * 70)
print("PHASE 5: EVALUATION")
print("=" * 70)

# Predict on Test Set
y_pred = model_pipeline.predict(X_test)

mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"Mean Absolute Error (MAE) : ₹{mae:,.2f}")
print(f"Mean Squared Error (MSE)  : ₹{mse:,.2f}")
print(f"Root Mean Squared Error   : ₹{rmse:,.2f}")
print(f"R² Score (Explained Var)  : {r2:.4f}")

# Comparison Table: Actual vs Predicted
comparison_df = pd.DataFrame({
    "Actual Price (₹)": y_test.values,
    "Predicted Price (₹)": np.round(y_pred, 2),
    "Residual (₹)": np.round(y_test.values - y_pred, 2),
    "Abs Error %": np.round(np.abs(y_test.values - y_pred) / y_test.values * 100, 2)
})

print("\n--- Sample Actual vs Predicted Test Set Comparison (First 10 rows) ---")
print(comparison_df.head(10).to_string(index=False))

# Generate Diagnostic Residual & Prediction Plot
base_dir = os.path.dirname(os.path.abspath(__file__))
plot_path = os.path.join(base_dir, "actual_vs_predicted.png")

plt.figure(figsize=(9, 6), dpi=150)
plt.style.use("seaborn-v0_8-whitegrid" if "seaborn-v0_8-whitegrid" in plt.style.available else "default")

plt.scatter(
    y_test,
    y_pred,
    alpha=0.65,
    color="#3b82f6",
    edgecolors="none",
    s=40,
    label="Test Samples"
)

min_val = min(y_test.min(), y_pred.min())
max_val = max(y_test.max(), y_pred.max())
plt.plot(
    [min_val, max_val],
    [min_val, max_val],
    color="#ef4444",
    linestyle="--",
    linewidth=2,
    label="Ideal Fit Line (y = ŷ)"
)

plt.title(f"Laptop Price Prediction: Actual vs. Predicted (R² = {r2:.4f})", fontsize=14, fontweight="bold")
plt.xlabel("Actual Price (₹)", fontsize=12)
plt.ylabel("Predicted Price (₹)", fontsize=12)
plt.legend(frameon=True)
plt.tight_layout()
plt.savefig(plot_path, dpi=150)
plt.close()

print(f"\nSaved evaluation plot to: {plot_path}")


# ==============================================================================
# PHASE 6: DEPLOYMENT
# ==============================================================================
print("\n" + "=" * 70)
print("PHASE 6: DEPLOYMENT")
print("=" * 70)

# Save Pipeline as a .pkl file
model_pkl_path = os.path.join(base_dir, "laptop_price_model.pkl")

with open(model_pkl_path, "wb") as f:
    pickle.dump(model_pipeline, f)

print(f"Serialized trained Scikit-Learn pipeline to: {model_pkl_path}")

# Verification: Test serialized model inference with an unseen sample laptop
sample_laptop = pd.DataFrame([{
    "Company": "Dell",
    "TypeName": "Notebook",
    "Ram": 16,
    "Weight": 1.85,
    "Touchscreen": 0,
    "Ips": 1,
    "Ppi": 141.21,
    "Cpu_brand": "Intel Core i7",
    "HDD": 0,
    "SSD": 512,
    "Gpu_brand": "Nvidia",
    "OpSys": "Windows"
}])

with open(model_pkl_path, "rb") as f:
    loaded_model = pickle.load(f)

sample_prediction = loaded_model.predict(sample_laptop)[0]

print("\n--- Test Sample Inference ---")
print(sample_laptop.to_dict(orient="records")[0])
print(f"Predicted Price: ₹{sample_prediction:,.2f}")
print("Deployment model serialization verified successfully!")
print("=" * 70)
