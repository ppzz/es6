// 在es5中全局变量与全局对象的属性是等价的
// 在浏览器中，全局对象指的是window，nodejs中全局对象指的是 global

global.a = 123;
console.log("a:", a);
console.log("this.a:", this.a);

b = 234;

console.log("global.b:", global.b);
console.log("this.b:", this.b);

var c = 456;

console.log("this.c", this.c);
console.log("global.c:", global.c);


