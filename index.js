//Difference between Var, Let and Const
//Var
//Declarations are global outside the function meaning they are defined throughout the program but are local when declared within a function
//Let: Variables declared by let cannot be redeclared and must be declared before use
//Const: Const creates a variable that cannot be reassigned another value 
function CountryAbv(Full, Abv){
    
    console.log("This is " + Full +" in Abbrevation "+ Abv)

}


CountryAbv("Austrailia", "AUS");
CountryAbv("New Zealand", "NZD");
CountryAbv("Brasil", "BRA");
CountryAbv("Japan", "JPN");
CountryAbv("China", "CHN");

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


let Phone ={
    brand: "Tecno",
    Color: "Blue",
    year: 2023,
    camera: "48mp",
    picture: function(){
        console.log("Take selfie");
    }
}

console.log(Phone.brand);

Phone.Color = "Red";

console.log(Phone);

Phone.picture()


let person = [
    {
        gender: 'female',
        ageBracket: "15-20",
        school: "queens college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    {
        gender: 'male',
        ageBracket: "15-20",
        school: "Kings college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    "Adebayo"
]// access both genders 
// change city to ogun
// change adebayo to your name

console.log(person[0].gender);
console.log(person[1].gender);

person[0].address.city = "Ogun"
person[1].address.city ="Ogun"

console.log(person);

person[2]= "Abdullah"
console.log(person);