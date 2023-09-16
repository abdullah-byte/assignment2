//Difference between Var, Let and Const
//Var
//Declarations are global outside the function meaning they are defined throughout the program but are local when declared within a function
//Let: Variables declared by let cannot be redeclared and must be declared before use
//Const: Const creates a variable that cannot be reassigned another value 
??

//addition
function addition(a,b){
   
    console.log(a + " + " + b + " = " + (a+b))
}
console.log("This is for addition")
addition(1,2)
addition(2,4)

// functions of add, multiply and minus
//Multiplication
function multiply(a,b){
   
    console.log(a + " * " + b + " = " + (a*b))
}
console.log("This is for Multiplication")
multiply(1,2)
multiply(2,4)

//Subtraction
function sub(a,b){
   
    console.log(a + " - " + b + " = " + (a-b))
}
console.log("This is for Subtraction")
sub(2,1)
sub(4,2)