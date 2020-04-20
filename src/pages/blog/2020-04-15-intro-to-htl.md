---
templateKey: blog-post
title: Intro to HTL
date: 2020-04-15T11:53:15.737Z
description: A step-by-step introduction to HTL
featuredpost: false
featuredimage: /img/white-steps.jpg
tags:
  - Intro-to-HTL
  - Beginner
---
Frontend Development for Adobe Experience Manager (AEM) means using the HTL - HTML Template Language - to present data from the content management system. HTL was written for use with AEM with the 6.0 release, and was made as a replacement for Java ServerPages (JSP). HTL was created to improve data security, simplify template development for AEM, and to enable Frontend Developers - who often don't know Java - to write templates for AEM. 

HTL intentionally looks like HTML, and uses an expression language to insert data into markup. Behind the scenes, HTL is compiled to Java Servlets, and all of the HTL annotations, tags, and expressions are removed from the output markup.

Let's learn one of the fundamental concepts of HTL, Expressions:

```
${thisIsAnExpression}
```
Expression syntax is identified with `${` and `}`. The contents of an expression can be:
* Variables
* Logical comparisons
* Booleans
* Strings
* Integers

```
<!--/* Expressions can be included in markup */-->
<p>This is a ${variable}</p>

<!--/* Expressions can access members of a data object */-->
<p>Hello ${person.name}</p>
<p>Hello ${person['name']}</p>

<!--/* Expressions can access indices of an array */-->
<li>List Index: ${listItem[2]}</li>
```


Sources:
1. https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md
2. https://docs.adobe.com/content/help/en/experience-manager-htl/using/getting-started/update.html
3. https://docs.adobe.com/content/help/en/experience-manager-htl/using/overview.html

