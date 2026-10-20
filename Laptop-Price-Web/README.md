# Laptop Price Prediction Web Application

[![Python Version](https://img.shields.io/badge/python-3.9%20%7C%203.10%20%7C%203.11%20%7C%203.12-blue.svg)](https://www.python.org/)
[![Framework](https://img.shields.io/badge/Framework-Flask-black?style=flat&logo=flask)](https://flask.palletsprojects.com/)
[![Machine Learning](https://img.shields.io/badge/scikit--learn-Multiple%20Linear%20Regression-F7931E?style=flat&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![Methodology](https://img.shields.io/badge/Methodology-CRISP--DM-success)](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

An end-to-end Machine Learning web application and data science project implementing the **CRISP-DM** (Cross-Industry Standard Process for Data Mining) methodology to analyze, evaluate, and predict notebook/laptop market retail prices using **Multiple Linear Regression** (`scikit-learn`).

The project is structured according to the clean, production-ready architecture inspired by `L5-1`.

---

## 📁 Project Directory Structure

```text
Laptop-Price-Web/
├── train_model.py              # ML script implementing CRISP-DM 6 phases & exporting .pkl
├── app.py                      # Flask backend API & web server
├── requirements.txt            # Python package dependencies
├── laptop_price_model.pkl      # Serialized Scikit-Learn Pipeline (generated after training)
├── actual_vs_predicted.png     # Diagnostic residual & fit evaluation plot (generated)
├── templates/
│   └── index.html              # Responsive glassmorphism web simulator & input form
└── README.md                   # Complete documentation & usage guide
```

---

## 🔬 CRISP-DM Methodology Implementation

The machine learning workflow inside [`train_model.py`](train_model.py) strictly follows the **CRISP-DM 6 Phases**:

| Phase | Description & Implementation |
| :--- | :--- |
| **1. Business Understanding** | Identify business objectives: helping buyers avoid overpriced hardware, assisting retailers with competitive pricing, and determining component upgrade value. |
| **2. Data Understanding** | Load Kaggle laptop dataset from GitHub raw URL, inspect shape (1,303 laptops, 12 features), column types, missing values, and price distribution. |
| **3. Data Preparation** | Clean raw strings (`Ram` to int, `Weight` to float), extract `Touchscreen` and `IPS` flags, compute display pixel density (`PPI = sqrt(w² + h²) / inches`), categorize CPU tiers, separate storage into `SSD` and `HDD` (GB), group GPU & OS categories, and construct `ColumnTransformer` with `OneHotEncoder`. |
| **4. Modeling** | Build end-to-end Scikit-Learn `Pipeline` combining `OneHotEncoder` and `LinearRegression()`. Fit on 80% training data, extract intercept and regression coefficients. |
| **5. Evaluation** | Evaluate test set performance using **MAE**, **MSE**, **RMSE**, and **$R^2$ Score**. Generate Actual vs. Predicted comparison table and export `actual_vs_predicted.png`. |
| **6. Deployment** | Serialize trained pipeline into [`laptop_price_model.pkl`](laptop_price_model.pkl) using `pickle.dump()`. Verify end-to-end inference with an unseen sample laptop. |

---

## 🛠️ Tech Stack

- **Backend Web Server**: Python 3.9+, Flask, WSGI
- **Machine Learning**: Scikit-Learn (`LinearRegression`, `Pipeline`, `ColumnTransformer`, `OneHotEncoder`, `train_test_split`)
- **Data Engineering**: Pandas, NumPy
- **Model Serialization**: Python `pickle` (`.pkl`)
- **Visualization**: Matplotlib (residual plots), Chart.js (client-side radar spec chart)
- **Frontend UI**: HTML5, Vanilla CSS3 (Glassmorphism, Dark Mode, CSS Grid & Flexbox, Plus Jakarta Sans & JetBrains Mono fonts)

---

## 💻 Installation & Quickstart Guide

### 1. Create and Activate Virtual Environment

- **Windows (PowerShell)**:
  ```powershell
  python -m venv .venv
  .venv\Scripts\Activate.ps1
  ```

- **macOS / Linux**:
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  ```

### 2. Install Required Dependencies
```bash
pip install -r requirements.txt
```

### 3. Train the Model (CRISP-DM Pipeline)
Execute [`train_model.py`](train_model.py) to download the dataset, execute data preparation, fit the linear regression pipeline, generate evaluation metrics, and export `laptop_price_model.pkl`:
```bash
python train_model.py
```

### 4. Run the Web Application
Start the Flask server:
```bash
python app.py
```
Open your browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🌐 RESTful API Endpoints

### 1. Valuation Inference Endpoint (`/api/predict`)

- **Method**: `POST` (JSON or HTML Form) or `GET` (URL Query String)
- **URL**: `http://localhost:5000/api/predict`

#### Sample JSON Request:
```bash
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "Company": "Dell",
    "TypeName": "Notebook",
    "Cpu_brand": "Intel Core i7",
    "Ram": 16,
    "SSD": 512,
    "HDD": 0,
    "Gpu_brand": "Nvidia",
    "OpSys": "Windows",
    "Inches": 15.6,
    "Resolution": "1920x1080",
    "Touchscreen": 0,
    "Ips": 1,
    "Weight": 1.85
  }'
```

#### Sample JSON Response:
```json
{
  "status": "success",
  "source": "scikit-learn pipeline (.pkl)",
  "predicted_price_inr": 72480.50,
  "predicted_price_usd": 873.26,
  "predicted_price_twd": 27542.59,
  "predicted_price_formatted": "₹ 72,480.50",
  "inputs": {
    "Company": "Dell",
    "TypeName": "Notebook",
    "Cpu_brand": "Intel Core i7",
    "Ram": 16,
    "SSD": 512,
    "HDD": 0,
    "Gpu_brand": "Nvidia",
    "OpSys": "Windows",
    "Inches": 15.6,
    "Resolution": "1920x1080",
    "Ppi": 141.21,
    "Touchscreen": 0,
    "Ips": 1,
    "Weight": 1.85
  }
}
```

### 2. Health & Model Diagnostics (`/api/health`)

- **Method**: `GET`
- **URL**: `http://localhost:5000/api/health`

#### Sample Response:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_file_exists": true,
  "ml_dependencies_ready": true
}
```

---

## 🎨 Frontend Web Simulator Highlights

- **Dynamic PPI Engine**: Automatically derives screen pixel density whenever diagonal inches or resolution dropdown changes.
- **Instant Presets**: 1-click presets for *High-End Gaming*, *MacBook Ultrabook*, *Student Budget*, and *Pro Workstation*.
- **Interactive Radar Chart**: Visualizes balance across RAM, SSD, CPU, GPU, and Display density using Chart.js.
- **Dual Inference Architecture**: Prioritizes live Flask backend API inference; automatically switches to high-accuracy client-side calibrated regression if executed on static hosts (e.g. GitHub Pages).
