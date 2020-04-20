---
templateKey: blog-post
title: "Intro to HTL - Lesson 1: Expressions"
date: 2020-04-15T11:53:15.737Z
description: A step-by-step introduction to HTL
featuredpost: false
featuredimage: /img/white-steps.jpg
tags:
  - Intro-to-HTL
  - Beginner
---
Adobe Experience Manager (AEM) is a great way to *manage* content, but as FrontEnd Developers, we need a good way to *template* content. AEM provides a good way to manipulate our content to meet our presentation requirements: **HTL**.

HTL - or HTML Template Language - was purpose built to work with AEM, improve data security, and simplify template development. HTL looks like HTML, but with some new data-attributes and expressions. 

Today, we're going to learn about one of the fundamentals of HTL: **Expressions**

```
${thisIsAnExpression}
```
Expression syntax is identified with `${` and `}`. The contents of an expression can be:
* Variables
* Logical comparisons
* Booleans
* Strings
* Integers

Before we continue with Expression Variables, a quick note about another feature of HTL: Comments.

```
<!-- This is an HTML comment, it will be included in the markup from AEM -->
<!--/* This is an HTL comment, it will NOT be included in the markup from AEM */-->
```

Now that you know how to use HTL comments, let's take a look at some examples of using variables in HTL Expressions using Variables.

```
<!--/* Expressions can be included in markup */-->
<p>This is a ${variable}</p>

<!--/* Expressions can access members of a data object */-->
<p>Hello ${person.name}</p>
<p>Hello ${person['name']}</p>

<!--/* Expressions can access indices of an array */-->
<li>List Index: ${listItem[2]}</li>

<!--/* Expressions can be Literals as well */-->
${true}
${false}
${12}
${380103}
${'A String'}
${"Another String"}
${['An','Array','Of','strings','numbers',1,2,3,'and','booleans',true]}
```

As you can see, there's quite a few ways of using variables in expressions. While writing HTL you will use this basic functionality frequently, so it's important to understand this basic fundamental. 

Next let's look at Logical Expressions:

Sources:
1. [HTL Specification](https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md)
2. [Official Adobe Docs](https://docs.adobe.com/content/help/en/experience-manager-htl/using/getting-started/update.html)
3. [Official Adobe Overview](https://docs.adobe.com/content/help/en/experience-manager-htl/using/overview.html)