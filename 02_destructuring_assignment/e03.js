let [foo, [[bar], baz]] = [1, [[2],3]];

console.log("foo:\t", foo);
console.log("bar:\t", bar);
console.log("baz:\t", baz);


let [, , third] = ["foo", "bar", "baz"];

console.log();
console.log("third:\t", third);

let [head, ...tail] = [1,2,3,4,5,6];


console.log("head:\t", head);
console.log("tail:\t", tail);

let [x, y, z] = ['a'];


console.log("x:\t", x);
console.log("y:\t", y);
console.log("z:\t", z);





