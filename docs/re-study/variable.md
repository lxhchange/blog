---
title: 重学前端 第一篇 变量
description: 重学前端
---

## 变量类型

JS中变量分为 基本类型 和 复杂类型，基本类型包含：null, undefined, Number, String, Boolean, Symbol 共六种， 复杂类型是 指 Object

null 和 undefined 分别表示 空引用 和 没有设置值



### 数字类型

在JS中数字类型通过Number表示，它的最大（小）整数 可以通过 Number.MAX(MIN)_SAFE_INTEGER

从其它类型转换到Number的方法主要是: **Number** 和 **parseInt**, **parseFloat**, 后二者主要用于 字符串转换到 数字

|            | Number | parseInt | parseFloat |
| ---------- | ------ | -------- | ---------- |
| Null       | 0      | NaN      | NaN        |
| Undefined  | NaN    | NaN      | NaN        |
| '1a'       | NaN    | 1        | 1.0        |
| '0xa'      | 10     | 10       | 0          |
| True/false | 1 / 0  | NaN      | NaN        |
| Symbol     | Error  | Error    | Error      |
| 空字符串   | 0      | NaN      | NaN        |

差异在于, Numer只识别数字，如果包含非数字类型的字符，直接返回NaN, parseInt 和 parseFloat是从第一个非空字符串开始 到最后一个非空字符串

在JS中，浮点运算是会丢失精度的，比如

```javascript
0.1 + 0.2 === 0.3 // false, 实际是0.30000000000000004
```

原因是使用IEEE-754 (双精度 64位存储，1 - 10 - 53)格式存储浮点数字，有比较多的第三方库可以处理这种精度丢失的问题，比如 *big.js*, *bignumber.js*, *decimal.js* and *bigdecimal.js*，它们之间的性能对比[here](https://jsperf.com/bignumber-js-vs-big-js-vs-decimal-js/8)

#### BigInt

可以表示大于 2^53 - 1 的数字，bigint类型 只能和 bigint类型 进行计算

```javascript
const b = 9007199254740991n
const c = BigInt(9007199254740991)
```



### 布尔类型

布尔类型的转换规则如下：

|            | Boolean (!)  |
| ---------- | ------------ |
| 0 / 1      | false / true |
| 空字符串   | false        |
| 非空字符串 | true         |
| null       | False        |
| Undefined  | False        |
| Object     | True         |





### 参考链接

1. https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues
