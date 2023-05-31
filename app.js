console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;

let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log("a is " + a);
console.log("b is " + b);
console.log("add: " + add);
console.log("minus: " + minus);
console.log("multiply: " + multiply);
console.log("dividing: " + dividing + "\n");

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log("num: "+num);
console.log("str: "+str);
console.log("str2: "+str2);
console.log("isPresent: "+isPresent);
console.log("firstName: "+firstName);
console.log("lastName: "+lastName+"\n");

let answer1 = num + str;
console.log("What is the value of: num + str: " + answer1);

let answer2 = num + str2;
console.log("What is the value of: num + str2: " + answer2);

let answer3 = num + isPresent;
console.log("What is the value of: num + isPresent: " + answer3);

let answer4 = firstName + num;
console.log("What is the value of: firstName + num: " + answer4);

let answer5 = isPresent + str;
console.log("What is the value of: isPresent + str: " + answer5);

let answer6 = firstName + lastName;
console.log("What is the value of: firstName + lastName: " + answer6+"\n");

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log("val: "+val);
console.log("str3: "+str3);
console.log("str4: "+str4);
console.log("isAwake: "+isAwake+"\n");

let check1 = val == str3;
console.log("What is the value of: val == str3: "+check1);

let check2 = val === str3;
console.log("What is the value of: val === str3: "+check2);

let check3 = !isAwake;
console.log("What is the value of: !isAwake: "+check3);

let check4 = ("eleven" == str4 && val >= str3);
console.log("What is the value of: (\"eleven\" == str4 && val >= str3): "+check4);

let check5 = (!isAwake || isAwake);
console.log("What is the value of: (!isAwake || isAwake): "+check5);

let check6 = 0 == false;
console.log("What is the value of: 0 == false: "+check6);

let check7 = 0 === false;
console.log("What is the value of: 0 === false: "+check7);

let check8 = 0 != false;
console.log("What is the value of: 0 != false: "+check8);

let check9 = 0 !== false;
console.log("What is the value of 0 !== false: "+check9);