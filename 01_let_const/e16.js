// 目前会报错 原文说是在两种模式下会产生不同的结果，应该不会报错才对
function foo() {
  console.log("i am outside.");
}

function main() {
  if (false) {
    function foo() { console.log("i am inside.");}
  } 
  foo();
};

main();

