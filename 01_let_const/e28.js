

const foo = Object.freeze({name:1234});

// 常规模式下下面行可以运行，
// 严格模式下下面行会报错

foo.pro1 = 123;
console.log(foo);


