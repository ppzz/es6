"use strict"


const foo = Object.freeze({name:1234});

// 常规模式下下面行可以运行，
// 严格模式下下面行会报错

foo.pro1 = 123;
console.log(foo);

// es5 中质油两种声明变量的方法： var & function

// es6 中有六种声明变量的方法： var & function； let & const；import & class



