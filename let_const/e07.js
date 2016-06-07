// temporal dead zone 暂时性死区

var foo = 123;

if (true) {
  foo = 'abc';
  let foo = 123;
}

