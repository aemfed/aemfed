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
In the previous lesson we learned about expressions in HTL. We will continue now with Logical Operators. 

HTL supports the following logical operators:
```
<!--/* Logical AND */--> 
${var1 && var2}

<!--/* Logical OR */--> 
${var1 || var2}

<!--/* Logical NOT */--> 
${!var1}

<!--/* Conditional (ternary) */--> 
${var1 ? 'true' : 'false'}

<!--/* Grouping parenthesis */--> 
${var1 && (var2 || var3)}
```

1.1.4. Operators
1.1.4.1. Logical Operators
Only the following logical operators are currently supported, all other operations have to be prepared through the Use-API:

${varOne && !(varTwo || varThree)} <!--/* 1. Grouping parenthesis */-->
${!myVar}                          <!--/* 2. Logical NOT */-->
${varOne && varTwo}                <!--/* 3. Logical AND */-->
${varOne || varTwo}                <!--/* 4. Logical OR */-->
${varChoice ? varOne : varTwo}     <!--/* 5. Conditional (ternary) (note that the ':' separator must be surrounded by a space) */-->
The numbers written in the comments above correspond to the precedence of the operators.

The logical && and || operators work like the JavaScript || and && operators: they return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. This offers a handy way to use the || operator to specify default string values:

<!--/*
    For example in following case it will show pageTitle if it exists,
    else it shows jcr:title, and if that doesn't exist either, then
    resource.name is shown.
*/-->
${properties.pageTitle || properties.jcr:title || resource.name}
1.1.4.2. Comparison Operators
HTL also provides a set of strict comparison operators which can be used for comparing values of operands of the same type; no type conversion will be applied to any of the operands. The equality operators (==, !=) work similarly to the JavaScript === and the JavaScript !== identity operators.

${nullValueOne == nullValueTwo}        <!-- null comparison -->
${nullValueOne != nullValueTwo}        <!-- null comparison -->
${stringValueOne == stringValueTwo}    <!-- string comparison -->
${stringValueOne != stringValueTwo}    <!-- string comparison -->
${numberValueOne < numberValueTwo}     <!-- number comparison -->
${numberValueOne <= numberValueTwo}    <!-- number comparison -->
${numberValueOne == numberValueTwo}    <!-- number comparison -->
${numberValueOne >= numberValueTwo}    <!-- number comparison -->
${numberValueOne > numberValueTwo}     <!-- number comparison -->
${numberValueOne != numberValueTwo}    <!-- number comparison -->
${booleanValueOne == booleanValueTwo}  <!-- boolean comparison -->
${booleanValueOne != booleanValueTwo}  <!-- boolean comparison -->
${enumConstant == 'CONSTANT_NAME'}     <!-- Java Enum comparison -->
1.1.4.3. Relational Operators
The in relational operator can be used to:

Check if a String is contained by another String (case-sensitive):

${'a' in 'abc'} <!--/* returns true */-->
${'ab' in 'abc'} <!--/* returns true */-->
${'bc' in 'abc'} <!--/* returns true */-->
${'abc' in 'abc'} <!--/* returns true */-->
${'d' in 'abc'} <!--/* returns false */-->
Check if an Array or a List contains an object:

<!--/*
  Assuming myArray would be in scope and would have the following content:
  [100, 200, 300, 400, 500]
*/-->
${100 in myArray} <!--/* returns true */-->
${300 in myArray} <!--/* returns true */-->
${1 in myArray} <!--/* returns false */-->
Check if an object has a property or a Map has a key:

Assuming the following use object (more details in the Use-API section) provided by a logic.js file:

use(function () {
    return {
        a: true,
        b: 'two',
        c: 3
    };
});
<sly data-sly-use.logic="logic.js" />
${'a' in logic} <!--/* returns true */-->
${'b' in logic} <!--/* returns true */-->
${'c' in logic} <!--/* returns true */-->
${'two' in logic} <!--/* returns false */-->