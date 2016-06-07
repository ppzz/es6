function foo() {
  var bar = 12;
  let bar = 13; // wrong
}

foo();

function foo2() {
  let bar = 12;
  var bar = 14; // wrong
}

foo2();


function foo3() {
  let bar = 12;
  let bar = 13; // wrong
}

foo3();


