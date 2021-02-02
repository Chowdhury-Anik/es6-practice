// constant doesn't change
//this is a variable where to used there are not chance to change the variable....!
// constant means a situation that does not change.

const friend = "Ajoy Thander";
// const friend = "Anik Chowdhury";

console.log(friend);


//A variable declared with let can be change but not to be leak. Here,leak means you can't call the variable from outside the statement...
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = 0 + i;
}
console.log(i);
//here the value of [i] didn't showing by console.log because i variable declared with let in the for loop.