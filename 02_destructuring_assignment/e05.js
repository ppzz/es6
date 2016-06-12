//当等号左边的数量小于右边时，解构赋值可以成功。

let [x,y] = [1,2,3];

console.log("x:", x, "    y:", y);

let [a, [b], c] = [1, [2, 3], 4];

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

