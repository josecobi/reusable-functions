//Part 1:  Thinking Functionally
console.log(`>>>>>>>>>>>>>>>>>>>>>>Part 1:  Thinking Functionally<<<<<<<<<<<<<<<<<<<`);
//Take an array of numbers and return the sum.


function sumArray(numArr){
    let sum = 0;
    numArr.forEach((number) =>{
    console.log(number);
    sum += number});
    return sum;
}

let arrOfNum = [5, 10, 15, 20];
console.log(arrOfNum[0] + arrOfNum[1]);


console.log(`\nThe sum of the numbers in the array [${arrOfNum}] is: ${sumArray(arrOfNum)}`);