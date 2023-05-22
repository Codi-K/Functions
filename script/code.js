//Question 1
function greet() {
    console.log("Hello");
}
greet()

//Question 2
function multiply(numb, numb1) {
 console.log(numb * numb1 ); 
}
multiply(10,2)

//Question 3
function tableOfFive(number){
    return number * 5
}
console.log(tableOfFive(3));














// Class work - Revision

// let person1 = {
//     firstName: "Keeno",
//     lastName: "Fourie",
//     age: 18

// }

// let person2 = {
//     firstName: "Codi",
//     lastName: "Kader",
//     age: 22
// }

// let employees = [person1, person2]
// console.log(employees);
// console.log(employees[1].age);

// var numb1 = 5;

// console.log(window.numb1);

// let numbers = [9, 11, 34]

// console.log(numbers);

// numbers.push(12, 9);
// console.log(numbers);
// console.log(numbers[0]);

// let size = numbers.length;
// console.log(`Array: ${size}`);
// console.log(numbers[size]);

// let sentence = "i love programming";
// console.log(sentence.length);
// console.log(sentence[0]);
// console.log(sentence[0],sentence.slice(sentence.lastIndexOf ("n") +1, sentence.length+1)); // Shows i & g


// Functions

// function addtition(){
//     console.log("My Name is Jeff");
// }

// addtition()

// function name (username){
//     console.log(`my name is ${username}`);
// }
// name ("Codi")


// function age (userAge){
//     return userAge
// }
// console.log(age (22));

// let addtition = (numb1, numb2)=>{
//     return numb1 +numb2
// }
// console.log(addtition(5,3));

// let numbers = [ 9, 4, 5, 12, 6];
// for(i = 0; i<numbers.length; i++){
//     console.log(i);
// }
// console.log("========");
// console.log(i);

// let cnt = 0;
// while(cnt < numbers.length){
//     console.log(numbers(cnt));
//     cnt++;
// }

// numbers.forEach(function (num) {
//     console.log(num);
// });

// let number = 15.56
// // generates a random number between 0 and 1 exclusive of 1 (use multiplication to increase range)
// console.log(Math.random()*3);
// // rounds a number off to the nearest integer
// console.log(Math.round(number));
// //always rounds a number up
// console.log(Math.ceil(number));
// // always rounds a number down
// console.log(Math.floor(number));
// // removes decimals
// console.log(Math.trunc(number));
// //returns the highest value
// console.log(Math.max(number, 16));
// // returns the lowest value
// console.log(Math.min(number));