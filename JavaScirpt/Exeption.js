// console.log("Program Started")

// let a = 10/0
// console.log(a)

// console.log("Program Ended")

console.log("Program Started");
try {
    let a = 10/b;
    console.log(a);
}
catch(error){
    console.log("Error occured and handled", error.message);
}
finally {
    console.log("Program Ended");
}

// throw
let age = 12;
try {
    if (age < 18) {
        throw new error("Age should be graeter than 18, not eligible");
    }
}
catch(e){
    console.log(e.message);
}
finally {
    console.log("Thank You!")
}