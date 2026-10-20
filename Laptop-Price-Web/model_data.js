window.MODEL_DATA = {
    "Lasso":  [
                  {
                      "k":  1,
                      "features":  [
                                       "Ram (GB)"
                                   ],
                      "rmse":  24850.12,
                      "mae":  16840.2,
                      "r2":  0.5524,
                      "adj_r2":  0.551,
                      "f_stat":  320.5,
                      "f_pvalue":  1.2E-40,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  18520.45,
                                               "stderr":  1240.2,
                                               "tstat":  14.93,
                                               "pvalue":  1.2E-22,
                                               "ci_lower":  16080.0,
                                               "ci_upper":  20960.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  5168.7,
                                               "stderr":  142.3,
                                               "tstat =":  36.32,
                                               "tstat":  36.32,
                                               "pvalue":  1.2E-40,
                                               "ci_lower":  4889.0,
                                               "ci_upper":  5448.0,
                                               "vif":  1.0
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  268000.0,
                                           "residual":  56999.0,
                                           "abs_error":  56999.0,
                                           "pct_error":  17.54
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  101219.0,
                                           "residual":  94781.0,
                                           "abs_error":  94781.0,
                                           "pct_error":  48.36
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  183918.0,
                                           "residual":  74082.0,
                                           "abs_error":  74082.0,
                                           "pct_error":  28.71
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  183918.0,
                                           "residual":  78082.0,
                                           "abs_error":  78082.0,
                                           "pct_error":  29.8
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  142569.0,
                                           "residual":  69431.0,
                                           "abs_error":  69431.0,
                                           "pct_error":  32.75
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  101219.0,
                                           "residual":  40781.0,
                                           "abs_error":  40781.0,
                                           "pct_error":  28.72
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  101219.0,
                                           "residual":  12781.0,
                                           "abs_error":  12781.0,
                                           "pct_error":  11.21
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  101219.0,
                                           "residual":  78781.0,
                                           "abs_error":  78781.0,
                                           "pct_error":  43.77
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  101219.0,
                                           "residual":  33781.0,
                                           "abs_error":  33781.0,
                                           "pct_error":  25.02
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  59870.0,
                                           "residual":  38130.0,
                                           "abs_error":  38130.0,
                                           "pct_error":  38.91
                                       }
                                   ]
                  },
                  {
                      "k":  2,
                      "features":  [
                                       "Ram (GB)",
                                       "SSD (GB)"
                                   ],
                      "rmse":  21340.85,
                      "mae":  14210.5,
                      "r2":  0.6582,
                      "adj_r2":  0.656,
                      "f_stat":  248.6,
                      "f_pvalue":  5.4E-38,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  8420.15,
                                               "stderr":  1150.8,
                                               "tstat":  7.32,
                                               "pvalue":  5.6E-13,
                                               "ci_lower":  6160.0,
                                               "ci_upper":  10680.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  4320.5,
                                               "stderr":  158.4,
                                               "tstat":  27.28,
                                               "pvalue":  1.1E-35,
                                               "ci_lower":  4009.0,
                                               "ci_upper":  4631.0,
                                               "vif":  1.25
                                           },
                                           {
                                               "feature":  "SSD (GB)",
                                               "coef":  35.8,
                                               "stderr":  2.45,
                                               "tstat":  14.61,
                                               "pvalue":  8.2E-28,
                                               "ci_lower":  30.9,
                                               "ci_upper":  40.7,
                                               "vif":  1.25
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  278000.0,
                                           "residual":  46999.0,
                                           "abs_error":  46999.0,
                                           "pct_error":  14.46
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  145000.0,
                                           "residual":  51000.0,
                                           "abs_error":  51000.0,
                                           "pct_error":  26.02
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  215000.0,
                                           "residual":  43000.0,
                                           "abs_error":  43000.0,
                                           "pct_error":  16.67
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  215000.0,
                                           "residual":  47000.0,
                                           "abs_error":  47000.0,
                                           "pct_error":  17.94
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  172000.0,
                                           "residual":  40000.0,
                                           "abs_error":  40000.0,
                                           "pct_error":  18.87
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  126000.0,
                                           "residual":  16000.0,
                                           "abs_error":  16000.0,
                                           "pct_error":  11.27
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  126000.0,
                                           "residual":  -12000.0,
                                           "abs_error":  12000.0,
                                           "pct_error":  10.53
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  145000.0,
                                           "residual":  35000.0,
                                           "abs_error":  35000.0,
                                           "pct_error":  19.44
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  145000.0,
                                           "residual":  -10000.0,
                                           "abs_error":  10000.0,
                                           "pct_error":  7.41
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  82000.0,
                                           "residual":  16000.0,
                                           "abs_error":  16000.0,
                                           "pct_error":  16.33
                                       }
                                   ]
                  },
                  {
                      "k":  3,
                      "features":  [
                                       "Ram (GB)",
                                       "SSD (GB)",
                                       "CPU: Intel Core i7"
                                   ],
                      "rmse":  18650.4,
                      "mae":  12430.1,
                      "r2":  0.7241,
                      "adj_r2":  0.7215,
                      "f_stat":  215.4,
                      "f_pvalue":  2.1E-35,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  2150.8,
                                               "stderr":  1080.5,
                                               "tstat":  1.99,
                                               "pvalue":  0.0468,
                                               "ci_lower":  30.0,
                                               "ci_upper":  4270.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  4150.2,
                                               "stderr":  152.1,
                                               "tstat":  27.28,
                                               "pvalue":  1.2E-33,
                                               "ci_lower":  3851.0,
                                               "ci_upper":  4449.0,
                                               "vif":  1.28
                                           },
                                           {
                                               "feature":  "SSD (GB)",
                                               "coef":  31.4,
                                               "stderr":  2.3,
                                               "tstat":  13.65,
                                               "pvalue":  1.4E-25,
                                               "ci_lower":  26.8,
                                               "ci_upper":  36.0,
                                               "vif":  1.3
                                           },
                                           {
                                               "feature":  "CPU: Intel Core i7",
                                               "coef":  21850.4,
                                               "stderr":  1450.2,
                                               "tstat":  15.06,
                                               "pvalue":  4.2E-32,
                                               "ci_lower":  19000.0,
                                               "ci_upper":  24700.0,
                                               "vif":  1.35
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  289000.0,
                                           "residual":  35999.0,
                                           "abs_error":  35999.0,
                                           "pct_error":  11.08
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  166000.0,
                                           "residual":  30000.0,
                                           "abs_error":  30000.0,
                                           "pct_error":  15.31
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  232000.0,
                                           "residual":  26000.0,
                                           "abs_error":  26000.0,
                                           "pct_error":  10.08
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  234000.0,
                                           "residual":  28000.0,
                                           "abs_error":  28000.0,
                                           "pct_error":  10.69
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  188000.0,
                                           "residual":  24000.0,
                                           "abs_error":  24000.0,
                                           "pct_error":  11.32
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  148000.0,
                                           "residual":  -6000.0,
                                           "abs_error":  6000.0,
                                           "pct_error":  4.23
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  126000.0,
                                           "residual":  -12000.0,
                                           "abs_error":  12000.0,
                                           "pct_error":  10.53
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  166000.0,
                                           "residual":  14000.0,
                                           "abs_error":  14000.0,
                                           "pct_error":  7.78
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  146000.0,
                                           "residual":  -11000.0,
                                           "abs_error":  11000.0,
                                           "pct_error":  8.15
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  82000.0,
                                           "residual":  16000.0,
                                           "abs_error":  16000.0,
                                           "pct_error":  16.33
                                       }
                                   ]
                  },
                  {
                      "k":  4,
                      "features":  [
                                       "Ram (GB)",
                                       "SSD (GB)",
                                       "CPU: Intel Core i7",
                                       "GPU: Nvidia Dedicated"
                                   ],
                      "rmse":  17120.3,
                      "mae":  11320.8,
                      "r2":  0.7625,
                      "adj_r2":  0.7598,
                      "f_stat":  198.2,
                      "f_pvalue":  1.1E-34,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  -4320.6,
                                               "stderr":  1020.4,
                                               "tstat":  -4.23,
                                               "pvalue":  2.5E-05,
                                               "ci_lower":  -6320.0,
                                               "ci_upper":  -2320.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  3980.4,
                                               "stderr":  148.2,
                                               "tstat":  26.85,
                                               "pvalue":  2.1E-32,
                                               "ci_lower":  3689.0,
                                               "ci_upper":  4271.0,
                                               "vif":  1.3
                                           },
                                           {
                                               "feature":  "SSD (GB)",
                                               "coef":  28.9,
                                               "stderr":  2.2,
                                               "tstat":  13.13,
                                               "pvalue":  4.2E-24,
                                               "ci_lower":  24.5,
                                               "ci_upper":  33.3,
                                               "vif":  1.32
                                           },
                                           {
                                               "feature":  "CPU: Intel Core i7",
                                               "coef":  20120.5,
                                               "stderr":  1380.1,
                                               "tstat":  14.58,
                                               "pvalue":  6.2E-30,
                                               "ci_lower":  17410.0,
                                               "ci_upper":  22830.0,
                                               "vif":  1.38
                                           },
                                           {
                                               "feature":  "GPU: Nvidia Dedicated",
                                               "coef":  16450.2,
                                               "stderr":  1290.4,
                                               "tstat":  12.75,
                                               "pvalue":  8.5E-26,
                                               "ci_lower":  13910.0,
                                               "ci_upper":  18990.0,
                                               "vif":  1.35
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  295000.0,
                                           "residual":  29999.0,
                                           "abs_error":  29999.0,
                                           "pct_error":  9.23
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  168000.0,
                                           "residual":  28000.0,
                                           "abs_error":  28000.0,
                                           "pct_error":  14.29
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  238000.0,
                                           "residual":  20000.0,
                                           "abs_error":  20000.0,
                                           "pct_error":  7.75
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  240000.0,
                                           "residual":  22000.0,
                                           "abs_error":  22000.0,
                                           "pct_error":  8.4
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  194000.0,
                                           "residual":  18000.0,
                                           "abs_error":  18000.0,
                                           "pct_error":  8.49
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  153000.0,
                                           "residual":  -11000.0,
                                           "abs_error":  11000.0,
                                           "pct_error":  7.75
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  124000.0,
                                           "residual":  -10000.0,
                                           "abs_error":  10000.0,
                                           "pct_error":  8.77
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  168000.0,
                                           "residual":  12000.0,
                                           "abs_error":  12000.0,
                                           "pct_error":  6.67
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  146000.0,
                                           "residual":  -11000.0,
                                           "abs_error":  11000.0,
                                           "pct_error":  8.15
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  85000.0,
                                           "residual":  13000.0,
                                           "abs_error":  13000.0,
                                           "pct_error":  13.27
                                       }
                                   ]
                  },
                  {
                      "k":  5,
                      "features":  [
                                       "Ram (GB)",
                                       "SSD (GB)",
                                       "CPU: Intel Core i7",
                                       "GPU: Nvidia Dedicated",
                                       "Display PPI"
                                   ],
                      "rmse":  16350.2,
                      "mae":  10650.3,
                      "r2":  0.7834,
                      "adj_r2":  0.7798,
                      "f_stat":  184.7,
                      "f_pvalue":  1.8E-35,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  -18740.5,
                                               "stderr":  1450.6,
                                               "tstat":  -12.92,
                                               "pvalue":  1.8E-35,
                                               "ci_lower":  -21580.0,
                                               "ci_upper":  -15900.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  3842.5,
                                               "stderr":  142.3,
                                               "tstat":  27.0,
                                               "pvalue":  1.2E-40,
                                               "ci_lower":  3563.5,
                                               "ci_upper":  4121.5,
                                               "vif":  1.28
                                           },
                                           {
                                               "feature":  "SSD (GB)",
                                               "coef":  26.85,
                                               "stderr":  2.15,
                                               "tstat":  12.49,
                                               "pvalue":  8.4E-32,
                                               "ci_lower":  22.63,
                                               "ci_upper":  31.07,
                                               "vif":  1.34
                                           },
                                           {
                                               "feature":  "CPU: Intel Core i7",
                                               "coef":  19450.8,
                                               "stderr":  1320.5,
                                               "tstat":  14.73,
                                               "pvalue":  3.1E-38,
                                               "ci_lower":  16860.0,
                                               "ci_upper":  22040.0,
                                               "vif":  1.42
                                           },
                                           {
                                               "feature":  "GPU: Nvidia Dedicated",
                                               "coef":  15320.4,
                                               "stderr":  1280.2,
                                               "tstat":  11.97,
                                               "pvalue":  6.5E-30,
                                               "ci_lower":  12810.0,
                                               "ci_upper":  17830.0,
                                               "vif":  1.39
                                           },
                                           {
                                               "feature":  "Display PPI",
                                               "coef":  128.6,
                                               "stderr":  15.8,
                                               "tstat":  8.14,
                                               "pvalue":  2.2E-15,
                                               "ci_lower":  97.6,
                                               "ci_upper":  159.6,
                                               "vif":  1.22
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  296400.0,
                                           "residual":  28599.0,
                                           "abs_error":  28599.0,
                                           "pct_error":  8.8
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  171800.0,
                                           "residual":  24200.0,
                                           "abs_error":  24200.0,
                                           "pct_error":  12.35
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  236200.0,
                                           "residual":  21800.0,
                                           "abs_error":  21800.0,
                                           "pct_error":  8.45
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  241500.0,
                                           "residual":  20500.0,
                                           "abs_error":  20500.0,
                                           "pct_error":  7.82
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  193800.0,
                                           "residual":  18200.0,
                                           "abs_error":  18200.0,
                                           "pct_error":  8.58
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  157400.0,
                                           "residual":  -15400.0,
                                           "abs_error":  15400.0,
                                           "pct_error":  10.85
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  128200.0,
                                           "residual":  -14200.0,
                                           "abs_error":  14200.0,
                                           "pct_error":  12.46
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  166400.0,
                                           "residual":  13600.0,
                                           "abs_error":  13600.0,
                                           "pct_error":  7.56
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  147800.0,
                                           "residual":  -12800.0,
                                           "abs_error":  12800.0,
                                           "pct_error":  9.48
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  86500.0,
                                           "residual":  11500.0,
                                           "abs_error":  11500.0,
                                           "pct_error":  11.73
                                       }
                                   ]
                  },
                  {
                      "k":  6,
                      "features":  [
                                       "Ram (GB)",
                                       "SSD (GB)",
                                       "CPU: Intel Core i7",
                                       "GPU: Nvidia Dedicated",
                                       "Display PPI",
                                       "Chassis: Gaming Type"
                                   ],
                      "rmse":  15920.8,
                      "mae":  10240.5,
                      "r2":  0.7915,
                      "adj_r2":  0.7872,
                      "f_stat":  168.9,
                      "f_pvalue":  4.2E-36,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (帣?)",
                                               "coef":  -22150.3,
                                               "stderr":  1680.2,
                                               "tstat":  -13.18,
                                               "pvalue":  4.2E-36,
                                               "ci_lower":  -25450.0,
                                               "ci_upper":  -18850.0,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "Ram (GB)",
                                               "coef":  3710.2,
                                               "stderr":  145.1,
                                               "tstat":  25.57,
                                               "pvalue":  3.2E-38,
                                               "ci_lower":  3425.0,
                                               "ci_upper":  3995.0,
                                               "vif":  1.35
                                           },
                                           {
                                               "feature":  "SSD (GB)",
                                               "coef":  25.4,
                                               "stderr":  2.18,
                                               "tstat":  11.65,
                                               "pvalue":  4.1E-30,
                                               "ci_lower":  21.12,
                                               "ci_upper":  29.68,
                                               "vif":  1.38
                                           },
                                           {
                                               "feature":  "CPU: Intel Core i7",
                                               "coef":  18650.3,
                                               "stderr":  1350.4,
                                               "tstat":  13.81,
                                               "pvalue":  8.1E-36,
                                               "ci_lower":  16000.0,
                                               "ci_upper":  21300.0,
                                               "vif":  1.48
                                           },
                                           {
                                               "feature":  "GPU: Nvidia Dedicated",
                                               "coef":  14200.5,
                                               "stderr":  1310.2,
                                               "tstat":  10.84,
                                               "pvalue":  2.4E-27,
                                               "ci_lower":  11630.0,
                                               "ci_upper":  16770.0,
                                               "vif":  1.52
                                           },
                                           {
                                               "feature":  "Display PPI",
                                               "coef":  124.2,
                                               "stderr":  15.9,
                                               "tstat":  7.81,
                                               "pvalue":  8.4E-15,
                                               "ci_lower":  93.0,
                                               "ci_upper":  155.4,
                                               "vif":  1.25
                                           },
                                           {
                                               "feature":  "Chassis: Gaming Type",
                                               "coef":  11850.2,
                                               "stderr":  1850.4,
                                               "tstat":  6.4,
                                               "pvalue":  2.8E-10,
                                               "ci_lower":  8220.0,
                                               "ci_upper":  15480.0,
                                               "vif":  1.58
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  197,
                                           "actual":  324999.0,
                                           "predicted":  301200.0,
                                           "residual":  23799.0,
                                           "abs_error":  23799.0,
                                           "pct_error":  7.32
                                       },
                                       {
                                           "rank":  2,
                                           "index":  18,
                                           "actual":  196000.0,
                                           "predicted":  173500.0,
                                           "residual":  22500.0,
                                           "abs_error":  22500.0,
                                           "pct_error":  11.48
                                       },
                                       {
                                           "rank":  3,
                                           "index":  42,
                                           "actual":  258000.0,
                                           "predicted":  239800.0,
                                           "residual":  18200.0,
                                           "abs_error":  18200.0,
                                           "pct_error":  7.05
                                       },
                                       {
                                           "rank":  4,
                                           "index":  88,
                                           "actual":  262000.0,
                                           "predicted":  243000.0,
                                           "residual":  19000.0,
                                           "abs_error":  19000.0,
                                           "pct_error":  7.25
                                       },
                                       {
                                           "rank":  5,
                                           "index":  115,
                                           "actual":  212000.0,
                                           "predicted":  196000.0,
                                           "residual":  16000.0,
                                           "abs_error":  16000.0,
                                           "pct_error":  7.55
                                       },
                                       {
                                           "rank":  6,
                                           "index":  304,
                                           "actual":  142000.0,
                                           "predicted":  155000.0,
                                           "residual":  -13000.0,
                                           "abs_error":  13000.0,
                                           "pct_error":  9.15
                                       },
                                       {
                                           "rank":  7,
                                           "index":  78,
                                           "actual":  114000.0,
                                           "predicted":  127000.0,
                                           "residual":  -13000.0,
                                           "abs_error":  13000.0,
                                           "pct_error":  11.4
                                       },
                                       {
                                           "rank":  8,
                                           "index":  230,
                                           "actual":  180000.0,
                                           "predicted":  167500.0,
                                           "residual":  12500.0,
                                           "abs_error":  12500.0,
                                           "pct_error":  6.94
                                       },
                                       {
                                           "rank":  9,
                                           "index":  312,
                                           "actual":  135000.0,
                                           "predicted":  147500.0,
                                           "residual":  -12500.0,
                                           "abs_error":  12500.0,
                                           "pct_error":  9.26
                                       },
                                       {
                                           "rank":  10,
                                           "index":  5,
                                           "actual":  98000.0,
                                           "predicted":  87000.0,
                                           "residual":  11000.0,
                                           "abs_error":  11000.0,
                                           "pct_error":  11.22
                                       }
                                   ]
                  }
              ],
    "Forward SFS":  [
                        {
                            "k":  1,
                            "features":  [
                                             "Ram (GB)"
                                         ],
                            "rmse":  24850.12,
                            "mae":  16840.2,
                            "r2":  0.5524,
                            "adj_r2":  0.551,
                            "f_stat":  320.5,
                            "f_pvalue":  1.2E-40,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  18520.45,
                                                     "stderr":  1240.2,
                                                     "tstat":  14.93,
                                                     "pvalue":  1.2E-22,
                                                     "ci_lower":  16080.0,
                                                     "ci_upper":  20960.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  5168.7,
                                                     "stderr":  142.3,
                                                     "tstat =":  36.32,
                                                     "tstat":  36.32,
                                                     "pvalue":  1.2E-40,
                                                     "ci_lower":  4889.0,
                                                     "ci_upper":  5448.0,
                                                     "vif":  1.0
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  268000.0,
                                                 "residual":  56999.0,
                                                 "abs_error":  56999.0,
                                                 "pct_error":  17.54
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  101219.0,
                                                 "residual":  94781.0,
                                                 "abs_error":  94781.0,
                                                 "pct_error":  48.36
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  183918.0,
                                                 "residual":  74082.0,
                                                 "abs_error":  74082.0,
                                                 "pct_error":  28.71
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  183918.0,
                                                 "residual":  78082.0,
                                                 "abs_error":  78082.0,
                                                 "pct_error":  29.8
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  142569.0,
                                                 "residual":  69431.0,
                                                 "abs_error":  69431.0,
                                                 "pct_error":  32.75
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  101219.0,
                                                 "residual":  40781.0,
                                                 "abs_error":  40781.0,
                                                 "pct_error":  28.72
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  101219.0,
                                                 "residual":  12781.0,
                                                 "abs_error":  12781.0,
                                                 "pct_error":  11.21
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  101219.0,
                                                 "residual":  78781.0,
                                                 "abs_error":  78781.0,
                                                 "pct_error":  43.77
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  101219.0,
                                                 "residual":  33781.0,
                                                 "abs_error":  33781.0,
                                                 "pct_error":  25.02
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  59870.0,
                                                 "residual":  38130.0,
                                                 "abs_error":  38130.0,
                                                 "pct_error":  38.91
                                             }
                                         ]
                        },
                        {
                            "k":  2,
                            "features":  [
                                             "Ram (GB)",
                                             "SSD (GB)"
                                         ],
                            "rmse":  21340.85,
                            "mae":  14210.5,
                            "r2":  0.6582,
                            "adj_r2":  0.656,
                            "f_stat":  248.6,
                            "f_pvalue":  5.4E-38,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  8420.15,
                                                     "stderr":  1150.8,
                                                     "tstat":  7.32,
                                                     "pvalue":  5.6E-13,
                                                     "ci_lower":  6160.0,
                                                     "ci_upper":  10680.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  4320.5,
                                                     "stderr":  158.4,
                                                     "tstat":  27.28,
                                                     "pvalue":  1.1E-35,
                                                     "ci_lower":  4009.0,
                                                     "ci_upper":  4631.0,
                                                     "vif":  1.25
                                                 },
                                                 {
                                                     "feature":  "SSD (GB)",
                                                     "coef":  35.8,
                                                     "stderr":  2.45,
                                                     "tstat":  14.61,
                                                     "pvalue":  8.2E-28,
                                                     "ci_lower":  30.9,
                                                     "ci_upper":  40.7,
                                                     "vif":  1.25
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  278000.0,
                                                 "residual":  46999.0,
                                                 "abs_error":  46999.0,
                                                 "pct_error":  14.46
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  145000.0,
                                                 "residual":  51000.0,
                                                 "abs_error":  51000.0,
                                                 "pct_error":  26.02
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  215000.0,
                                                 "residual":  43000.0,
                                                 "abs_error":  43000.0,
                                                 "pct_error":  16.67
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  215000.0,
                                                 "residual":  47000.0,
                                                 "abs_error":  47000.0,
                                                 "pct_error":  17.94
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  172000.0,
                                                 "residual":  40000.0,
                                                 "abs_error":  40000.0,
                                                 "pct_error":  18.87
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  126000.0,
                                                 "residual":  16000.0,
                                                 "abs_error":  16000.0,
                                                 "pct_error":  11.27
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  126000.0,
                                                 "residual":  -12000.0,
                                                 "abs_error":  12000.0,
                                                 "pct_error":  10.53
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  145000.0,
                                                 "residual":  35000.0,
                                                 "abs_error":  35000.0,
                                                 "pct_error":  19.44
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  145000.0,
                                                 "residual":  -10000.0,
                                                 "abs_error":  10000.0,
                                                 "pct_error":  7.41
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  82000.0,
                                                 "residual":  16000.0,
                                                 "abs_error":  16000.0,
                                                 "pct_error":  16.33
                                             }
                                         ]
                        },
                        {
                            "k":  3,
                            "features":  [
                                             "Ram (GB)",
                                             "SSD (GB)",
                                             "CPU: Intel Core i7"
                                         ],
                            "rmse":  18650.4,
                            "mae":  12430.1,
                            "r2":  0.7241,
                            "adj_r2":  0.7215,
                            "f_stat":  215.4,
                            "f_pvalue":  2.1E-35,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  2150.8,
                                                     "stderr":  1080.5,
                                                     "tstat":  1.99,
                                                     "pvalue":  0.0468,
                                                     "ci_lower":  30.0,
                                                     "ci_upper":  4270.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  4150.2,
                                                     "stderr":  152.1,
                                                     "tstat":  27.28,
                                                     "pvalue":  1.2E-33,
                                                     "ci_lower":  3851.0,
                                                     "ci_upper":  4449.0,
                                                     "vif":  1.28
                                                 },
                                                 {
                                                     "feature":  "SSD (GB)",
                                                     "coef":  31.4,
                                                     "stderr":  2.3,
                                                     "tstat":  13.65,
                                                     "pvalue":  1.4E-25,
                                                     "ci_lower":  26.8,
                                                     "ci_upper":  36.0,
                                                     "vif":  1.3
                                                 },
                                                 {
                                                     "feature":  "CPU: Intel Core i7",
                                                     "coef":  21850.4,
                                                     "stderr":  1450.2,
                                                     "tstat":  15.06,
                                                     "pvalue":  4.2E-32,
                                                     "ci_lower":  19000.0,
                                                     "ci_upper":  24700.0,
                                                     "vif":  1.35
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  289000.0,
                                                 "residual":  35999.0,
                                                 "abs_error":  35999.0,
                                                 "pct_error":  11.08
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  166000.0,
                                                 "residual":  30000.0,
                                                 "abs_error":  30000.0,
                                                 "pct_error":  15.31
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  232000.0,
                                                 "residual":  26000.0,
                                                 "abs_error":  26000.0,
                                                 "pct_error":  10.08
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  234000.0,
                                                 "residual":  28000.0,
                                                 "abs_error":  28000.0,
                                                 "pct_error":  10.69
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  188000.0,
                                                 "residual":  24000.0,
                                                 "abs_error":  24000.0,
                                                 "pct_error":  11.32
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  148000.0,
                                                 "residual":  -6000.0,
                                                 "abs_error":  6000.0,
                                                 "pct_error":  4.23
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  126000.0,
                                                 "residual":  -12000.0,
                                                 "abs_error":  12000.0,
                                                 "pct_error":  10.53
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  166000.0,
                                                 "residual":  14000.0,
                                                 "abs_error":  14000.0,
                                                 "pct_error":  7.78
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  146000.0,
                                                 "residual":  -11000.0,
                                                 "abs_error":  11000.0,
                                                 "pct_error":  8.15
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  82000.0,
                                                 "residual":  16000.0,
                                                 "abs_error":  16000.0,
                                                 "pct_error":  16.33
                                             }
                                         ]
                        },
                        {
                            "k":  4,
                            "features":  [
                                             "Ram (GB)",
                                             "SSD (GB)",
                                             "CPU: Intel Core i7",
                                             "GPU: Nvidia Dedicated"
                                         ],
                            "rmse":  17120.3,
                            "mae":  11320.8,
                            "r2":  0.7625,
                            "adj_r2":  0.7598,
                            "f_stat":  198.2,
                            "f_pvalue":  1.1E-34,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  -4320.6,
                                                     "stderr":  1020.4,
                                                     "tstat":  -4.23,
                                                     "pvalue":  2.5E-05,
                                                     "ci_lower":  -6320.0,
                                                     "ci_upper":  -2320.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  3980.4,
                                                     "stderr":  148.2,
                                                     "tstat":  26.85,
                                                     "pvalue":  2.1E-32,
                                                     "ci_lower":  3689.0,
                                                     "ci_upper":  4271.0,
                                                     "vif":  1.3
                                                 },
                                                 {
                                                     "feature":  "SSD (GB)",
                                                     "coef":  28.9,
                                                     "stderr":  2.2,
                                                     "tstat":  13.13,
                                                     "pvalue":  4.2E-24,
                                                     "ci_lower":  24.5,
                                                     "ci_upper":  33.3,
                                                     "vif":  1.32
                                                 },
                                                 {
                                                     "feature":  "CPU: Intel Core i7",
                                                     "coef":  20120.5,
                                                     "stderr":  1380.1,
                                                     "tstat":  14.58,
                                                     "pvalue":  6.2E-30,
                                                     "ci_lower":  17410.0,
                                                     "ci_upper":  22830.0,
                                                     "vif":  1.38
                                                 },
                                                 {
                                                     "feature":  "GPU: Nvidia Dedicated",
                                                     "coef":  16450.2,
                                                     "stderr":  1290.4,
                                                     "tstat":  12.75,
                                                     "pvalue":  8.5E-26,
                                                     "ci_lower":  13910.0,
                                                     "ci_upper":  18990.0,
                                                     "vif":  1.35
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  295000.0,
                                                 "residual":  29999.0,
                                                 "abs_error":  29999.0,
                                                 "pct_error":  9.23
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  168000.0,
                                                 "residual":  28000.0,
                                                 "abs_error":  28000.0,
                                                 "pct_error":  14.29
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  238000.0,
                                                 "residual":  20000.0,
                                                 "abs_error":  20000.0,
                                                 "pct_error":  7.75
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  240000.0,
                                                 "residual":  22000.0,
                                                 "abs_error":  22000.0,
                                                 "pct_error":  8.4
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  194000.0,
                                                 "residual":  18000.0,
                                                 "abs_error":  18000.0,
                                                 "pct_error":  8.49
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  153000.0,
                                                 "residual":  -11000.0,
                                                 "abs_error":  11000.0,
                                                 "pct_error":  7.75
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  124000.0,
                                                 "residual":  -10000.0,
                                                 "abs_error":  10000.0,
                                                 "pct_error":  8.77
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  168000.0,
                                                 "residual":  12000.0,
                                                 "abs_error":  12000.0,
                                                 "pct_error":  6.67
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  146000.0,
                                                 "residual":  -11000.0,
                                                 "abs_error":  11000.0,
                                                 "pct_error":  8.15
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  85000.0,
                                                 "residual":  13000.0,
                                                 "abs_error":  13000.0,
                                                 "pct_error":  13.27
                                             }
                                         ]
                        },
                        {
                            "k":  5,
                            "features":  [
                                             "Ram (GB)",
                                             "SSD (GB)",
                                             "CPU: Intel Core i7",
                                             "GPU: Nvidia Dedicated",
                                             "Display PPI"
                                         ],
                            "rmse":  16350.2,
                            "mae":  10650.3,
                            "r2":  0.7834,
                            "adj_r2":  0.7798,
                            "f_stat":  184.7,
                            "f_pvalue":  1.8E-35,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  -18740.5,
                                                     "stderr":  1450.6,
                                                     "tstat":  -12.92,
                                                     "pvalue":  1.8E-35,
                                                     "ci_lower":  -21580.0,
                                                     "ci_upper":  -15900.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  3842.5,
                                                     "stderr":  142.3,
                                                     "tstat":  27.0,
                                                     "pvalue":  1.2E-40,
                                                     "ci_lower":  3563.5,
                                                     "ci_upper":  4121.5,
                                                     "vif":  1.28
                                                 },
                                                 {
                                                     "feature":  "SSD (GB)",
                                                     "coef":  26.85,
                                                     "stderr":  2.15,
                                                     "tstat":  12.49,
                                                     "pvalue":  8.4E-32,
                                                     "ci_lower":  22.63,
                                                     "ci_upper":  31.07,
                                                     "vif":  1.34
                                                 },
                                                 {
                                                     "feature":  "CPU: Intel Core i7",
                                                     "coef":  19450.8,
                                                     "stderr":  1320.5,
                                                     "tstat":  14.73,
                                                     "pvalue":  3.1E-38,
                                                     "ci_lower":  16860.0,
                                                     "ci_upper":  22040.0,
                                                     "vif":  1.42
                                                 },
                                                 {
                                                     "feature":  "GPU: Nvidia Dedicated",
                                                     "coef":  15320.4,
                                                     "stderr":  1280.2,
                                                     "tstat":  11.97,
                                                     "pvalue":  6.5E-30,
                                                     "ci_lower":  12810.0,
                                                     "ci_upper":  17830.0,
                                                     "vif":  1.39
                                                 },
                                                 {
                                                     "feature":  "Display PPI",
                                                     "coef":  128.6,
                                                     "stderr":  15.8,
                                                     "tstat":  8.14,
                                                     "pvalue":  2.2E-15,
                                                     "ci_lower":  97.6,
                                                     "ci_upper":  159.6,
                                                     "vif":  1.22
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  296400.0,
                                                 "residual":  28599.0,
                                                 "abs_error":  28599.0,
                                                 "pct_error":  8.8
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  171800.0,
                                                 "residual":  24200.0,
                                                 "abs_error":  24200.0,
                                                 "pct_error":  12.35
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  236200.0,
                                                 "residual":  21800.0,
                                                 "abs_error":  21800.0,
                                                 "pct_error":  8.45
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  241500.0,
                                                 "residual":  20500.0,
                                                 "abs_error":  20500.0,
                                                 "pct_error":  7.82
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  193800.0,
                                                 "residual":  18200.0,
                                                 "abs_error":  18200.0,
                                                 "pct_error":  8.58
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  157400.0,
                                                 "residual":  -15400.0,
                                                 "abs_error":  15400.0,
                                                 "pct_error":  10.85
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  128200.0,
                                                 "residual":  -14200.0,
                                                 "abs_error":  14200.0,
                                                 "pct_error":  12.46
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  166400.0,
                                                 "residual":  13600.0,
                                                 "abs_error":  13600.0,
                                                 "pct_error":  7.56
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  147800.0,
                                                 "residual":  -12800.0,
                                                 "abs_error":  12800.0,
                                                 "pct_error":  9.48
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  86500.0,
                                                 "residual":  11500.0,
                                                 "abs_error":  11500.0,
                                                 "pct_error":  11.73
                                             }
                                         ]
                        },
                        {
                            "k":  6,
                            "features":  [
                                             "Ram (GB)",
                                             "SSD (GB)",
                                             "CPU: Intel Core i7",
                                             "GPU: Nvidia Dedicated",
                                             "Display PPI",
                                             "Chassis: Gaming Type"
                                         ],
                            "rmse":  15920.8,
                            "mae":  10240.5,
                            "r2":  0.7915,
                            "adj_r2":  0.7872,
                            "f_stat":  168.9,
                            "f_pvalue":  4.2E-36,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (帣?)",
                                                     "coef":  -22150.3,
                                                     "stderr":  1680.2,
                                                     "tstat":  -13.18,
                                                     "pvalue":  4.2E-36,
                                                     "ci_lower":  -25450.0,
                                                     "ci_upper":  -18850.0,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "Ram (GB)",
                                                     "coef":  3710.2,
                                                     "stderr":  145.1,
                                                     "tstat":  25.57,
                                                     "pvalue":  3.2E-38,
                                                     "ci_lower":  3425.0,
                                                     "ci_upper":  3995.0,
                                                     "vif":  1.35
                                                 },
                                                 {
                                                     "feature":  "SSD (GB)",
                                                     "coef":  25.4,
                                                     "stderr":  2.18,
                                                     "tstat":  11.65,
                                                     "pvalue":  4.1E-30,
                                                     "ci_lower":  21.12,
                                                     "ci_upper":  29.68,
                                                     "vif":  1.38
                                                 },
                                                 {
                                                     "feature":  "CPU: Intel Core i7",
                                                     "coef":  18650.3,
                                                     "stderr":  1350.4,
                                                     "tstat":  13.81,
                                                     "pvalue":  8.1E-36,
                                                     "ci_lower":  16000.0,
                                                     "ci_upper":  21300.0,
                                                     "vif":  1.48
                                                 },
                                                 {
                                                     "feature":  "GPU: Nvidia Dedicated",
                                                     "coef":  14200.5,
                                                     "stderr":  1310.2,
                                                     "tstat":  10.84,
                                                     "pvalue":  2.4E-27,
                                                     "ci_lower":  11630.0,
                                                     "ci_upper":  16770.0,
                                                     "vif":  1.52
                                                 },
                                                 {
                                                     "feature":  "Display PPI",
                                                     "coef":  124.2,
                                                     "stderr":  15.9,
                                                     "tstat":  7.81,
                                                     "pvalue":  8.4E-15,
                                                     "ci_lower":  93.0,
                                                     "ci_upper":  155.4,
                                                     "vif":  1.25
                                                 },
                                                 {
                                                     "feature":  "Chassis: Gaming Type",
                                                     "coef":  11850.2,
                                                     "stderr":  1850.4,
                                                     "tstat":  6.4,
                                                     "pvalue":  2.8E-10,
                                                     "ci_lower":  8220.0,
                                                     "ci_upper":  15480.0,
                                                     "vif":  1.58
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  197,
                                                 "actual":  324999.0,
                                                 "predicted":  301200.0,
                                                 "residual":  23799.0,
                                                 "abs_error":  23799.0,
                                                 "pct_error":  7.32
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  18,
                                                 "actual":  196000.0,
                                                 "predicted":  173500.0,
                                                 "residual":  22500.0,
                                                 "abs_error":  22500.0,
                                                 "pct_error":  11.48
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  42,
                                                 "actual":  258000.0,
                                                 "predicted":  239800.0,
                                                 "residual":  18200.0,
                                                 "abs_error":  18200.0,
                                                 "pct_error":  7.05
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  88,
                                                 "actual":  262000.0,
                                                 "predicted":  243000.0,
                                                 "residual":  19000.0,
                                                 "abs_error":  19000.0,
                                                 "pct_error":  7.25
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  115,
                                                 "actual":  212000.0,
                                                 "predicted":  196000.0,
                                                 "residual":  16000.0,
                                                 "abs_error":  16000.0,
                                                 "pct_error":  7.55
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  304,
                                                 "actual":  142000.0,
                                                 "predicted":  155000.0,
                                                 "residual":  -13000.0,
                                                 "abs_error":  13000.0,
                                                 "pct_error":  9.15
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  78,
                                                 "actual":  114000.0,
                                                 "predicted":  127000.0,
                                                 "residual":  -13000.0,
                                                 "abs_error":  13000.0,
                                                 "pct_error":  11.4
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  230,
                                                 "actual":  180000.0,
                                                 "predicted":  167500.0,
                                                 "residual":  12500.0,
                                                 "abs_error":  12500.0,
                                                 "pct_error":  6.94
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  312,
                                                 "actual":  135000.0,
                                                 "predicted":  147500.0,
                                                 "residual":  -12500.0,
                                                 "abs_error":  12500.0,
                                                 "pct_error":  9.26
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  5,
                                                 "actual":  98000.0,
                                                 "predicted":  87000.0,
                                                 "residual":  11000.0,
                                                 "abs_error":  11000.0,
                                                 "pct_error":  11.22
                                             }
                                         ]
                        }
                    ],
    "RFE":  [
                {
                    "k":  1,
                    "features":  [
                                     "Ram (GB)"
                                 ],
                    "rmse":  24850.12,
                    "mae":  16840.2,
                    "r2":  0.5524,
                    "adj_r2":  0.551,
                    "f_stat":  320.5,
                    "f_pvalue":  1.2E-40,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  18520.45,
                                             "stderr":  1240.2,
                                             "tstat":  14.93,
                                             "pvalue":  1.2E-22,
                                             "ci_lower":  16080.0,
                                             "ci_upper":  20960.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  5168.7,
                                             "stderr":  142.3,
                                             "tstat =":  36.32,
                                             "tstat":  36.32,
                                             "pvalue":  1.2E-40,
                                             "ci_lower":  4889.0,
                                             "ci_upper":  5448.0,
                                             "vif":  1.0
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  268000.0,
                                         "residual":  56999.0,
                                         "abs_error":  56999.0,
                                         "pct_error":  17.54
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  101219.0,
                                         "residual":  94781.0,
                                         "abs_error":  94781.0,
                                         "pct_error":  48.36
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  183918.0,
                                         "residual":  74082.0,
                                         "abs_error":  74082.0,
                                         "pct_error":  28.71
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  183918.0,
                                         "residual":  78082.0,
                                         "abs_error":  78082.0,
                                         "pct_error":  29.8
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  142569.0,
                                         "residual":  69431.0,
                                         "abs_error":  69431.0,
                                         "pct_error":  32.75
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  101219.0,
                                         "residual":  40781.0,
                                         "abs_error":  40781.0,
                                         "pct_error":  28.72
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  101219.0,
                                         "residual":  12781.0,
                                         "abs_error":  12781.0,
                                         "pct_error":  11.21
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  101219.0,
                                         "residual":  78781.0,
                                         "abs_error":  78781.0,
                                         "pct_error":  43.77
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  101219.0,
                                         "residual":  33781.0,
                                         "abs_error":  33781.0,
                                         "pct_error":  25.02
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  59870.0,
                                         "residual":  38130.0,
                                         "abs_error":  38130.0,
                                         "pct_error":  38.91
                                     }
                                 ]
                },
                {
                    "k":  2,
                    "features":  [
                                     "Ram (GB)",
                                     "SSD (GB)"
                                 ],
                    "rmse":  21340.85,
                    "mae":  14210.5,
                    "r2":  0.6582,
                    "adj_r2":  0.656,
                    "f_stat":  248.6,
                    "f_pvalue":  5.4E-38,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  8420.15,
                                             "stderr":  1150.8,
                                             "tstat":  7.32,
                                             "pvalue":  5.6E-13,
                                             "ci_lower":  6160.0,
                                             "ci_upper":  10680.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  4320.5,
                                             "stderr":  158.4,
                                             "tstat":  27.28,
                                             "pvalue":  1.1E-35,
                                             "ci_lower":  4009.0,
                                             "ci_upper":  4631.0,
                                             "vif":  1.25
                                         },
                                         {
                                             "feature":  "SSD (GB)",
                                             "coef":  35.8,
                                             "stderr":  2.45,
                                             "tstat":  14.61,
                                             "pvalue":  8.2E-28,
                                             "ci_lower":  30.9,
                                             "ci_upper":  40.7,
                                             "vif":  1.25
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  278000.0,
                                         "residual":  46999.0,
                                         "abs_error":  46999.0,
                                         "pct_error":  14.46
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  145000.0,
                                         "residual":  51000.0,
                                         "abs_error":  51000.0,
                                         "pct_error":  26.02
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  215000.0,
                                         "residual":  43000.0,
                                         "abs_error":  43000.0,
                                         "pct_error":  16.67
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  215000.0,
                                         "residual":  47000.0,
                                         "abs_error":  47000.0,
                                         "pct_error":  17.94
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  172000.0,
                                         "residual":  40000.0,
                                         "abs_error":  40000.0,
                                         "pct_error":  18.87
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  126000.0,
                                         "residual":  16000.0,
                                         "abs_error":  16000.0,
                                         "pct_error":  11.27
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  126000.0,
                                         "residual":  -12000.0,
                                         "abs_error":  12000.0,
                                         "pct_error":  10.53
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  145000.0,
                                         "residual":  35000.0,
                                         "abs_error":  35000.0,
                                         "pct_error":  19.44
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  145000.0,
                                         "residual":  -10000.0,
                                         "abs_error":  10000.0,
                                         "pct_error":  7.41
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  82000.0,
                                         "residual":  16000.0,
                                         "abs_error":  16000.0,
                                         "pct_error":  16.33
                                     }
                                 ]
                },
                {
                    "k":  3,
                    "features":  [
                                     "Ram (GB)",
                                     "SSD (GB)",
                                     "CPU: Intel Core i7"
                                 ],
                    "rmse":  18650.4,
                    "mae":  12430.1,
                    "r2":  0.7241,
                    "adj_r2":  0.7215,
                    "f_stat":  215.4,
                    "f_pvalue":  2.1E-35,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  2150.8,
                                             "stderr":  1080.5,
                                             "tstat":  1.99,
                                             "pvalue":  0.0468,
                                             "ci_lower":  30.0,
                                             "ci_upper":  4270.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  4150.2,
                                             "stderr":  152.1,
                                             "tstat":  27.28,
                                             "pvalue":  1.2E-33,
                                             "ci_lower":  3851.0,
                                             "ci_upper":  4449.0,
                                             "vif":  1.28
                                         },
                                         {
                                             "feature":  "SSD (GB)",
                                             "coef":  31.4,
                                             "stderr":  2.3,
                                             "tstat":  13.65,
                                             "pvalue":  1.4E-25,
                                             "ci_lower":  26.8,
                                             "ci_upper":  36.0,
                                             "vif":  1.3
                                         },
                                         {
                                             "feature":  "CPU: Intel Core i7",
                                             "coef":  21850.4,
                                             "stderr":  1450.2,
                                             "tstat":  15.06,
                                             "pvalue":  4.2E-32,
                                             "ci_lower":  19000.0,
                                             "ci_upper":  24700.0,
                                             "vif":  1.35
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  289000.0,
                                         "residual":  35999.0,
                                         "abs_error":  35999.0,
                                         "pct_error":  11.08
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  166000.0,
                                         "residual":  30000.0,
                                         "abs_error":  30000.0,
                                         "pct_error":  15.31
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  232000.0,
                                         "residual":  26000.0,
                                         "abs_error":  26000.0,
                                         "pct_error":  10.08
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  234000.0,
                                         "residual":  28000.0,
                                         "abs_error":  28000.0,
                                         "pct_error":  10.69
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  188000.0,
                                         "residual":  24000.0,
                                         "abs_error":  24000.0,
                                         "pct_error":  11.32
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  148000.0,
                                         "residual":  -6000.0,
                                         "abs_error":  6000.0,
                                         "pct_error":  4.23
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  126000.0,
                                         "residual":  -12000.0,
                                         "abs_error":  12000.0,
                                         "pct_error":  10.53
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  166000.0,
                                         "residual":  14000.0,
                                         "abs_error":  14000.0,
                                         "pct_error":  7.78
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  146000.0,
                                         "residual":  -11000.0,
                                         "abs_error":  11000.0,
                                         "pct_error":  8.15
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  82000.0,
                                         "residual":  16000.0,
                                         "abs_error":  16000.0,
                                         "pct_error":  16.33
                                     }
                                 ]
                },
                {
                    "k":  4,
                    "features":  [
                                     "Ram (GB)",
                                     "SSD (GB)",
                                     "CPU: Intel Core i7",
                                     "GPU: Nvidia Dedicated"
                                 ],
                    "rmse":  17120.3,
                    "mae":  11320.8,
                    "r2":  0.7625,
                    "adj_r2":  0.7598,
                    "f_stat":  198.2,
                    "f_pvalue":  1.1E-34,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  -4320.6,
                                             "stderr":  1020.4,
                                             "tstat":  -4.23,
                                             "pvalue":  2.5E-05,
                                             "ci_lower":  -6320.0,
                                             "ci_upper":  -2320.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  3980.4,
                                             "stderr":  148.2,
                                             "tstat":  26.85,
                                             "pvalue":  2.1E-32,
                                             "ci_lower":  3689.0,
                                             "ci_upper":  4271.0,
                                             "vif":  1.3
                                         },
                                         {
                                             "feature":  "SSD (GB)",
                                             "coef":  28.9,
                                             "stderr":  2.2,
                                             "tstat":  13.13,
                                             "pvalue":  4.2E-24,
                                             "ci_lower":  24.5,
                                             "ci_upper":  33.3,
                                             "vif":  1.32
                                         },
                                         {
                                             "feature":  "CPU: Intel Core i7",
                                             "coef":  20120.5,
                                             "stderr":  1380.1,
                                             "tstat":  14.58,
                                             "pvalue":  6.2E-30,
                                             "ci_lower":  17410.0,
                                             "ci_upper":  22830.0,
                                             "vif":  1.38
                                         },
                                         {
                                             "feature":  "GPU: Nvidia Dedicated",
                                             "coef":  16450.2,
                                             "stderr":  1290.4,
                                             "tstat":  12.75,
                                             "pvalue":  8.5E-26,
                                             "ci_lower":  13910.0,
                                             "ci_upper":  18990.0,
                                             "vif":  1.35
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  295000.0,
                                         "residual":  29999.0,
                                         "abs_error":  29999.0,
                                         "pct_error":  9.23
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  168000.0,
                                         "residual":  28000.0,
                                         "abs_error":  28000.0,
                                         "pct_error":  14.29
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  238000.0,
                                         "residual":  20000.0,
                                         "abs_error":  20000.0,
                                         "pct_error":  7.75
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  240000.0,
                                         "residual":  22000.0,
                                         "abs_error":  22000.0,
                                         "pct_error":  8.4
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  194000.0,
                                         "residual":  18000.0,
                                         "abs_error":  18000.0,
                                         "pct_error":  8.49
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  153000.0,
                                         "residual":  -11000.0,
                                         "abs_error":  11000.0,
                                         "pct_error":  7.75
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  124000.0,
                                         "residual":  -10000.0,
                                         "abs_error":  10000.0,
                                         "pct_error":  8.77
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  168000.0,
                                         "residual":  12000.0,
                                         "abs_error":  12000.0,
                                         "pct_error":  6.67
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  146000.0,
                                         "residual":  -11000.0,
                                         "abs_error":  11000.0,
                                         "pct_error":  8.15
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  85000.0,
                                         "residual":  13000.0,
                                         "abs_error":  13000.0,
                                         "pct_error":  13.27
                                     }
                                 ]
                },
                {
                    "k":  5,
                    "features":  [
                                     "Ram (GB)",
                                     "SSD (GB)",
                                     "CPU: Intel Core i7",
                                     "GPU: Nvidia Dedicated",
                                     "Display PPI"
                                 ],
                    "rmse":  16350.2,
                    "mae":  10650.3,
                    "r2":  0.7834,
                    "adj_r2":  0.7798,
                    "f_stat":  184.7,
                    "f_pvalue":  1.8E-35,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  -18740.5,
                                             "stderr":  1450.6,
                                             "tstat":  -12.92,
                                             "pvalue":  1.8E-35,
                                             "ci_lower":  -21580.0,
                                             "ci_upper":  -15900.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  3842.5,
                                             "stderr":  142.3,
                                             "tstat":  27.0,
                                             "pvalue":  1.2E-40,
                                             "ci_lower":  3563.5,
                                             "ci_upper":  4121.5,
                                             "vif":  1.28
                                         },
                                         {
                                             "feature":  "SSD (GB)",
                                             "coef":  26.85,
                                             "stderr":  2.15,
                                             "tstat":  12.49,
                                             "pvalue":  8.4E-32,
                                             "ci_lower":  22.63,
                                             "ci_upper":  31.07,
                                             "vif":  1.34
                                         },
                                         {
                                             "feature":  "CPU: Intel Core i7",
                                             "coef":  19450.8,
                                             "stderr":  1320.5,
                                             "tstat":  14.73,
                                             "pvalue":  3.1E-38,
                                             "ci_lower":  16860.0,
                                             "ci_upper":  22040.0,
                                             "vif":  1.42
                                         },
                                         {
                                             "feature":  "GPU: Nvidia Dedicated",
                                             "coef":  15320.4,
                                             "stderr":  1280.2,
                                             "tstat":  11.97,
                                             "pvalue":  6.5E-30,
                                             "ci_lower":  12810.0,
                                             "ci_upper":  17830.0,
                                             "vif":  1.39
                                         },
                                         {
                                             "feature":  "Display PPI",
                                             "coef":  128.6,
                                             "stderr":  15.8,
                                             "tstat":  8.14,
                                             "pvalue":  2.2E-15,
                                             "ci_lower":  97.6,
                                             "ci_upper":  159.6,
                                             "vif":  1.22
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  296400.0,
                                         "residual":  28599.0,
                                         "abs_error":  28599.0,
                                         "pct_error":  8.8
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  171800.0,
                                         "residual":  24200.0,
                                         "abs_error":  24200.0,
                                         "pct_error":  12.35
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  236200.0,
                                         "residual":  21800.0,
                                         "abs_error":  21800.0,
                                         "pct_error":  8.45
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  241500.0,
                                         "residual":  20500.0,
                                         "abs_error":  20500.0,
                                         "pct_error":  7.82
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  193800.0,
                                         "residual":  18200.0,
                                         "abs_error":  18200.0,
                                         "pct_error":  8.58
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  157400.0,
                                         "residual":  -15400.0,
                                         "abs_error":  15400.0,
                                         "pct_error":  10.85
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  128200.0,
                                         "residual":  -14200.0,
                                         "abs_error":  14200.0,
                                         "pct_error":  12.46
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  166400.0,
                                         "residual":  13600.0,
                                         "abs_error":  13600.0,
                                         "pct_error":  7.56
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  147800.0,
                                         "residual":  -12800.0,
                                         "abs_error":  12800.0,
                                         "pct_error":  9.48
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  86500.0,
                                         "residual":  11500.0,
                                         "abs_error":  11500.0,
                                         "pct_error":  11.73
                                     }
                                 ]
                },
                {
                    "k":  6,
                    "features":  [
                                     "Ram (GB)",
                                     "SSD (GB)",
                                     "CPU: Intel Core i7",
                                     "GPU: Nvidia Dedicated",
                                     "Display PPI",
                                     "Chassis: Gaming Type"
                                 ],
                    "rmse":  15920.8,
                    "mae":  10240.5,
                    "r2":  0.7915,
                    "adj_r2":  0.7872,
                    "f_stat":  168.9,
                    "f_pvalue":  4.2E-36,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (帣?)",
                                             "coef":  -22150.3,
                                             "stderr":  1680.2,
                                             "tstat":  -13.18,
                                             "pvalue":  4.2E-36,
                                             "ci_lower":  -25450.0,
                                             "ci_upper":  -18850.0,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "Ram (GB)",
                                             "coef":  3710.2,
                                             "stderr":  145.1,
                                             "tstat":  25.57,
                                             "pvalue":  3.2E-38,
                                             "ci_lower":  3425.0,
                                             "ci_upper":  3995.0,
                                             "vif":  1.35
                                         },
                                         {
                                             "feature":  "SSD (GB)",
                                             "coef":  25.4,
                                             "stderr":  2.18,
                                             "tstat":  11.65,
                                             "pvalue":  4.1E-30,
                                             "ci_lower":  21.12,
                                             "ci_upper":  29.68,
                                             "vif":  1.38
                                         },
                                         {
                                             "feature":  "CPU: Intel Core i7",
                                             "coef":  18650.3,
                                             "stderr":  1350.4,
                                             "tstat":  13.81,
                                             "pvalue":  8.1E-36,
                                             "ci_lower":  16000.0,
                                             "ci_upper":  21300.0,
                                             "vif":  1.48
                                         },
                                         {
                                             "feature":  "GPU: Nvidia Dedicated",
                                             "coef":  14200.5,
                                             "stderr":  1310.2,
                                             "tstat":  10.84,
                                             "pvalue":  2.4E-27,
                                             "ci_lower":  11630.0,
                                             "ci_upper":  16770.0,
                                             "vif":  1.52
                                         },
                                         {
                                             "feature":  "Display PPI",
                                             "coef":  124.2,
                                             "stderr":  15.9,
                                             "tstat":  7.81,
                                             "pvalue":  8.4E-15,
                                             "ci_lower":  93.0,
                                             "ci_upper":  155.4,
                                             "vif":  1.25
                                         },
                                         {
                                             "feature":  "Chassis: Gaming Type",
                                             "coef":  11850.2,
                                             "stderr":  1850.4,
                                             "tstat":  6.4,
                                             "pvalue":  2.8E-10,
                                             "ci_lower":  8220.0,
                                             "ci_upper":  15480.0,
                                             "vif":  1.58
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  197,
                                         "actual":  324999.0,
                                         "predicted":  301200.0,
                                         "residual":  23799.0,
                                         "abs_error":  23799.0,
                                         "pct_error":  7.32
                                     },
                                     {
                                         "rank":  2,
                                         "index":  18,
                                         "actual":  196000.0,
                                         "predicted":  173500.0,
                                         "residual":  22500.0,
                                         "abs_error":  22500.0,
                                         "pct_error":  11.48
                                     },
                                     {
                                         "rank":  3,
                                         "index":  42,
                                         "actual":  258000.0,
                                         "predicted":  239800.0,
                                         "residual":  18200.0,
                                         "abs_error":  18200.0,
                                         "pct_error":  7.05
                                     },
                                     {
                                         "rank":  4,
                                         "index":  88,
                                         "actual":  262000.0,
                                         "predicted":  243000.0,
                                         "residual":  19000.0,
                                         "abs_error":  19000.0,
                                         "pct_error":  7.25
                                     },
                                     {
                                         "rank":  5,
                                         "index":  115,
                                         "actual":  212000.0,
                                         "predicted":  196000.0,
                                         "residual":  16000.0,
                                         "abs_error":  16000.0,
                                         "pct_error":  7.55
                                     },
                                     {
                                         "rank":  6,
                                         "index":  304,
                                         "actual":  142000.0,
                                         "predicted":  155000.0,
                                         "residual":  -13000.0,
                                         "abs_error":  13000.0,
                                         "pct_error":  9.15
                                     },
                                     {
                                         "rank":  7,
                                         "index":  78,
                                         "actual":  114000.0,
                                         "predicted":  127000.0,
                                         "residual":  -13000.0,
                                         "abs_error":  13000.0,
                                         "pct_error":  11.4
                                     },
                                     {
                                         "rank":  8,
                                         "index":  230,
                                         "actual":  180000.0,
                                         "predicted":  167500.0,
                                         "residual":  12500.0,
                                         "abs_error":  12500.0,
                                         "pct_error":  6.94
                                     },
                                     {
                                         "rank":  9,
                                         "index":  312,
                                         "actual":  135000.0,
                                         "predicted":  147500.0,
                                         "residual":  -12500.0,
                                         "abs_error":  12500.0,
                                         "pct_error":  9.26
                                     },
                                     {
                                         "rank":  10,
                                         "index":  5,
                                         "actual":  98000.0,
                                         "predicted":  87000.0,
                                         "residual":  11000.0,
                                         "abs_error":  11000.0,
                                         "pct_error":  11.22
                                     }
                                 ]
                }
            ],
    "ElasticNet":  [
                       {
                           "k":  1,
                           "features":  [
                                            "Ram (GB)"
                                        ],
                           "rmse":  24850.12,
                           "mae":  16840.2,
                           "r2":  0.5524,
                           "adj_r2":  0.551,
                           "f_stat":  320.5,
                           "f_pvalue":  1.2E-40,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  18520.45,
                                                    "stderr":  1240.2,
                                                    "tstat":  14.93,
                                                    "pvalue":  1.2E-22,
                                                    "ci_lower":  16080.0,
                                                    "ci_upper":  20960.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  5168.7,
                                                    "stderr":  142.3,
                                                    "tstat =":  36.32,
                                                    "tstat":  36.32,
                                                    "pvalue":  1.2E-40,
                                                    "ci_lower":  4889.0,
                                                    "ci_upper":  5448.0,
                                                    "vif":  1.0
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  268000.0,
                                                "residual":  56999.0,
                                                "abs_error":  56999.0,
                                                "pct_error":  17.54
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  101219.0,
                                                "residual":  94781.0,
                                                "abs_error":  94781.0,
                                                "pct_error":  48.36
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  183918.0,
                                                "residual":  74082.0,
                                                "abs_error":  74082.0,
                                                "pct_error":  28.71
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  183918.0,
                                                "residual":  78082.0,
                                                "abs_error":  78082.0,
                                                "pct_error":  29.8
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  142569.0,
                                                "residual":  69431.0,
                                                "abs_error":  69431.0,
                                                "pct_error":  32.75
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  101219.0,
                                                "residual":  40781.0,
                                                "abs_error":  40781.0,
                                                "pct_error":  28.72
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  101219.0,
                                                "residual":  12781.0,
                                                "abs_error":  12781.0,
                                                "pct_error":  11.21
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  101219.0,
                                                "residual":  78781.0,
                                                "abs_error":  78781.0,
                                                "pct_error":  43.77
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  101219.0,
                                                "residual":  33781.0,
                                                "abs_error":  33781.0,
                                                "pct_error":  25.02
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  59870.0,
                                                "residual":  38130.0,
                                                "abs_error":  38130.0,
                                                "pct_error":  38.91
                                            }
                                        ]
                       },
                       {
                           "k":  2,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)"
                                        ],
                           "rmse":  21340.85,
                           "mae":  14210.5,
                           "r2":  0.6582,
                           "adj_r2":  0.656,
                           "f_stat":  248.6,
                           "f_pvalue":  5.4E-38,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  8420.15,
                                                    "stderr":  1150.8,
                                                    "tstat":  7.32,
                                                    "pvalue":  5.6E-13,
                                                    "ci_lower":  6160.0,
                                                    "ci_upper":  10680.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  4320.5,
                                                    "stderr":  158.4,
                                                    "tstat":  27.28,
                                                    "pvalue":  1.1E-35,
                                                    "ci_lower":  4009.0,
                                                    "ci_upper":  4631.0,
                                                    "vif":  1.25
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  35.8,
                                                    "stderr":  2.45,
                                                    "tstat":  14.61,
                                                    "pvalue":  8.2E-28,
                                                    "ci_lower":  30.9,
                                                    "ci_upper":  40.7,
                                                    "vif":  1.25
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  278000.0,
                                                "residual":  46999.0,
                                                "abs_error":  46999.0,
                                                "pct_error":  14.46
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  145000.0,
                                                "residual":  51000.0,
                                                "abs_error":  51000.0,
                                                "pct_error":  26.02
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  215000.0,
                                                "residual":  43000.0,
                                                "abs_error":  43000.0,
                                                "pct_error":  16.67
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  215000.0,
                                                "residual":  47000.0,
                                                "abs_error":  47000.0,
                                                "pct_error":  17.94
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  172000.0,
                                                "residual":  40000.0,
                                                "abs_error":  40000.0,
                                                "pct_error":  18.87
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  126000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  11.27
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  126000.0,
                                                "residual":  -12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  10.53
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  145000.0,
                                                "residual":  35000.0,
                                                "abs_error":  35000.0,
                                                "pct_error":  19.44
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  145000.0,
                                                "residual":  -10000.0,
                                                "abs_error":  10000.0,
                                                "pct_error":  7.41
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  82000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  16.33
                                            }
                                        ]
                       },
                       {
                           "k":  3,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7"
                                        ],
                           "rmse":  18650.4,
                           "mae":  12430.1,
                           "r2":  0.7241,
                           "adj_r2":  0.7215,
                           "f_stat":  215.4,
                           "f_pvalue":  2.1E-35,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  2150.8,
                                                    "stderr":  1080.5,
                                                    "tstat":  1.99,
                                                    "pvalue":  0.0468,
                                                    "ci_lower":  30.0,
                                                    "ci_upper":  4270.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  4150.2,
                                                    "stderr":  152.1,
                                                    "tstat":  27.28,
                                                    "pvalue":  1.2E-33,
                                                    "ci_lower":  3851.0,
                                                    "ci_upper":  4449.0,
                                                    "vif":  1.28
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  31.4,
                                                    "stderr":  2.3,
                                                    "tstat":  13.65,
                                                    "pvalue":  1.4E-25,
                                                    "ci_lower":  26.8,
                                                    "ci_upper":  36.0,
                                                    "vif":  1.3
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  21850.4,
                                                    "stderr":  1450.2,
                                                    "tstat":  15.06,
                                                    "pvalue":  4.2E-32,
                                                    "ci_lower":  19000.0,
                                                    "ci_upper":  24700.0,
                                                    "vif":  1.35
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  289000.0,
                                                "residual":  35999.0,
                                                "abs_error":  35999.0,
                                                "pct_error":  11.08
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  166000.0,
                                                "residual":  30000.0,
                                                "abs_error":  30000.0,
                                                "pct_error":  15.31
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  232000.0,
                                                "residual":  26000.0,
                                                "abs_error":  26000.0,
                                                "pct_error":  10.08
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  234000.0,
                                                "residual":  28000.0,
                                                "abs_error":  28000.0,
                                                "pct_error":  10.69
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  188000.0,
                                                "residual":  24000.0,
                                                "abs_error":  24000.0,
                                                "pct_error":  11.32
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  148000.0,
                                                "residual":  -6000.0,
                                                "abs_error":  6000.0,
                                                "pct_error":  4.23
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  126000.0,
                                                "residual":  -12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  10.53
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  166000.0,
                                                "residual":  14000.0,
                                                "abs_error":  14000.0,
                                                "pct_error":  7.78
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  146000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  8.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  82000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  16.33
                                            }
                                        ]
                       },
                       {
                           "k":  4,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated"
                                        ],
                           "rmse":  17120.3,
                           "mae":  11320.8,
                           "r2":  0.7625,
                           "adj_r2":  0.7598,
                           "f_stat":  198.2,
                           "f_pvalue":  1.1E-34,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -4320.6,
                                                    "stderr":  1020.4,
                                                    "tstat":  -4.23,
                                                    "pvalue":  2.5E-05,
                                                    "ci_lower":  -6320.0,
                                                    "ci_upper":  -2320.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3980.4,
                                                    "stderr":  148.2,
                                                    "tstat":  26.85,
                                                    "pvalue":  2.1E-32,
                                                    "ci_lower":  3689.0,
                                                    "ci_upper":  4271.0,
                                                    "vif":  1.3
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  28.9,
                                                    "stderr":  2.2,
                                                    "tstat":  13.13,
                                                    "pvalue":  4.2E-24,
                                                    "ci_lower":  24.5,
                                                    "ci_upper":  33.3,
                                                    "vif":  1.32
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  20120.5,
                                                    "stderr":  1380.1,
                                                    "tstat":  14.58,
                                                    "pvalue":  6.2E-30,
                                                    "ci_lower":  17410.0,
                                                    "ci_upper":  22830.0,
                                                    "vif":  1.38
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  16450.2,
                                                    "stderr":  1290.4,
                                                    "tstat":  12.75,
                                                    "pvalue":  8.5E-26,
                                                    "ci_lower":  13910.0,
                                                    "ci_upper":  18990.0,
                                                    "vif":  1.35
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  295000.0,
                                                "residual":  29999.0,
                                                "abs_error":  29999.0,
                                                "pct_error":  9.23
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  168000.0,
                                                "residual":  28000.0,
                                                "abs_error":  28000.0,
                                                "pct_error":  14.29
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  238000.0,
                                                "residual":  20000.0,
                                                "abs_error":  20000.0,
                                                "pct_error":  7.75
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  240000.0,
                                                "residual":  22000.0,
                                                "abs_error":  22000.0,
                                                "pct_error":  8.4
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  194000.0,
                                                "residual":  18000.0,
                                                "abs_error":  18000.0,
                                                "pct_error":  8.49
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  153000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  7.75
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  124000.0,
                                                "residual":  -10000.0,
                                                "abs_error":  10000.0,
                                                "pct_error":  8.77
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  168000.0,
                                                "residual":  12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  6.67
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  146000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  8.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  85000.0,
                                                "residual":  13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  13.27
                                            }
                                        ]
                       },
                       {
                           "k":  5,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated",
                                            "Display PPI"
                                        ],
                           "rmse":  16350.2,
                           "mae":  10650.3,
                           "r2":  0.7834,
                           "adj_r2":  0.7798,
                           "f_stat":  184.7,
                           "f_pvalue":  1.8E-35,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -18740.5,
                                                    "stderr":  1450.6,
                                                    "tstat":  -12.92,
                                                    "pvalue":  1.8E-35,
                                                    "ci_lower":  -21580.0,
                                                    "ci_upper":  -15900.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3842.5,
                                                    "stderr":  142.3,
                                                    "tstat":  27.0,
                                                    "pvalue":  1.2E-40,
                                                    "ci_lower":  3563.5,
                                                    "ci_upper":  4121.5,
                                                    "vif":  1.28
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  26.85,
                                                    "stderr":  2.15,
                                                    "tstat":  12.49,
                                                    "pvalue":  8.4E-32,
                                                    "ci_lower":  22.63,
                                                    "ci_upper":  31.07,
                                                    "vif":  1.34
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  19450.8,
                                                    "stderr":  1320.5,
                                                    "tstat":  14.73,
                                                    "pvalue":  3.1E-38,
                                                    "ci_lower":  16860.0,
                                                    "ci_upper":  22040.0,
                                                    "vif":  1.42
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  15320.4,
                                                    "stderr":  1280.2,
                                                    "tstat":  11.97,
                                                    "pvalue":  6.5E-30,
                                                    "ci_lower":  12810.0,
                                                    "ci_upper":  17830.0,
                                                    "vif":  1.39
                                                },
                                                {
                                                    "feature":  "Display PPI",
                                                    "coef":  128.6,
                                                    "stderr":  15.8,
                                                    "tstat":  8.14,
                                                    "pvalue":  2.2E-15,
                                                    "ci_lower":  97.6,
                                                    "ci_upper":  159.6,
                                                    "vif":  1.22
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  296400.0,
                                                "residual":  28599.0,
                                                "abs_error":  28599.0,
                                                "pct_error":  8.8
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  171800.0,
                                                "residual":  24200.0,
                                                "abs_error":  24200.0,
                                                "pct_error":  12.35
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  236200.0,
                                                "residual":  21800.0,
                                                "abs_error":  21800.0,
                                                "pct_error":  8.45
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  241500.0,
                                                "residual":  20500.0,
                                                "abs_error":  20500.0,
                                                "pct_error":  7.82
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  193800.0,
                                                "residual":  18200.0,
                                                "abs_error":  18200.0,
                                                "pct_error":  8.58
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  157400.0,
                                                "residual":  -15400.0,
                                                "abs_error":  15400.0,
                                                "pct_error":  10.85
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  128200.0,
                                                "residual":  -14200.0,
                                                "abs_error":  14200.0,
                                                "pct_error":  12.46
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  166400.0,
                                                "residual":  13600.0,
                                                "abs_error":  13600.0,
                                                "pct_error":  7.56
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  147800.0,
                                                "residual":  -12800.0,
                                                "abs_error":  12800.0,
                                                "pct_error":  9.48
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  86500.0,
                                                "residual":  11500.0,
                                                "abs_error":  11500.0,
                                                "pct_error":  11.73
                                            }
                                        ]
                       },
                       {
                           "k":  6,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated",
                                            "Display PPI",
                                            "Chassis: Gaming Type"
                                        ],
                           "rmse":  15920.8,
                           "mae":  10240.5,
                           "r2":  0.7915,
                           "adj_r2":  0.7872,
                           "f_stat":  168.9,
                           "f_pvalue":  4.2E-36,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -22150.3,
                                                    "stderr":  1680.2,
                                                    "tstat":  -13.18,
                                                    "pvalue":  4.2E-36,
                                                    "ci_lower":  -25450.0,
                                                    "ci_upper":  -18850.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3710.2,
                                                    "stderr":  145.1,
                                                    "tstat":  25.57,
                                                    "pvalue":  3.2E-38,
                                                    "ci_lower":  3425.0,
                                                    "ci_upper":  3995.0,
                                                    "vif":  1.35
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  25.4,
                                                    "stderr":  2.18,
                                                    "tstat":  11.65,
                                                    "pvalue":  4.1E-30,
                                                    "ci_lower":  21.12,
                                                    "ci_upper":  29.68,
                                                    "vif":  1.38
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  18650.3,
                                                    "stderr":  1350.4,
                                                    "tstat":  13.81,
                                                    "pvalue":  8.1E-36,
                                                    "ci_lower":  16000.0,
                                                    "ci_upper":  21300.0,
                                                    "vif":  1.48
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  14200.5,
                                                    "stderr":  1310.2,
                                                    "tstat":  10.84,
                                                    "pvalue":  2.4E-27,
                                                    "ci_lower":  11630.0,
                                                    "ci_upper":  16770.0,
                                                    "vif":  1.52
                                                },
                                                {
                                                    "feature":  "Display PPI",
                                                    "coef":  124.2,
                                                    "stderr":  15.9,
                                                    "tstat":  7.81,
                                                    "pvalue":  8.4E-15,
                                                    "ci_lower":  93.0,
                                                    "ci_upper":  155.4,
                                                    "vif":  1.25
                                                },
                                                {
                                                    "feature":  "Chassis: Gaming Type",
                                                    "coef":  11850.2,
                                                    "stderr":  1850.4,
                                                    "tstat":  6.4,
                                                    "pvalue":  2.8E-10,
                                                    "ci_lower":  8220.0,
                                                    "ci_upper":  15480.0,
                                                    "vif":  1.58
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  301200.0,
                                                "residual":  23799.0,
                                                "abs_error":  23799.0,
                                                "pct_error":  7.32
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  173500.0,
                                                "residual":  22500.0,
                                                "abs_error":  22500.0,
                                                "pct_error":  11.48
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  239800.0,
                                                "residual":  18200.0,
                                                "abs_error":  18200.0,
                                                "pct_error":  7.05
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  243000.0,
                                                "residual":  19000.0,
                                                "abs_error":  19000.0,
                                                "pct_error":  7.25
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  196000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  7.55
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  155000.0,
                                                "residual":  -13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  9.15
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  127000.0,
                                                "residual":  -13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  11.4
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  167500.0,
                                                "residual":  12500.0,
                                                "abs_error":  12500.0,
                                                "pct_error":  6.94
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  147500.0,
                                                "residual":  -12500.0,
                                                "abs_error":  12500.0,
                                                "pct_error":  9.26
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  87000.0,
                                                "residual":  11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  11.22
                                            }
                                        ]
                       }
                   ],
    "Exhaustive":  [
                       {
                           "k":  1,
                           "features":  [
                                            "Ram (GB)"
                                        ],
                           "rmse":  24850.12,
                           "mae":  16840.2,
                           "r2":  0.5524,
                           "adj_r2":  0.551,
                           "f_stat":  320.5,
                           "f_pvalue":  1.2E-40,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  18520.45,
                                                    "stderr":  1240.2,
                                                    "tstat":  14.93,
                                                    "pvalue":  1.2E-22,
                                                    "ci_lower":  16080.0,
                                                    "ci_upper":  20960.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  5168.7,
                                                    "stderr":  142.3,
                                                    "tstat =":  36.32,
                                                    "tstat":  36.32,
                                                    "pvalue":  1.2E-40,
                                                    "ci_lower":  4889.0,
                                                    "ci_upper":  5448.0,
                                                    "vif":  1.0
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  268000.0,
                                                "residual":  56999.0,
                                                "abs_error":  56999.0,
                                                "pct_error":  17.54
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  101219.0,
                                                "residual":  94781.0,
                                                "abs_error":  94781.0,
                                                "pct_error":  48.36
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  183918.0,
                                                "residual":  74082.0,
                                                "abs_error":  74082.0,
                                                "pct_error":  28.71
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  183918.0,
                                                "residual":  78082.0,
                                                "abs_error":  78082.0,
                                                "pct_error":  29.8
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  142569.0,
                                                "residual":  69431.0,
                                                "abs_error":  69431.0,
                                                "pct_error":  32.75
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  101219.0,
                                                "residual":  40781.0,
                                                "abs_error":  40781.0,
                                                "pct_error":  28.72
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  101219.0,
                                                "residual":  12781.0,
                                                "abs_error":  12781.0,
                                                "pct_error":  11.21
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  101219.0,
                                                "residual":  78781.0,
                                                "abs_error":  78781.0,
                                                "pct_error":  43.77
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  101219.0,
                                                "residual":  33781.0,
                                                "abs_error":  33781.0,
                                                "pct_error":  25.02
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  59870.0,
                                                "residual":  38130.0,
                                                "abs_error":  38130.0,
                                                "pct_error":  38.91
                                            }
                                        ]
                       },
                       {
                           "k":  2,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)"
                                        ],
                           "rmse":  21340.85,
                           "mae":  14210.5,
                           "r2":  0.6582,
                           "adj_r2":  0.656,
                           "f_stat":  248.6,
                           "f_pvalue":  5.4E-38,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  8420.15,
                                                    "stderr":  1150.8,
                                                    "tstat":  7.32,
                                                    "pvalue":  5.6E-13,
                                                    "ci_lower":  6160.0,
                                                    "ci_upper":  10680.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  4320.5,
                                                    "stderr":  158.4,
                                                    "tstat":  27.28,
                                                    "pvalue":  1.1E-35,
                                                    "ci_lower":  4009.0,
                                                    "ci_upper":  4631.0,
                                                    "vif":  1.25
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  35.8,
                                                    "stderr":  2.45,
                                                    "tstat":  14.61,
                                                    "pvalue":  8.2E-28,
                                                    "ci_lower":  30.9,
                                                    "ci_upper":  40.7,
                                                    "vif":  1.25
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  278000.0,
                                                "residual":  46999.0,
                                                "abs_error":  46999.0,
                                                "pct_error":  14.46
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  145000.0,
                                                "residual":  51000.0,
                                                "abs_error":  51000.0,
                                                "pct_error":  26.02
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  215000.0,
                                                "residual":  43000.0,
                                                "abs_error":  43000.0,
                                                "pct_error":  16.67
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  215000.0,
                                                "residual":  47000.0,
                                                "abs_error":  47000.0,
                                                "pct_error":  17.94
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  172000.0,
                                                "residual":  40000.0,
                                                "abs_error":  40000.0,
                                                "pct_error":  18.87
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  126000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  11.27
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  126000.0,
                                                "residual":  -12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  10.53
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  145000.0,
                                                "residual":  35000.0,
                                                "abs_error":  35000.0,
                                                "pct_error":  19.44
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  145000.0,
                                                "residual":  -10000.0,
                                                "abs_error":  10000.0,
                                                "pct_error":  7.41
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  82000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  16.33
                                            }
                                        ]
                       },
                       {
                           "k":  3,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7"
                                        ],
                           "rmse":  18650.4,
                           "mae":  12430.1,
                           "r2":  0.7241,
                           "adj_r2":  0.7215,
                           "f_stat":  215.4,
                           "f_pvalue":  2.1E-35,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  2150.8,
                                                    "stderr":  1080.5,
                                                    "tstat":  1.99,
                                                    "pvalue":  0.0468,
                                                    "ci_lower":  30.0,
                                                    "ci_upper":  4270.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  4150.2,
                                                    "stderr":  152.1,
                                                    "tstat":  27.28,
                                                    "pvalue":  1.2E-33,
                                                    "ci_lower":  3851.0,
                                                    "ci_upper":  4449.0,
                                                    "vif":  1.28
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  31.4,
                                                    "stderr":  2.3,
                                                    "tstat":  13.65,
                                                    "pvalue":  1.4E-25,
                                                    "ci_lower":  26.8,
                                                    "ci_upper":  36.0,
                                                    "vif":  1.3
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  21850.4,
                                                    "stderr":  1450.2,
                                                    "tstat":  15.06,
                                                    "pvalue":  4.2E-32,
                                                    "ci_lower":  19000.0,
                                                    "ci_upper":  24700.0,
                                                    "vif":  1.35
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  289000.0,
                                                "residual":  35999.0,
                                                "abs_error":  35999.0,
                                                "pct_error":  11.08
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  166000.0,
                                                "residual":  30000.0,
                                                "abs_error":  30000.0,
                                                "pct_error":  15.31
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  232000.0,
                                                "residual":  26000.0,
                                                "abs_error":  26000.0,
                                                "pct_error":  10.08
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  234000.0,
                                                "residual":  28000.0,
                                                "abs_error":  28000.0,
                                                "pct_error":  10.69
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  188000.0,
                                                "residual":  24000.0,
                                                "abs_error":  24000.0,
                                                "pct_error":  11.32
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  148000.0,
                                                "residual":  -6000.0,
                                                "abs_error":  6000.0,
                                                "pct_error":  4.23
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  126000.0,
                                                "residual":  -12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  10.53
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  166000.0,
                                                "residual":  14000.0,
                                                "abs_error":  14000.0,
                                                "pct_error":  7.78
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  146000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  8.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  82000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  16.33
                                            }
                                        ]
                       },
                       {
                           "k":  4,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated"
                                        ],
                           "rmse":  17120.3,
                           "mae":  11320.8,
                           "r2":  0.7625,
                           "adj_r2":  0.7598,
                           "f_stat":  198.2,
                           "f_pvalue":  1.1E-34,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -4320.6,
                                                    "stderr":  1020.4,
                                                    "tstat":  -4.23,
                                                    "pvalue":  2.5E-05,
                                                    "ci_lower":  -6320.0,
                                                    "ci_upper":  -2320.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3980.4,
                                                    "stderr":  148.2,
                                                    "tstat":  26.85,
                                                    "pvalue":  2.1E-32,
                                                    "ci_lower":  3689.0,
                                                    "ci_upper":  4271.0,
                                                    "vif":  1.3
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  28.9,
                                                    "stderr":  2.2,
                                                    "tstat":  13.13,
                                                    "pvalue":  4.2E-24,
                                                    "ci_lower":  24.5,
                                                    "ci_upper":  33.3,
                                                    "vif":  1.32
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  20120.5,
                                                    "stderr":  1380.1,
                                                    "tstat":  14.58,
                                                    "pvalue":  6.2E-30,
                                                    "ci_lower":  17410.0,
                                                    "ci_upper":  22830.0,
                                                    "vif":  1.38
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  16450.2,
                                                    "stderr":  1290.4,
                                                    "tstat":  12.75,
                                                    "pvalue":  8.5E-26,
                                                    "ci_lower":  13910.0,
                                                    "ci_upper":  18990.0,
                                                    "vif":  1.35
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  295000.0,
                                                "residual":  29999.0,
                                                "abs_error":  29999.0,
                                                "pct_error":  9.23
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  168000.0,
                                                "residual":  28000.0,
                                                "abs_error":  28000.0,
                                                "pct_error":  14.29
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  238000.0,
                                                "residual":  20000.0,
                                                "abs_error":  20000.0,
                                                "pct_error":  7.75
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  240000.0,
                                                "residual":  22000.0,
                                                "abs_error":  22000.0,
                                                "pct_error":  8.4
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  194000.0,
                                                "residual":  18000.0,
                                                "abs_error":  18000.0,
                                                "pct_error":  8.49
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  153000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  7.75
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  124000.0,
                                                "residual":  -10000.0,
                                                "abs_error":  10000.0,
                                                "pct_error":  8.77
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  168000.0,
                                                "residual":  12000.0,
                                                "abs_error":  12000.0,
                                                "pct_error":  6.67
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  146000.0,
                                                "residual":  -11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  8.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  85000.0,
                                                "residual":  13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  13.27
                                            }
                                        ]
                       },
                       {
                           "k":  5,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated",
                                            "Display PPI"
                                        ],
                           "rmse":  16350.2,
                           "mae":  10650.3,
                           "r2":  0.7834,
                           "adj_r2":  0.7798,
                           "f_stat":  184.7,
                           "f_pvalue":  1.8E-35,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -18740.5,
                                                    "stderr":  1450.6,
                                                    "tstat":  -12.92,
                                                    "pvalue":  1.8E-35,
                                                    "ci_lower":  -21580.0,
                                                    "ci_upper":  -15900.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3842.5,
                                                    "stderr":  142.3,
                                                    "tstat":  27.0,
                                                    "pvalue":  1.2E-40,
                                                    "ci_lower":  3563.5,
                                                    "ci_upper":  4121.5,
                                                    "vif":  1.28
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  26.85,
                                                    "stderr":  2.15,
                                                    "tstat":  12.49,
                                                    "pvalue":  8.4E-32,
                                                    "ci_lower":  22.63,
                                                    "ci_upper":  31.07,
                                                    "vif":  1.34
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  19450.8,
                                                    "stderr":  1320.5,
                                                    "tstat":  14.73,
                                                    "pvalue":  3.1E-38,
                                                    "ci_lower":  16860.0,
                                                    "ci_upper":  22040.0,
                                                    "vif":  1.42
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  15320.4,
                                                    "stderr":  1280.2,
                                                    "tstat":  11.97,
                                                    "pvalue":  6.5E-30,
                                                    "ci_lower":  12810.0,
                                                    "ci_upper":  17830.0,
                                                    "vif":  1.39
                                                },
                                                {
                                                    "feature":  "Display PPI",
                                                    "coef":  128.6,
                                                    "stderr":  15.8,
                                                    "tstat":  8.14,
                                                    "pvalue":  2.2E-15,
                                                    "ci_lower":  97.6,
                                                    "ci_upper":  159.6,
                                                    "vif":  1.22
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  296400.0,
                                                "residual":  28599.0,
                                                "abs_error":  28599.0,
                                                "pct_error":  8.8
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  171800.0,
                                                "residual":  24200.0,
                                                "abs_error":  24200.0,
                                                "pct_error":  12.35
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  236200.0,
                                                "residual":  21800.0,
                                                "abs_error":  21800.0,
                                                "pct_error":  8.45
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  241500.0,
                                                "residual":  20500.0,
                                                "abs_error":  20500.0,
                                                "pct_error":  7.82
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  193800.0,
                                                "residual":  18200.0,
                                                "abs_error":  18200.0,
                                                "pct_error":  8.58
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  157400.0,
                                                "residual":  -15400.0,
                                                "abs_error":  15400.0,
                                                "pct_error":  10.85
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  128200.0,
                                                "residual":  -14200.0,
                                                "abs_error":  14200.0,
                                                "pct_error":  12.46
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  166400.0,
                                                "residual":  13600.0,
                                                "abs_error":  13600.0,
                                                "pct_error":  7.56
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  147800.0,
                                                "residual":  -12800.0,
                                                "abs_error":  12800.0,
                                                "pct_error":  9.48
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  86500.0,
                                                "residual":  11500.0,
                                                "abs_error":  11500.0,
                                                "pct_error":  11.73
                                            }
                                        ]
                       },
                       {
                           "k":  6,
                           "features":  [
                                            "Ram (GB)",
                                            "SSD (GB)",
                                            "CPU: Intel Core i7",
                                            "GPU: Nvidia Dedicated",
                                            "Display PPI",
                                            "Chassis: Gaming Type"
                                        ],
                           "rmse":  15920.8,
                           "mae":  10240.5,
                           "r2":  0.7915,
                           "adj_r2":  0.7872,
                           "f_stat":  168.9,
                           "f_pvalue":  4.2E-36,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (帣?)",
                                                    "coef":  -22150.3,
                                                    "stderr":  1680.2,
                                                    "tstat":  -13.18,
                                                    "pvalue":  4.2E-36,
                                                    "ci_lower":  -25450.0,
                                                    "ci_upper":  -18850.0,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "Ram (GB)",
                                                    "coef":  3710.2,
                                                    "stderr":  145.1,
                                                    "tstat":  25.57,
                                                    "pvalue":  3.2E-38,
                                                    "ci_lower":  3425.0,
                                                    "ci_upper":  3995.0,
                                                    "vif":  1.35
                                                },
                                                {
                                                    "feature":  "SSD (GB)",
                                                    "coef":  25.4,
                                                    "stderr":  2.18,
                                                    "tstat":  11.65,
                                                    "pvalue":  4.1E-30,
                                                    "ci_lower":  21.12,
                                                    "ci_upper":  29.68,
                                                    "vif":  1.38
                                                },
                                                {
                                                    "feature":  "CPU: Intel Core i7",
                                                    "coef":  18650.3,
                                                    "stderr":  1350.4,
                                                    "tstat":  13.81,
                                                    "pvalue":  8.1E-36,
                                                    "ci_lower":  16000.0,
                                                    "ci_upper":  21300.0,
                                                    "vif":  1.48
                                                },
                                                {
                                                    "feature":  "GPU: Nvidia Dedicated",
                                                    "coef":  14200.5,
                                                    "stderr":  1310.2,
                                                    "tstat":  10.84,
                                                    "pvalue":  2.4E-27,
                                                    "ci_lower":  11630.0,
                                                    "ci_upper":  16770.0,
                                                    "vif":  1.52
                                                },
                                                {
                                                    "feature":  "Display PPI",
                                                    "coef":  124.2,
                                                    "stderr":  15.9,
                                                    "tstat":  7.81,
                                                    "pvalue":  8.4E-15,
                                                    "ci_lower":  93.0,
                                                    "ci_upper":  155.4,
                                                    "vif":  1.25
                                                },
                                                {
                                                    "feature":  "Chassis: Gaming Type",
                                                    "coef":  11850.2,
                                                    "stderr":  1850.4,
                                                    "tstat":  6.4,
                                                    "pvalue":  2.8E-10,
                                                    "ci_lower":  8220.0,
                                                    "ci_upper":  15480.0,
                                                    "vif":  1.58
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  197,
                                                "actual":  324999.0,
                                                "predicted":  301200.0,
                                                "residual":  23799.0,
                                                "abs_error":  23799.0,
                                                "pct_error":  7.32
                                            },
                                            {
                                                "rank":  2,
                                                "index":  18,
                                                "actual":  196000.0,
                                                "predicted":  173500.0,
                                                "residual":  22500.0,
                                                "abs_error":  22500.0,
                                                "pct_error":  11.48
                                            },
                                            {
                                                "rank":  3,
                                                "index":  42,
                                                "actual":  258000.0,
                                                "predicted":  239800.0,
                                                "residual":  18200.0,
                                                "abs_error":  18200.0,
                                                "pct_error":  7.05
                                            },
                                            {
                                                "rank":  4,
                                                "index":  88,
                                                "actual":  262000.0,
                                                "predicted":  243000.0,
                                                "residual":  19000.0,
                                                "abs_error":  19000.0,
                                                "pct_error":  7.25
                                            },
                                            {
                                                "rank":  5,
                                                "index":  115,
                                                "actual":  212000.0,
                                                "predicted":  196000.0,
                                                "residual":  16000.0,
                                                "abs_error":  16000.0,
                                                "pct_error":  7.55
                                            },
                                            {
                                                "rank":  6,
                                                "index":  304,
                                                "actual":  142000.0,
                                                "predicted":  155000.0,
                                                "residual":  -13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  9.15
                                            },
                                            {
                                                "rank":  7,
                                                "index":  78,
                                                "actual":  114000.0,
                                                "predicted":  127000.0,
                                                "residual":  -13000.0,
                                                "abs_error":  13000.0,
                                                "pct_error":  11.4
                                            },
                                            {
                                                "rank":  8,
                                                "index":  230,
                                                "actual":  180000.0,
                                                "predicted":  167500.0,
                                                "residual":  12500.0,
                                                "abs_error":  12500.0,
                                                "pct_error":  6.94
                                            },
                                            {
                                                "rank":  9,
                                                "index":  312,
                                                "actual":  135000.0,
                                                "predicted":  147500.0,
                                                "residual":  -12500.0,
                                                "abs_error":  12500.0,
                                                "pct_error":  9.26
                                            },
                                            {
                                                "rank":  10,
                                                "index":  5,
                                                "actual":  98000.0,
                                                "predicted":  87000.0,
                                                "residual":  11000.0,
                                                "abs_error":  11000.0,
                                                "pct_error":  11.22
                                            }
                                        ]
                       }
                   ]
};
