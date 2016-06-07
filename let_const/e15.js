function foo() {
  let bar = 10;
  if (true) {
    let bar = 20;
  }
  console.log(bar);
}
foo();


