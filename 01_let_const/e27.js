const foo = {};
foo.pro1 = 123;

console.log(foo.pro1);

console.log(foo);

// 应该会报错： 不能给常量赋值；
foo = {name:456};


