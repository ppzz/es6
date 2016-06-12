var a =[];
for(let i = 0; i < 10; i++){
  a[i] = function () {
    return i;
  }
}
console.log(a[6]());
console.log(a[7]());
console.log(a[4]());
console.log(a[1]());

