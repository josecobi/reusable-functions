//Part 1:  Thinking Functionally
console.log(`>>>>>>>>>>>>>>>>>>>>>>Part 1:  Thinking Functionally<<<<<<<<<<<<<<<<<<<`);
// Declare the array of numbers that will be used to test the functions below
let arrOfNum = [5, 10, 15, 20];

//Take an array of numbers and return the sum.
function sumArray(numArr){
    let sum = 0;
    numArr.forEach((number) =>{
    sum += number});
    return sum;
}

console.log(`\nThe sum of the numbers in the array [${arrOfNum}] is: ${sumArray(arrOfNum)}`);

//Take an array of numbers and return the average.
function averageArray(numArr){
    let sum = sumArray(numArr);
    let average = sum / numArr.length;
    return average;
}

console.log(`\nThe sum of the numbers in the array [${arrOfNum}] is: ${averageArray(arrOfNum)}`);