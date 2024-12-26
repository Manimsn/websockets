// Question 1:
const str = "abc" + +"def";
// console.log(str)

// Unary operator tries to convert the values to a number right after it comes which in this case is a string so it cant convert to Number
// so it returns "NaN" and the middle "+" is a binary operator cancatenates the reulst and 
// the output is "abcNaN"

// Question 2:
var arrA = [1,2];
var arrB = arrA.slice();
var arrB = arrA;
arrB[0] = 42;
// arrB = [42];
// console.log(arrA)
// console.log(arrB)

// Slice method will create a shallow copy of the original array and assign it to new array.
// In Shallow copy, primitive datatype will be copied by "value",
// but non-primitive is by "reference"
// here we are trying to modify primitive datatype due to this it will not have any effect in the original Array.
// The output will be [1, 2]

// console.log(2 + "3" + 4) //String will use concatenate if "+" is used

let a = true;
let b = true;
let c = false;

// console.log(a && b || c)
// AND opersator has more precedence over OR operator
// so A and B will be executed and it results "true"
// now true || c results true

let x = 10 + 20 * 3;
console.log(x) //70
// Muliple has more precedence over "+"
// checking new commit