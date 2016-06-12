// ES5的严格模式中 规定函数职能在顶层作用域或者在函数内部声明。

let f;
{
  let a = "hello";
  f = function () {
    return a;
  }
}
console.log(f());

