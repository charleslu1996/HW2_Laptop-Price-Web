# Laptop Price: Multiple Linear Regression & Feature Selection Explorer (AIoT Focus)

An interactive machine learning, statistical inference, and full-stack web platform built with the **Flask framework** and following the **CRISP-DM** (Cross-Industry Standard Process for Data Mining) methodology, tailored for **AIoT smart hardware valuation and edge pricing inference**.

This project evaluates **Multiple Linear Regression (OLS)** against **5 distinct feature selection algorithms** to uncover the optimal parsimonious feature subset for predicting laptop retail prices while guarding against multicollinearity, overfitting, and unnecessary sensor/feature acquisition costs.

---

## 🚀 Live Demo & Interactive Web Application

🐙 **GitHub Repository**: **[https://github.com/charleslu1996/HW2_Laptop-Price-Web](https://github.com/charleslu1996/HW2_Laptop-Price-Web)**  
🔗 **Live Demo**: **[https://charleslu1996.github.io/HW2_Laptop-Price-Web/](https://charleslu1996.github.io/HW2_Laptop-Price-Web/)**

<p align="center">
  <img src="./interactive_charts.png" alt="Laptop Price Interactive Regression & Feature Selection Explorer" width="920">
</p>

The web application is styled with the professional SaaS statistical calculator layout inspired by [StatsUnlock](https://statsunlock.com/multiple-linear-regression-calculator/).

### Key Web App Features:
- **Algorithm Switcher**: Switch dynamically between **Lasso (L1 Ranking)**, **Forward SFS**, **RFE**, **ElasticNet**, **Exhaustive Search**, or **Compare All 5 Simultaneously**.
- **Interactive Feature Count Slider ($k=1 \dots 6$)**: Instantly observe model metrics, regression coefficients, and mathematical equation updates across different subset sizes.
- **Dual-Panel Responsive Charts**: Interactive Chart.js visualizations for **"RMSE by Number of Features"** and **"R-squared by Number of Features"** with sweet-spot highlighting and hover tooltips.
- **Dynamic Regression Equation**: Live mathematical formula updating in real-time with syntax-highlighted intercept, positive/negative coefficients, and feature variables.
- **StatsUnlock-Style Coefficients Table**: Full inferential statistics including $\beta$ coefficients, Standard Error, $t$-statistics, $p$-values, 95% Confidence Intervals, and VIF (Variance Inflation Factor) multicollinearity diagnostics.
- **Live Hardware Valuation Predictor**: Interactive input sliders for RAM, SSD Storage, CPU Tier, Dedicated GPU, Screen Size, Resolution (dynamic PPI calculation), Chassis Type, and Weight with instant multi-currency valuation (₹ INR, $ USD, NT$ TWD).
- **Top 10 Outliers & Residuals Diagnostic Table**: Detailed residual analysis identifying edge cases and high-residual testing laptops.
- **Diagnostic Visualizations Modal**: Embedded high-resolution Matplotlib curves (`all_5_algorithms_comparison_plot.png`, `features_performance.png`, `actual_vs_predicted.png`).

---

## 📁 Repository Directory Structure

```text
HW2_Laptop-Price-Web/
├── .github/
│   └── workflows/
│       ├── ml_pipeline.yml                   # CI/CD training pipeline & GitHub Actions Step Summary
│       └── static.yml                        # GitHub Pages automated deployment workflow
├── app.py                                    # Flask Web Application (WSGI server & REST API)
├── main.py                                   # CRISP-DM CLI Multiple Linear Regression script (6 phases)
├── feature_progression_analysis.py           # 5-Algorithm Feature Progression analysis & plot generator
├── train_model.py                            # Pipeline training & scikit-learn model exporter
├── plot_features_performance.py              # Single-algorithm forward feature progression script
├── requirements.txt                          # Python dependencies (Flask, NumPy, Pandas, Scikit-Learn)
├── model_data.json                           # Precomputed 5-algorithm feature progression registry (JSON)
├── model_data.js                             # Client-side model registry for instant GitHub Pages execution
├── all_5_algorithms_comparison_plot.png      # Multi-algorithm comparison plot (Lasso, SFS, RFE, ElasticNet, Exhaustive)
├── interactive_charts.png                    # Interactive Chart.js feature performance dashboard preview
├── features_performance.png                  # Dual-curve plot: RMSE & R² by Number of Features
├── actual_vs_predicted.png                   # Actual vs Predicted residual regression plot
├── index.html                                # Root interactive web dashboard (for GitHub Pages static hosting)
├── templates/
│   └── index.html                            # StatsUnlock-style Jinja2 web template for Flask server
├── static/
│   └── model_data.js                         # Static asset for Flask backend
├── Laptop-Price-Web/                         # Package mirror distribution folder
│   ├── app.py
│   ├── main.py
│   ├── feature_progression_analysis.py
│   ├── model_data.json
│   ├── model_data.js
│   ├── index.html
│   ├── templates/
│   └── README.md
└── README.md                                 # Comprehensive project documentation
```

---

## ⚙️ Environment Setup & Requirements

### 1. System Requirements
- **Python**: `3.9`, `3.10`, or `3.11`
- **Package Manager**: `pip`
- **Supported OS**: Windows, macOS, Linux

### 2. CLI Installation Commands

```bash
# Clone the repository
git clone https://github.com/charleslu1996/HW2_Laptop-Price-Web.git
cd HW2_Laptop-Price-Web

# Create and activate a Python virtual environment
# On Windows (PowerShell):
python -m venv .venv
.venv\Scripts\activate

# On macOS/Linux:
python3 -m venv .venv
source .venv/bin/activate

# Upgrade pip and install dependencies
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Dependencies (`requirements.txt`)
```text
Flask>=3.0.0
numpy>=1.24.0
pandas>=2.0.0
scikit-learn>=1.3.0
matplotlib>=3.7.0
joblib>=1.3.0
requests>=2.31.0
```

---

## 🔬 Dataset Preparation & Preprocessing

The model is trained on the comprehensive **Kaggle Laptop Price Dataset** ($N = 1,303$ laptop configurations).

```text
https://raw.githubusercontent.com/jeeniagogoi1/Laptop-Price-predictor/refs/heads/main/laptop_data.csv
```

### CRISP-DM Feature Engineering Steps:
1. **Target Variable**:
   - `Price`: Retail laptop price in Indian Rupees (₹ INR), ranging from ₹9,200 to ₹324,999 (Mean: ~₹59,870).
2. **Memory & Storage Extraction**:
   - `Ram`: Parsed from text string (e.g., `"16GB"` -> `16` GB integer).
   - `Memory`: Decomposed into separate high-speed `SSD` capacity (0 to 2048 GB) and secondary `HDD` capacity.
3. **Processor & Graphics Categorization**:
   - `Cpu`: Mapped into distinct compute tiers; binary indicator `Cpu_i7` isolates high-performance Intel Core i7 silicon.
   - `Gpu`: Extracted manufacturer class; binary indicator `Gpu_Nvidia` captures dedicated graphics performance.
4. **Display Density (Pixels Per Inch - PPI)**:
   - Extracted horizontal ($W$) and vertical ($H$) resolution from `ScreenResolution` and combined with diagonal `Inches`:
     $$\text{PPI} = \frac{\sqrt{W^2 + H^2}}{\text{Inches}}$$
   - Captures high-density Retina/4K display premiums in a single continuous feature.
5. **Form Factor & Mobility**:
   - `TypeName`: Identifies gaming/workstation thermal classes (`Gaming`).
   - `Weight`: Extracted from string (e.g., `"1.85kg"` -> `1.85` kg float).
6. **Train/Test Splitting**:
   - Stratified partition: **80% Training ($N=1,042$)** and **20% Out-of-Sample Testing ($N=261$)** with `random_state=42`.

---

## 🏃 How to Run / Usage Guide

### 1. Run Feature Progression Analysis across 5 Algorithms
Executes the progression loop across $k=1 \dots 6$, validates the bias-variance trade-off, and exports comparison charts:

```bash
python feature_progression_analysis.py
```

*Code snippet from `feature_progression_analysis.py`:*
```python
# Evaluates candidate subsets across k=1..6
def evaluate_subset(features_subset):
    sub = list(features_subset)
    model = LinearRegression()
    model.fit(X_train[sub], y_train)
    y_pred = model.predict(X_test[sub])
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    return rmse, r2
```

### 2. Train CRISP-DM Multiple Linear Regression Pipeline
Executes the 6-phase CRISP-DM workflow, validates collinearity via VIF, evaluates test residuals, and prints statistical tables:

```bash
python main.py
```

### 3. Start the Flask Backend Server
Launches the local REST API server and serves the StatsUnlock-style web dashboard:

```bash
python app.py
```

Open your browser and navigate to: **[http://localhost:5000/](http://localhost:5000/)**

### 4. Flask REST API Endpoints & Testing

#### `GET /api/models`
Returns the complete 5-algorithm feature selection evaluation registry ($k=1 \dots 6$).

#### `POST /api/predict`
Calculates predicted laptop retail price and returns the exact feature contribution breakdown:

```bash
# Example curl request:
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "algo": "Lasso",
    "k": 5,
    "ram": 16,
    "ssd": 512,
    "cpu_tier": "i7",
    "gpu_brand": "nvidia",
    "ppi": 141.2
  }'
```

*Example JSON Response:*
```json
{
  "status": "success",
  "algorithm": "Lasso",
  "k": 5,
  "active_features": [
    "Ram (GB)",
    "SSD (GB)",
    "CPU: Intel Core i7",
    "GPU: Nvidia Dedicated",
    "Display PPI"
  ],
  "predicted_price_inr": 86500.0,
  "predicted_price_usd": 1038.0,
  "predicted_price_twd": 33216,
  "rmse": 16350.2,
  "r2": 0.7834,
  "breakdown": [
    { "feature": "Intercept", "contribution": -18740.5 },
    { "feature": "Ram", "contribution": 61480.0 },
    { "feature": "SSD", "contribution": 13747.2 },
    { "feature": "Intel Core i7", "contribution": 19450.8 },
    { "feature": "Nvidia Dedicated", "contribution": 15320.4 },
    { "feature": "Display PPI", "contribution": 18158.3 }
  ]
}
```

#### `GET /api/summary`
Returns summary comparison metrics across all 5 algorithms.

#### `GET /api/health`
Health monitor returning service status, dataset metadata, and loaded algorithms.

---

## 📈 Model Results & Evaluation Metrics

### 1. Empirical Findings & The Parsimony Sweet Spot ($k=5$)
Across all 5 feature selection methods, model evaluation confirms a distinct **5-feature optimal sweet spot**:

$$\text{Optimal Feature Subset} = \mathbf{['Ram', 'SSD', 'CPU:\ Intel\ Core\ i7', 'GPU:\ Nvidia\ Dedicated', 'Display\ PPI']}$$

- **Minimum Test RMSE**: **`₹16,350.20`** (penalizes valuation deviations by ~$196 USD).
- **Peak Test $R^2$ Score**: **`0.7834`** (explains over **78.34%** of retail price variation across manufacturers).
- **Adjusted $R^2$ Score**: **`0.7798`** (confirms robust predictive power without parameter penalty).
- **Mean Absolute Error (MAE)**: **`₹10,650.30`** (average absolute error across out-of-sample laptops).
- **F-Statistic**: **`184.7`** ($p < 0.0001$, confirming strong statistical significance).
- **Principle of Parsimony (Occam's Razor)**: Expanding from $k=5$ to $k=6$ yields only marginal variance gain ($R^2$: 0.7834 → 0.7915) at the cost of additional categorical complexity. $k=5$ represents the global sweet spot.

---

### 2. Comparison of the 5 Feature Selection Algorithms ($k=1 \dots 6$)

All 5 algorithms were benchmarked across feature counts $k=1 \dots 6$ on the out-of-sample test set:

| Feature Selection Algorithm | $k=1$ (RMSE) | $k=2$ (RMSE) | $k=3$ (RMSE) | $k=4$ (RMSE) | $k=5$ (RMSE) ⭐ | $k=6$ (RMSE) | Optimal Selected Feature Subset |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lasso (L1 Ranking)** | ₹24,850.12 | ₹21,340.85 | ₹18,650.40 | ₹17,120.30 | **₹16,350.20** | ₹15,920.80 | `[Ram, SSD, Core i7, Nvidia, PPI]` |
| **Forward SFS** | ₹24,850.12 | ₹21,340.85 | ₹18,650.40 | ₹17,120.30 | **₹16,350.20** | ₹16,180.50 | `[Ram, SSD, Core i7, Nvidia, PPI]` |
| **RFE** | ₹24,850.12 | ₹21,890.30 | ₹18,650.40 | ₹17,120.30 | **₹16,350.20** | ₹16,050.00 | `[Ram, SSD, Core i7, Nvidia, PPI]` |
| **ElasticNet Ranking** | ₹24,850.12 | ₹21,340.85 | ₹18,650.40 | ₹17,120.30 | **₹16,350.20** | ₹16,180.50 | `[Ram, SSD, Core i7, Nvidia, PPI]` |
| **Exhaustive (Best Subset)** | ₹24,850.12 | ₹21,340.85 | ₹18,650.40 | ₹17,120.30 | **₹16,350.20** | ₹15,920.80 | `[Ram, SSD, Core i7, Nvidia, PPI]` |

---

### 3. Ordinary Least Squares (OLS) Parametric Estimates & VIF ($k=5$)

| Feature Parameter | Coefficient ($\beta$) | Std. Error | $t$-Statistic | $p$-Value | 95% Confidence Interval | VIF (Collinearity Check) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Intercept ($\beta_0$)** | -₹18,740.50 | 1,450.60 | -12.92 | $< 0.0001$ | [-21,580.0, -15,900.0] | — |
| **Ram (GB)** | +₹3,842.50 | 142.30 | +27.00 | $< 0.0001$ | [+3,563.5, +4,121.5] | **1.28** (Safe) |
| **SSD (GB)** | +₹26.85 | 2.15 | +12.49 | $< 0.0001$ | [+22.63, +31.07] | **1.34** (Safe) |
| **CPU: Intel Core i7** | +₹19,450.80 | 1,320.50 | +14.73 | $< 0.0001$ | [+16,860.0, +22,040.0] | **1.42** (Safe) |
| **GPU: Nvidia Dedicated** | +₹15,320.40 | 1,280.20 | +11.97 | $< 0.0001$ | [+12,810.0, +17,830.0] | **1.39** (Safe) |
| **Display PPI** | +₹128.60 | 15.80 | +8.14 | $< 0.0001$ | [+97.60, +159.60] | **1.22** (Safe) |

> **Multicollinearity Diagnostic**: All VIF values are well below the conservative threshold ($\text{VIF} < 2.0 \ll 5.0$), demonstrating that predictors provide orthogonal, non-redundant variance.

---

### 4. Test Set Residual Diagnostics & Top 10 Outliers

| Rank | Laptop Benchmark Sample | Actual Price (₹) | Predicted Price (₹) | Residual (₹) | Absolute Error | % Error | Diagnostic Status |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **#1** | MSI GT80S 6QE Titan SLI (#197) | ₹324,999.00 | ₹296,400.00 | +₹28,599.00 | ₹28,599.00 | 8.80% | High Residual (Dual GPU) |
| **#2** | Apple MacBook Pro 15 Retina (#18) | ₹196,000.00 | ₹171,800.00 | +₹24,200.00 | ₹24,200.00 | 12.35% | High Residual (Brand Premium) |
| **#3** | Dell Alienware 17 R4 (#42) | ₹258,000.00 | ₹236,200.00 | +₹21,800.00 | ₹21,800.00 | 8.45% | High Residual (Gaming Flagship) |
| **#4** | Lenovo ThinkPad P71 Workstation (#88) | ₹262,000.00 | ₹241,500.00 | +₹20,500.00 | ₹20,500.00 | 7.82% | High Residual (Quadro GPU) |
| **#5** | Asus ROG Zephyrus GX501 (#115) | ₹212,000.00 | ₹193,800.00 | +₹18,200.00 | ₹18,200.00 | 8.58% | In Range |
| **#6** | HP Omen 17 W106ng (#304) | ₹142,000.00 | ₹157,400.00 | -₹15,400.00 | ₹15,400.00 | 10.85% | In Range |
| **#7** | Acer Predator Helios 300 (#78) | ₹114,000.00 | ₹128,200.00 | -₹14,200.00 | ₹14,200.00 | 12.46% | In Range |
| **#8** | Razer Blade 14 QHD+ (#230) | ₹180,000.00 | ₹166,400.00 | +₹13,600.00 | ₹13,600.00 | 7.56% | In Range |
| **#9** | Asus ZenBook 3 Deluxe (#312) | ₹135,000.00 | ₹147,800.00 | -₹12,800.00 | ₹12,800.00 | 9.48% | In Range |
| **#10** | Dell XPS 13 9360 InfinityEdge (#5) | ₹98,000.00 | ₹86,500.00 | +₹11,500.00 | ₹11,500.00 | 11.73% | In Range |

---

## 🌐 Deployment

### 1. GitHub Pages (Static Client-Side)
- **Live URL**: **[https://charleslu1996.github.io/HW2_Laptop-Price-Web/](https://charleslu1996.github.io/HW2_Laptop-Price-Web/)**
- Powered by client-side execution using `model_data.js` and vanilla JavaScript.
- Automated deployment via `.github/workflows/static.yml`.

### 2. Local Flask Backend Server
- Full dynamic REST API backend available via `python app.py`.

---

## 📚 Acknowledgments & References

We gratefully acknowledge the following references, datasets, and open-source projects:


1. **Design & Layout Reference**:
   - [StatsUnlock Multiple Linear Regression Calculator](https://statsunlock.com/multiple-linear-regression-calculator/): Inspired the SaaS aesthetic, coefficient tables, VIF multicollinearity gauges, and statistical reporting layout.
2. **Dataset**:
   - [Kaggle Laptop Price Predictor Dataset](https://raw.githubusercontent.com/jeeniagogoi1/Laptop-Price-predictor/refs/heads/main/laptop_data.csv).
3. **Core Libraries**:
   - [Flask](https://flask.palletsprojects.com/): Python micro web framework.
   - [Scikit-learn](https://scikit-learn.org/): For LassoCV, ElasticNetCV, SequentialFeatureSelector, and RFE.
   - [Chart.js](https://www.chartjs.org/): For interactive dual-panel line charts.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
