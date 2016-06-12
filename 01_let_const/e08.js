// temporal dead zone 暂时性死区

var foo = 123;

if (true) {
  typeof undeclared_variable;
  typeof foo;
  let foo = 123;
}

