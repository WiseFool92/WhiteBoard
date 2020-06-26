// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%Jones"


Repeat: 
  // We want to write an algorithm that removes any whitespace from a string
Examples: 
  // Input - Frank the Bulldog is a party animal.
  // Output - Frank%20the%20Bulldog%20is%20a%20party%20animal.
Approach: 
  // I am thinking that I could use a split() and then a join(). It wont be as fast as a RegEx but that is okay.
  // We take our string split it, this automatically puts it into an array
  // We iterate through removing spaces
  // We use join() to replace those spaces with %20
  // return the joined string
  Iteratively:
    // string frank = "Frank the Bulldog is a party animal."
    // frank.split(' ').join('%20');
    // return string frank
  Recursively:
    //
Code:
  WithoutRecursion:
let frank = "Frank the Bulldog is a party animal.";
frank.split(' ').join('%20');
console.log(frank.split(' ').join('%20'));
return frank;
  WithRecursion:
  // I am unsure
Test:
  // Vocally run an example through
Optimize:
  // WithoutRecursion:
  // Use replace() w/RegEx
  // let frank = "Frank the Bulldog is a party animal.";
  // frank.replace( /\s/g, '%20') );
  // console.log(frank.replace( /\s/g, '%20') ));
  // return frank;











// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi", 7, 53]

Output: [7, 9, "hi", 12, 53]


Repeat:
  // We want to clean up an array so that no key value pairs are repeated
Examples:
  // Input [frog, dragon, duck, duck, goose, dragon]
  // OutPut [frog, dragon, duck, goose]
Approach:
  WithRecursion:
    // I am thinking that the best way to do this would be to use a recursive function that iterates through the array crosschecking key value pairs
    // I am not sure how to code it but imagine something like this:
    // You select the first key value pair of the array and iterate through the array crosschecking it against everyother pair removing any duplications
  WithoutRecursion:
    // You can use a foreach loop to iterate through the array twice to compare the key value pairs and remove any duplicates
Code:
  WithoutFilter: WithoutRecursion:
    // solving with the underscore lib extention for javascript
    // npm install underscore
    // this method comes from a specialized lib extention for javascript which produces a duplicate-free version of the array. I don't know if it uses recursion. If the second parameter is passed as true it will also sort it. I believe it sorts Alphabetically and numerically but I would have to double check on that
let arr = [7, 9, "hi", 12, "hi", 7, 53];
_.uniq(arr, false);
return arr;

WithoutFilter: WithoutRecursion:
// Foreach loop example
  let arr = [7, 9, "hi", 12, "hi", 7, 53];
  function removeDup(newArray) {
    let secondArray = [];
    newArray.forEach(element => {
      if (!secondArray.includes(element)) {
        secondArray.push(element)
      }
    });
    return secondArray;
  }
  console.log(secondArray);

  WithoutFilter: WithRecursion:
    // You select the first key value pair of the array and iterate through the array crosschecking it against everyother pair removing any duplications

Test:
  // Vocally run and example through
Optimize:
  WithFilter: WithoutRecursion:
let arr = [7, 9, "hi", 12, "hi", 7, 53];
function removeDup(newArray) {
  return newArray.filter((value, index) => newArray.indexOf(value) == index);
}
console.log(removeDup(newArray));











// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

Repeat:
Examples:
Approach:
Code:
Test:
Optimize:











// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

Repeat:
Examples:
Approach:
Code:
Test:
Optimize:











// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]


Repeat:
Examples:
Approach:
Code:
Test:
Optimize: