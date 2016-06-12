// 当解构赋值失败时变量的值为undefined

var [foo] = [];

console.log(foo);

var [bar,foo] = [1];

console.log(bar, foo);


