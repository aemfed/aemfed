---
templateKey: blog-post
title: "Intro to HTL: Logical Operators"
date: 2020-04-27T17:03:47.843Z
description: An introduction to how logical operators work in HTL
featuredpost: true
featuredimage: /img/white-steps.jpg
tags:
  - Intro-to-HTL
  - Beginner
---


#### 1.1.4. Operators

##### [](https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md#1141-logical-operators)1.1.4.1. Logical Operators

Only the following logical operators are currently supported, all other operations have to be prepared through the Use-API:

```

```

The numbers written in the comments above correspond to the precedence of the operators.

The logical`&&`and`||`operators work like the[JavaScript`||`and`&&`operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.11): they return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. This offers a handy way to use the`||`operator to specify default string values:

```

```

##### [](https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md#1142-comparison-operators)1.1.4.2. Comparison Operators

HTL also provides a set of strict comparison operators which can be used for comparing values of operands of the same type; no type conversion will be applied to any of the operands. The equality operators (`==`,`!=`) work similarly to the[JavaScript`===`](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4)and the[JavaScript`!==`](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4)identity operators.

```

```

##### [](https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md#1143-relational-operators)1.1.4.3. Relational Operators

The`in`relational operator can be used to:

1. Check if a`String`is contained by another`String`(case-sensitive):

   ```

   ```
2. Check if an`Array`or a`List`contains an object:

   ```

   ```
3. Check if an object has a property or a`Map`has a key:

   Assuming the following use object (more details in the[Use-API](https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md#4-use-api)section) provided by a`logic.js`file:

   ```

   ```

   ```

   ```