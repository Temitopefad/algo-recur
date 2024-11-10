// IF ELSE

//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not.
 //Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

//  function leapyear(year) {
//     if (year% 4 ===0) {
//         if (year % 100 === 0) {
//             if (year% 400 === 0) {
//                 return true;
//             } else { 
//                 return false // not a leap year
                
//             }
            
//         } else { 
//             return true // leap year
            
//         }
        
//     } else {
//         return false // not a leap year
        
//     }
    
//  }
//  console.log(leapyear(2023))

 // Ticket Pricing: Write a program that prompts the user to enter their age and then determines
 // the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

// function movieticket(age) {
//     if ((age <= 12)) {
//         return "$10";
//     } else { 
//         if (age >= 13 && age <= 17) {
//              return "$15";
//         } else {
//             return "$20";
//         }
        
//     }
// }
// console.log(movieticket(19))

// RECURSIVE

//function isPalindrome(str) {
    // Step 1: Clean the string
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");  // Remove non-alphanumeric characters

//     // Step 2: Define the recursive function
//     function checkPalindrome(left, right) {
//         // Base case: if we've reached the middle, it's a palindrome
//         if (left >= right) {
//             return true;
//         }
//         // Check if the characters at the current positions are the same
//         if (cleanStr[left] !== cleanStr[right]) {
//             return false;
//         }
//         // Move towards the middle
//         return checkPalindrome(left + 1, right - 1);
//     }

//     // Start recursion from the first and last characters
//     return checkPalindrome(0, cleanStr.length - 1);
// }



// console.log(isPalindrome("racecar")); //  true
// console.log(isPalindrome("hello")); // false

//Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
   // Base case: any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply base by the result of base^(exponent - 1)
    return base * power(base, exponent - 1);
}

