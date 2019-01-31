
//get file extension of a filename
function fileExt(fileName) {
   return fileName.split(".").pop();
};
console.log(fileExt("sometext.doc"));

// cut first and last char of a string and return remaining " middle"
function cutFirstLastChar(input){
   return input.substring(1,input.length-1)
}
console.log(cutFirstLastChar("Zanzibara"));

// reverse a given String
function reverseStr(input){
   return input.split("").reverse().join("");
}
console.log(reverseStr("Zanzibara nav sala"));

// function that sorts the givven string alphabetically
function sort(stringToSort){
   let arr = stringToSort.split('');
   arr.sort();
   return arr;
 }

console.log(sort("abdvc"));

// check if any of 2 input numbers is 50, or their sum is 50, then return true
function checkIf50 (num1, num2) {
if (num1==50 || num2==50 || num1+num2==50) {
   return true;
} return false
};
console.log(checkIf50(3,4));
console.log(checkIf50(40,10));
console.log(checkIf50(50,0));

//or equivalent
function checkNums (num1,num2){
return (num1==50 || num2==50 || num1+num2==50);
}
console.log(checkNums(3,4));
console.log(checkNums(40,10));
console.log(checkNums(50,0));

//or equivalent:
function checkNumbers(num1,num2) {
   let result = (num1 === 50 || num2 === 50) ? true
   : (num1+ num2 === 50) ? true : false

return result;
}
console.log(checkNumbers(3,4));
console.log(checkNumbers(40,10));
console.log(checkNumbers(50,0));

// compute sum of array of 3 elements in it
function sumArr(...values){
return values.reduce((prev,curr) => {
   return prev+curr;
});
}
console.log(sumArr(1,2,3)) // tikai k a inouts izskat as iet vnk skaitli nevis array?

//or equivalent 

var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
   return a + b;
}

console.log(sum);

// checks if 2 numbers are the same then returns tripple sum if the numbers
function checkIfNumsAreEqual (num1, num2) {
   if (num1==num2 ) {
      return 3*(num1+num2);
   } return num1+num2
};

console.log(checkIfNumsAreEqual(4,4));
console.log(checkIfNumsAreEqual(4,44));

// create a new array, taking  1st and last element from a given array
function newArr(arr){
  if (arr.length===0) {
   console.log ('Illegal array length');
   return;
}
var firstElem=arr[0];
var lastElem=arr[arr.length-1];
var newArray = [];
newArray.push(firstElem);
if (arr.length>1) {
   newArray.push(lastElem)
}
return newArray;
}

// function to find how many equal elements are there (not to find those)
function test_same_elements_both_arrays(arra1, arra2) {
   var equalCounter = 0;
   for (var i = 0; i < arra1.length; i++) {
       for (var j = 0; j < arra2.length; j++) {
           if (arra1[i] === arra2[j]) {
            equalCounter++;
           }
       }
   }
   return equalCounter;
}
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44]));

// or 

let firtsArray = [0,3,4,5];
let secondArray = [1,3,4,5];

function compare(arr1,arr2){
   let sameNumbers = 0;
   arr1.forEach((e1)=>arr2.forEach((e2)=>
   {if (e1 === e2){
        sameNumbers++;
      //   console.log(e1 + " = " + e2);
   }
}));
console.log(" Total: ", sameNumbers)
}

compare(firtsArray,secondArray);





