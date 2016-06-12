// 只要具有iterator接口都可以使用结构赋值

function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [a,b,c,d,e,f,g] = fibs();
console.log(a,b,c,d,e,f,g);

// fibs是一个generator函数, 原生具有iterator接口,解构函数会一次从这个接口获取值.

