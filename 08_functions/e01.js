
function insert(value) {
    return {
        into: function (array) {
            return {
                after: function (target) {
                    array.splice(array.indexOf(target) + 1, 0, value);
                    return array;
                }
            }
        }
    }
}


let a = insert(55).into([1, 2, 3, 4]).after(3);

console.log(a);
