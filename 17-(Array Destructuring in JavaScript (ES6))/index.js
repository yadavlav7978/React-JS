import react from "react";

//!------------------------------------------Array Destructuring in JavaScript (ES6) ---------------------------------

var student = ["Lav", "Ayush", "Akash", "Gaurav", "Anil"];

//* without array destructing if we want to access the element of array then  :

var st1 = student[0];
var st2 = student[1];
var st3 = student[1];

console.log(st1);

//* with the help of array destructing we can do above in simple way :

let [s1, s2, s3] = student;
console.log(s1);

//  s1 -> Lav (Here s1 refer to Lav)
//  s2-> Ayush
//  s3 -> akash
// since we do not assign variable for next element then we cant access these element.

//? If you only want access first and last element of array then :

let [first, , middle, , last] = student;

console.log(first + " " + middle + " " + last);

//only want to access last element of the array then:
let [, , , , onlylast] = student;

console.log(onlylast);
