// es5中作用域问题
// 输出为 undefined 内层的变量提升坑，覆盖外层变量
var temp = new Date();

function f() {
  console.log(temp);
  if (false) {
    var temp = "hello world";
  }
}
f();


