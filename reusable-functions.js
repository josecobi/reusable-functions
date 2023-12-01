//Part 1:  Thinking Functionally
console.log(`\n>>>>>>>>>>>>>>>>>>>>>>Part 1:  Thinking Functionally<<<<<<<<<<<<<<<<<<<`);
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

console.log(`\nThe average of the numbers in the array [${arrOfNum}] is: ${averageArray(arrOfNum)}`);

//Take an array of strings and return the longest string.
//Use sort(comparefn) as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#comparefn
const myArray = ['apple','elephant', 'programming','ocean', 'mountain', 'coffee', 'watermelon'];
function sortStrByLength(arr){
console.log("\nThe longest string in the array is: " + arr.sort((a, b) => b.length - a.length)[0]);
}

sortStrByLength(myArray);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//Filter string in array as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let newMyArray = ['say', 'hello', 'in', 'the', 'morning'];
let arrOfStringslongerThan = [];
function stringsLongerThan(arr, number){

    return arr.filter((word) => word.length > number);
}
console.log("\nThe string(s) longer that 3 in the array is/are: " + stringsLongerThan(newMyArray, 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function listNNumbers (n){
    
    if(n > 0){
        console.log(n);
        listNNumbers(n - 1)
    }
}
console.log("The numbers betwwen 1 and 'n' are:");
listNNumbers(10);

//Part 2: Thinking Methodically
console.log("\n>>>>>>>>>>>>>>>>>>>>>>Part 2: Thinking Methodically<<<<<<<<<<<<<<<<<<<<<<<")

let arrayPart2 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function sortArrByAge(arr){
    arr.sort((a, b) => {
        return parseInt(a.age) - parseInt(b.age);
    })
}

sortArrByAge(arrayPart2)
console.log("\nThe array sorted by age looks like this:\n", arrayPart2);