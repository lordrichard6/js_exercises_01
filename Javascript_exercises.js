// Write a function identity that takes an argument and returns that argument;
const identify = function identify(x) {
    return x
}
//or
const identify = (x) => x;
//---------------------------------------------------------------
// Write a binary function add that takes two numbers and returns their sum;
const add = (x, y) => {
    return x + y;
}
console.log(add(4, 6));
//---------------------------------------------------------------
// Write a binary function sub that takes two numbers and returns their difference;
const sub = (x, y) => {
    return x - y;
}
console.log(sub(8, 6));
//---------------------------------------------------------------
// Write a binary function mult that takes two numbers and returns their product;
const mult = (a, b) => {
    return a * b;
}
console.log(mult(5, 4));
//---------------------------------------------------------------
// Write a binary function sml that takes two numbers and returns the smaller one;
const sml = (a, b) => {
    return a < b ? a : b;
}
console.log(sml(5, 7));
//---------------------------------------------------------------
// Write a binary function maxb that takes two numbers and returns the larger one;
const lrg = (a, b) => {
    return a > b ? a : b;
}
console.log(lrg(9, 4));
//---------------------------------------------------------------
// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
    return nums.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4))