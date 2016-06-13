// 对象的结构赋值

var {foo, bar} = {foo: "zhao", bar: "peng"};

console.log(foo, bar);

// 在变量的结构赋值中, 变量的属性的顺序不重要.重要的是变量的属性名.

let {fo, ba} = {ba: "pe", fo: "zha"};

console.log(fo, ba);

// 变量名&属性名不一致的情况: 

let {name: age} = {gender: "male", name: "zhaopeng"};

console.log(name, age);


