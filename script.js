"use strict";
  // SET - 1 

1. /*Write a program to find the second largest element in an array of integers.*/  

const arr = [5, 2, 8, 10, 3];
const secondLargestElement = findSecondLargest(arr);

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
console.log("The second largest element is:", secondLargestElement);


/*2.Given an array and an integer k, write a program to rotate the array k times to the right. */

const arr1 = [1, 2, 3, 4, 5]; 
const k = 2; 
const rotatedArray = rotateArrayRight(arr1, k); 

function rotateArrayRight(arr1, k) {
  const n = arr1.length;
  if (n === 0 || k === 0) {
    return arr1;
  }

  k = k % n;
  while (k > 0) {
    const lastElement = arr1.pop();
    arr1.unshift(lastElement); 
    k--;
  }
  return arr1;
}

console.log("Rotated array:", rotatedArray);


/*3.Write a program to split an array into chunks of a given size and return a new array of arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; */ 

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; 
const chunkSize = 3; 

const chunkedArray = splitIntoChunks(arr2, chunkSize);

function splitIntoChunks(arr2, chunkSize) {
  const result = [];
  const n = arr2.length;

  for (let i = 0; i < n; i += chunkSize) {
    const chunk = arr2.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

console.log("Chunked array:", chunkedArray);


// 4.Write a program to find all Pythagorean triplets (a, b, c) in an array of positive integers, where a^2 + b^2 = c^2. 

const arr3 = [3, 5, 12, 13, 9, 4, 7, 15]; 

const pythagoreanTriplets = findPythagoreanTriplets(arr3);

function findPythagoreanTriplets(arr3) {
  const triplets = [];

  function isPythagoreanTriplet(a, b, c) {
    return a * a + b * b === c * c;
  }

  const n = arr3.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const a = arr3[i];
        const b = arr3[j];
        const c = arr3[k];
        if (isPythagoreanTriplet(a, b, c)) {
          triplets.push([a, b, c]);
        }
      }
    }
  }

  return triplets;
}

console.log("Pythagorean Triplets:", pythagoreanTriplets);


// 5.Write a program that takes a sorted array of numbers and a lower and upper bound, and returns the missing ranges within the bound. 

const arr4 = [0, 1, 3, 50, 75]; 
const lower = 0; 
const upper = 99; 

const missingRanges = findMissingRanges(arr4, lower, upper);

function findMissingRanges(arr4, lower, upper) {
  const missingRanges = [];

  function addRange(start, end) {
    if (start === end) {
      missingRanges.push(`${start}`);
    } else {
      missingRanges.push(`${start} -> ${end}`);
    }
  }
  if (arr4.length === 0) {
    addRange(lower, upper);
    return missingRanges;
  }
  if (arr4[0] > lower) {
    addRange(lower, arr4[0] - 1);
  }
  for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] - arr4[i - 1] > 1) {
      addRange(arr4[i - 1] + 1, arr4[i] - 1);
    }
  }
  if (arr4[arr4.length - 1] < upper) {
    addRange(arr4[arr4.length - 1] + 1, upper);
  }

  return missingRanges;
}

console.log("Missing Ranges:", missingRanges);


// 6.Write a program that takes an array and returns an array where each element is replaced with the next greater element. If there is no greater element, replace it with -1. 

const arr5 = [4, 5, 2, 25, 8]; 

const resultArray = nextGreaterElements(arr5);

function nextGreaterElements(arr5) {
  const result = new Array(arr5.length).fill(-1);
  const stack = []; 

  for (let i = 0; i < arr5.length; i++) {
    while (stack.length > 0 && arr5[i] > arr5[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      result[topIndex] = arr5[i];
    }
    stack.push(i);
  }

  return result;
}

console.log("Result Array:", resultArray);

// 7.Write a program that takes a date as input and returns the day of the week (e.g., Monday, Tuesday, etc.). 

const date = new Date('2023-07-26'); 
const dayOfWeek = getDayOfWeek(date);

function getDayOfWeek(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}


console.log("Day of the week:", dayOfWeek);


// 8.Write a program that takes a time in 12-hour format (e.g., "03:45 PM") as input and converts it to 24-hour format (e.g., "15:45"). 

const time12Hour = "03:45 PM"; 

const time24Hour = convertTo24HourFormat(time12Hour);

function convertTo24HourFormat(time12Hour) {
  const [time, period] = time12Hour.split(' ');
  const [hour, minute] = time.split(':');

  let hour24Format = parseInt(hour, 10);

  if (period === 'PM' && hour24Format < 12) {
    hour24Format += 12;
  } else if (period === 'AM' && hour24Format === 12) {
    hour24Format = 0;
  }
  const hour24FormatString = hour24Format.toString().padStart(2, '0');

  return `${hour24FormatString}:${minute}`;
}

console.log("Time in 24-hour format:", time24Hour);


// 9.Write a program that takes a string and finds the longest palindromic substring within it. 

const str = "babad"; 

const longestPalindrome = longestPalindromeSubstring(str);

function expandAroundCenter(s, left, right) {
  const n = s.length;
  while (left >= 0 && right < n && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

function longestPalindromeSubstring(str) {
  const n = str.length;
  if (n === 0) return '';

  let longestPalindrome = '';

  for (let i = 0; i < n; i++) {
    const palindrome1 = expandAroundCenter(str, i, i); 
    const palindrome2 = expandAroundCenter(str, i, i + 1);
    const currentLongest = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

    if (currentLongest.length > longestPalindrome.length) {
      longestPalindrome = currentLongest;
    }
  }

  return longestPalindrome;
}
console.log("Longest palindromic substring:", longestPalindrome)

/*10.Write a program that takes an encoded string and returns the decoded string based on the following 
rules: The encoding pattern is count[encoded_string]. 
You may assume that the input string is always valid. */

