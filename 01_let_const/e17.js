var f = function () { console.log('I am outside!'); }

(function () {
  if(false) {
    // 重复声明一次函数f
    var f = function () { console.log('I am inside!'); }
  }

  f();
}());
