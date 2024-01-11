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
/* this function is working like typescript function because
it has implicit data types in its arguments */
// function multiplyWithImplicitTypes(a : number, b : number){
//     return a * b
// }
// console.log(multiplyWithImplicitTypes(56, 78))
// console.log(multiplyWithImplicitTypes("raihan", 78)) /* typescript error will show */
// let oneDataTypeArray = [ 'raihan', 'joson']
// oneDataTypeArray.push('kaled')
// oneDataTypeArray.push(55) /* typescript error because the assigned with string at the first time */
// let mixedDataTypesArray = [55, 'hi', false, {}]
// mixedDataTypesArray.push(56)
// mixedDataTypesArray.push('raihan') /* this will not trow an error because its typed with mixed data types */
let DataType;
DataType = 77;
// DataType = 'hi iam' /* this will give you error because its datatype is number */
let mixedDataType;
mixedDataType = 77;
mixedDataType = 'raihan';
// mixedDataType = true /* this will give you error cause its datatype is number and string */
