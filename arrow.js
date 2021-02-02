//Normal way to declare a funtion
// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(50);
// console.log(result);

//another way to declare arrow function in ES6

//single parameter arrow function
const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

// Double parameter arrow function
const add = (x, y) => x + y;
const result2 = add(50, 40);
console.log(result2);

//without parameter arrow function
const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result4 = sum * diff;
    return result4;
}
const result4 = doMath(7, 5);
console.log(result4);