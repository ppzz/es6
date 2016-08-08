// 对象的结构赋值

var {foo, bar} = {foo: "zhao", bar: "peng"};

console.log(foo, bar);

// 在变量的结构赋值中, 变量的属性的顺序不重要.重要的是变量的属性名.

let {fo, ba} = {ba: "pe", fo: "zha"};

console.log(fo, ba);

// 变量名&属性名不一致的情况: 
// 用:将会把gender的值赋值给sex.
let {gender: sex} = {gender: "male", name: "zhaopeng"};
console.log( sex);

// 上面的例子说明: 前文中的对象的解构赋值实际上是一种简写: 
// 以下是完备的写法:
var {a1:a1, b1:b1} = {a1:123, b1:234};
console.log(a1,b1);
// 也就是说:对象的解构赋值,真正被赋值的是后面的变量,被声明的也是后面的变量.
//
