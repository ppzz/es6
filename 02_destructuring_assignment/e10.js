var [foo = true] = [];

console.log(foo);


let [x, y = 'b'] = ['a'];
console.log(x, y);

let [a, b = 'x'] = ['a', '123'];

console.log(a, b);

let [c, d = '123'] = ['111', undefined];
console.log(c, d);

// 当赋值中出现undefined的时候，相当于没有给这个值。

let [e = 123] = [null];

console.log(e); // null
// 只有在值为undefined的时候才会忽略值。 因为null !== undefined 所以最后的值是null


function f() {
  console.log('aaa');
  return 111;
}

let [g = f()] = [1];
console.log(g);
// 此处的f() 是惰性求值的。只有当后面的值域中没有值的时候才会执行f();
// 上f函数相当于：

let h;
if ([1][0] === undefined ) {
  h = f();
} else {
  h = [1][0];
}

// 默认值可以引用结构赋值的其他变量，但改变两必须已经被声明

let [i = 1, j = i] = [];

console.log('i:', i, '   j:', j);


// let [k = l, l = 12] = []; // ReferenceError




