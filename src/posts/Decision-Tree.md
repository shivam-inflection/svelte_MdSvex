---
title: Decision Tree
description:
date: '2023-Mar-16'
categories:
  - python
  - R programming
  - pandas
  - numpy
published: true
---

## Decision Tree

- **Supervised** learning model
- Used for both **classification** and **regression** problems (mainly for Classification)
- Graphical representation for getting all possible solution to a problem based on given conditions
- Split tree into subtrees based on answer(**Yes**/**No**)

                                       Example of Binary Decision Tree
<img src="/images/Decision-Tree-md-Heart_Dataset/BinaryDT.png" width="600"/> 




## Terminologies
- **Root Node**: Node from which tree starts
- **Leaf Node**: Final output node
- **Parent/Child Node**: Root Node=Parent Node & Other Nodes=Child Nodes
- **Splitting**- Splitting tree into sub-trees based on given conditions

---
We can understand this concept more with the help of a heart related dataset. This dataset can be found on kaggle: https://www.kaggle.com/datasets/nareshbhat/health-care-data-set-on-heart-attack-possibility

### Importing dependencies
```python
import numpy as np
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt

from sklearn.metrics import classification_report,confusion_matrix,accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier, plot_tree

```


The dataset looks like this:

<img src="/images/Decision-Tree-md-Heart_Dataset/data.png" width="600"/> 

It consists 303 observations and 14 features. There are no null values. 
> `target = 1` represents the patient is in risk of a heart attack and `target = 0` represents they are safe.

---
Lets find out the number of observations in each category by plotting a countplot using seaborn using the code:

```python
ax = sns.countplot(data = df, x = 'target', palette = 'hls')
ax.bar_label(ax.containers[0])
```

<img src="/images/Decision-Tree-md-Heart_Dataset/countplot_obs.png" width="350"/> 

---

### Range of data and Outliers

Now, we need to plot a **boxenplot** which will show us the range of data of each parameter and if there are any outliers.

```python
plt.figure(figsize = (12,6))
sns.boxenplot(data = df.drop(columns = 'target'))
plt.xticks(rotation = 30)
plt.show()
```

<img src="/images/Decision-Tree-md-Heart_Dataset/boxenplot.png" width="550"/> 

This plot shows that the range of the data in this dataset is quite uneven and there is an outlier in the cholestrol feature but in case of medical records, removing an outlier observation is not a good idea.

---
### Handling the outlier

Decision Trees are not sensitive to noisy data or outliers. So, we don't need to remove it.

---
### Scaling the data

Decision trees do not require feature scaling to be performed as it's not sensitive to the the variance in the data.

---
### Splitting data into training and testing sets

```python
X = df.drop(columns = 'target')
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size = 0.20, stratify = y, random_state = 63)
```
---
### Model Fitting and Training

```python
model=DecisionTreeClassifier(criterion='entropy')
model.fit(x_train,y_train)
```
### Checking the training and testing scores:

```python
print(model.score(X_train, y_train), model.score(X_test, y_test))
```
> Training accuracy score : 100.0 <br> Testing accuracy score : 83.6

### Plotting the Tree
```python
mtp.figure(figsize=(25, 18))
plot_tree(model, filled=True, rounded=True, class_names=['Less Chance', 'More Chance'], feature_names=x.columns);
```
<img src="/images/Decision-Tree-md-Heart_Dataset/HeartDT.png" width="450"/>



### Classification Report

```python
print(classification_report(y_test, model.predict(X_test)))
```

<img src="/images/Decision-Tree-md-Heart_Dataset/classification_report.png" width="450"/> 

### Confusion matrix

```python
cm = confusion_matrix(y_test, model.predict(X_test))
sns.heatmap(cm, annot = True, cmap = 'Blues')
```

<img src="/images/Decision-Tree-md-Heart_Dataset/confusion_matrix.png" width="350"/> 

---
## Summary

> - A decision tree does not require **normalization** and **scaling** of data. <br>
> - A Decision tree model is very **intuitive** and **easy** to explain. <br>
> - A **small change** in the data can cause a **large change** in the structure of the decision tree causing **instability**. <br>
> - Decision tree training is relatively **expensive** as the **complexity and time** has taken are more. <br>


