---
title: First post
description: First post.
date: '2023-4-14'
categories:
  - python
  
published: true
---

## Support Vector Machine (SVM)

Hey friends! 👋


- **Supervised** learning model
- Used for both **classification** and **regression**
- Predominantly used for **binary classification**

### SVM Classifier

SVM maps training datapoints in space so as to **maximize the gap**   (margin) between the categories. 
The best boundary that separates the data points into classes is called a **hyperplane**.
The new points will be classified based off on which side of the hyperplane the fall.
The points closest to the hyperplane are called **support vectors**.
The separation gap between the two lines on the closest data points. is called the **margin**.

<img src="/images/svmMd-heart-dataset/svm_terms.png" alt="Image not avilable" /> 


---
We can understand this concept more with the help of a **heart related dataset**. This dataset can be found on kaggle: https://www.kaggle.com/datasets/nareshbhat/health-care-data-set-on-heart-attack-possibility

But first we need to import the dependencies:

### Importing dependencies

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix

from sklearn.svm import SVC
```

The dataset looks like this:

<img src="/images/svmMd-heart-dataset/data.png" />

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`)
}
```