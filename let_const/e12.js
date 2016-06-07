// 不同的作用域之间的变量不干扰

function foo() {
  let bar = 123;
  console.log("1:",bar);
  {
    let bar = 500;
    console.log("2:",bar);
  }
  console.log("3:",bar);
}

foo();

