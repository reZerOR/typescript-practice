"use strict";
/* When you declare and assign a variable then typescript automaticly
know that the variable's data type. If you want re assign the variable with
another data type value typscript will give you error.
*/
// let playername = 'raihan';
// console.log(playername);
// playername = 55;  /* will give you an error*/
// console.log(playername);
/*Now this another scenario where you just declare the variable then typscript can't
know what is data type of that variable then you can re assign again and again
*/
// let playername;
// playername = 'raihan';
// playername = 55 /*it will not give you an error */
// console.log(playername)
/* this function is working like vanila javascript because you didn't type the implicit types in
function argument
*/
// function multiply (a, b){
//     return a*b;
// }
// console.log(multiply(4, 7)) 
// console.log(multiply('raihan', 8)) /* no error */
/*  */
function multiplyWithImplicitTypes(a, b) {
    return a * b;
}
console.log(multiplyWithImplicitTypes(56, 78));
console.log(multiplyWithImplicitTypes("raihan", 78));
