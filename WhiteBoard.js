// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%Jones"


Repeat: 
  // We want to write an algorithm that removes any whitespace from a string

Examples: 
  Input: // Frank the Bulldog is a party animal.
  Output: // Frank%20the%20Bulldog%20is%20a%20party%20animal.

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
  function getString(o) {

    function iter(o, path) {
        if (Array.isArray(o)) {
            o.forEach(function (a) {
                iter(a, path + '[]');
            });
            return;
        }
        if (o !== null && typeof o === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], path + '[' + k + ']');
            });
            return;
        }
        data.push(path + '=' + o);
    }

    var data = [];
    Object.keys(o).forEach(function (k) {
        iter(o[k], k);
    });
    return data.join('&');
}

var data1 = { filter: { dir: 184 }, b: 'a' },
    data2 = { filter: [1, 2, 3], b: 'a' },
    data3 = { filter: [1, 2, 3], b: 'a', c: { d: { e: 42 } } };

console.log(getString(data1));
console.log(getString(data2));
console.log(getString(data3));

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
  Input: [frog, dragon, duck, duck, goose, dragon]
  OutPut: [frog, dragon, duck, goose]

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

  WithRecursion: C# ?
    // You select the first key value pair of the array and iterate through the array crosschecking it against everyother pair removing any duplications
    public static void removeDuplicates(ArrayList<Integer> list, int counter){


      if(list == null){
          throw new NullPointerException();
      }

      if(counter < list.size()){
          if(list.contains(list.get(counter))){
              if(list.lastIndexOf(list.get(counter))!=counter)
              {
                  list.remove(list.lastIndexOf(list.get(counter)));
                  counter--;
              }
          }
          removeDuplicates(list, ++counter);
      }

  }

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

ClarifyingQuestions: // Will we always be recieving a string with letters? 

Repeat:
  // We want to take a string and condense repeated characters. Then display the string with the characters numerical value in front of that character.
Examples:
  Input: "aaaabbc"
  Output: "a4b2c1"

Approach:
  // create a string
  // Iterate over the string
  // Compare current and next characters
  // If characters are the same, increment counter and concatenate

Code:
WithIteration:
// To deal with edge cases and false inputs
  function stringCompression (str) {
    if (str.length == 0) {
      console.log('Please enter valid string.');
      return;
    }
// To deal with edge cases and false inputs

    let output = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }

stringCompression(''); //Please enter valid string.
stringCompression('aaaa'); //a4
stringCompression('aaaabbc'); //a4b2c1
stringCompression('aaaabbcaabb'); //a4b2c1a2b2

// Another example https://kevhuang.com/string-compression-and-concatenation-performance/
var compressedString = function(str) {  
  if (str.length < 3) return str;

  var compressedStr = '';
  var prevChar = str.charAt(0);
  var count = 1;

  for (var i = 1; i < str.length; i++) {
    if (str[i] !== prevChar) {
      compressedStr += prevChar + count;
      prevChar = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  compressedStr += prevChar + count;

  return compressedStr.length >= str.length ? str : compressedStr;
};
// If you have a large string and time is important, then a data structure like a StringBuffer would give you O(n) time. In a nutshell, a StringBuffer is an array that progressively collects each character of a string, and then at the end, it joins all the characters as a string. Thus, the concatenation only happens once at the very end instead of each time a new character is added. That does mean you end up with O(n) space though.

WithRecursion:

Test:
  // Vocally run an example through

Optimize:











// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

Repeat:
  // Efficiently check that all characters in a string are unique without using data structures
  // strings only contain a-z characters

Example:

  Input: "asdsafsadsafdsa"
  Output: "false"

  Input: "abcd"
  Output: "True"

Approach:
  // Input is a string
  // Output is a bool
  // For loop with iteration over each character in the string
  // Cross checking each character after it for unquiness
  // Returns true if all characters in the string are unique
  // Else false

Code:
WithIteration:
function isStringUnique(str) {
  let i;
  let character;
  
  // To deal with edge cases
  if (str.length > 127) {
    return false;
  }
  // Is the input string ASCII or Unicode ? If ASCII then we need storage size of 128 bits

  for (i = 0; i < str.length; i++) {
    character = str[i];
    if (str.indexOf(character, i + 1) > -1) {
      return false;
    }
  }
  return true;
}
console.log(isStringUnique('wise')); // true
console.log(isStringUnique('fool')); // false

WithRecursion:

Test:
  // Vocally iterate through code
  // wise
  // fool

Optimize:

// Use an object for faster results
// Object can have one or multiple properties
// Each property has a property key and its associated value
function is_unique(str) {
  let obj = {};
  for(let z = 0; z < str.length; ++z) {
    let character = str[z];
    if(obj[character]) 
    return false; 
    else obj[character] = true;
  }
  return true;
}
// test:
console.log(is_unique("abcdefgh")); // true
console.log(is_unique("aa")); // false











// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]


Repeat:
  // Sort an array of only numbers without using a direct comparision? 
  // No special characters

Examples:

  Input:  [75, 8, 250, 0, 20]
  Output: [0, 8, 20, 75, 250]

Approach:

  // without the ability to use the classic sort() I think the next "best" or simplest appraoch would be to use bubble sort
  // bubble sort works by repeatedly stepping through the array and swapping elements that are out of order
  // you move from an unsorted list to a sorted list
  // current always starts at index zero and then compares itself to the next element
  // if the next element is less than the current then current swaps places with the next element

Code:
WithIteration:
let numbers = [75, 8, 250, 0, 20];

function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
bubbleSort(numbers);
console.log(numbers);
Output: [0, 8, 20, 75, 250]



WithRecursion: In C#
// Base Case: If array size is 1, return.
// Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
// Recur for all elements except last of current subarray.

static void bubbleSort(int []arr, int n) 
{ 
// Base case 
if (n == 1) 
return; 

// One pass of bubble  
// sort. After this pass, 
// the largest element 
// is moved (or bubbled)  
// to end. 
for (int i = 0; i < n - 1; i++) 
if (arr[i] > arr[i + 1]) 
{ 
// swap arr[i], arr[i+1] 
int temp = arr[i]; 
arr[i] = arr[i + 1]; 
arr[i + 1] = temp; 
} 

// Largest element is fixed, 
// recur for remaining array 
bubbleSort(arr, n - 1); 
} 

// Driver code 
static void Main() 
{ 
    int []arr = {64, 34, 25, 12, 22, 11, 90}; 
  
    bubbleSort(arr, arr.Length); 
      
    Console.WriteLine("Sorted array : "); 
    for(int i = 0; i < arr.Length; i++) 
    Console.Write(arr[i] + " "); 
} 

Test:
  // Vocally walk through the code with an input

Optimize:

// Before enter the inner loop, create a boolean to check if a swap occured inside the inner loop. When the there is no swap the array is sorted. 