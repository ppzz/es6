// 暂时性死区  较隐秘错误将报错
function bar( x = y, y = 2) {
  return [x, y];
}
console.log(bar()):

