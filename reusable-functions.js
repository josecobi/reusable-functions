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
console.log("\nThe longest string in the array ['apple','elephant', 'programming','ocean', 'mountain', 'coffee', 'watermelon'] is: " + arr.sort((a, b) => b.length - a.length)[0]);
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
console.log("\nIf 'n' equals to '10', the numbers betwwen 1 and 'n' are:");
listNNumbers(10);

//Part 2: Thinking Methodically
console.log("\n>>>>>>>>>>>>>>>>>>>>>>Part 2: Thinking Methodically<<<<<<<<<<<<<<<<<<<<<<<")

//Sort the array by age.
let arrayPart2 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function sortArrByAge(arr){
    arr.sort((a, b) => {
        return parseInt(a.age) - parseInt(b.age);
    })
}

sortArrByAge(arrayPart2)
console.log("\nThe array sorted by age looks like this:\n", arrayPart2);

//Filter the array to remove entries with an age greater than 50.
function filterAgeYounger50(arr){
    return arr.filter((entry) => parseInt(entry.age) <= 50 );    
}
let filteredArray = filterAgeYounger50(arrayPart2)
console.log("\nThe filtered array with removed entreies with an age older than 50 is:\n", filteredArray);

//Map the array to change the “occupation” key to “job” and increment every age by 1.

function changeObjectsInArray(arr){
    
    arr.map((obj) =>{
        for (let key in obj){
            if(key === 'occupation'){
                obj['job'] = obj[key];
                delete obj['occupation'];
            }
            if(key === 'age'){
                obj[key] = (parseInt(obj[key]) + 1).toString();

            }
        }
    })
    return arr;
}
let agesPlus1 = changeObjectsInArray(filteredArray)
console.log("\nThis function changed the key 'occupation' for 'job' and added '1' to the age of each person to the filtered array. Result:\n", agesPlus1);

function sumAges(arr){
    const sumOfAges = arr.reduce((sum, obj) => {
        return sum + parseInt(obj.age);
    }, 0) 
    return sumOfAges;
}
let additionOfAges = sumAges(agesPlus1);
console.log("\nThe sum of the ages in the previous array is", additionOfAges);

function averageAge(arr){
    return sumAges(arr) / arr.length;
}
let averageAgeResult = averageAge(agesPlus1);
console.log('\nThe average age of the previous array is: ', averageAgeResult);

//Part 3: Thinking Critically
console.log('\n>>>>>>>>>>>>>>>>>>>>>>>Part 3: Thinking Critically<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//Take an object and increment its age field.
let exampleObject = { id: "42", name: "Bruce", occupation: "Knight" };

function incrementAge(obj){
    if(!obj.age){
        obj.age = '0';
    }
    obj.age = parseInt(obj.age) + 1;
    obj.updated_at = new Date;
    return obj;  
}
console.log(incrementAge(exampleObject));

function incrementAgeCopy(obj){
    let copyOfObj = {...obj};
    if(!copyOfObj.age){
        copyOfObj.age = '0';
    }
    copyOfObj.age = parseInt(copyOfObj.age) + 1;
    copyOfObj.updated_at = new Date;
    return copyOfObj;  
}
console.log(incrementAgeCopy(exampleObject));