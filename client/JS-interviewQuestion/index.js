// Question 1:
const str = "abc" + +"def";
console.log(str)

// Unary operator tries to convert the values to a number right after it comes which in this case is a string so it cant convert to Number
// so it returns "NaN" and the middle "+" is a binary operator cancatenates the reulst and 
// the output is "abcNaN"
