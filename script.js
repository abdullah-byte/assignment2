

let age = prompt("Please enter your age")

const Citizen = prompt("Are you a citizen: (Yes/No)") 

if (age >= 18 && Citizen === "Yes"){
    console.log("You are of age and a citizen so you are eligible to vote")
}else if (age >= 18 && Citizen === "No"){
    console.log("You are of age but not a citizen so you are unable to vote")
}else if (age <18 && Citizen === "Yes"){
    console.log("You are a citizen but not of age to vote")
}else if (age <18 && Citizen === "No"){
    console.log("You are not of age and not a citizen so you are unable to vote")
}