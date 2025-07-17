/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.*/
console.log("Activity 1");
let inputString = "Learning JavaScript is fun";
let hasJavaScript = inputString.includes("JavaScript");
console.log(hasJavaScript);
let codingPosition = inputString.indexOf("fun");
console.log(codingPosition);

/*Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.*/
console.log("Activity 2");
let newString = " CODE BOOTCAMP ";
let lowercaseString = newString.toLowerCase().trim();
console.log(lowercaseString);
let replacedString= lowercaseString.replace("bootcamp","javascript");
console.log(replacedString);


/*Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.*/
console.log("Activity 3");
let newSentence = "Coding is fun and educational";
let wordsArray = newSentence.split(" ");
console.log(wordsArray);



/*Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.*/

console.log("Activity 4");
let oldCharacter = "Bootcamp";
let firstCharacter = oldCharacter.charAt(0);
console.log(firstCharacter);
let extractedBootcamp = oldCharacter.slice(4);
console.log(extractedBootcamp);





/*Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
//let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";


//Advanced Challenge
//Write a program to process the following string:
//Customer: John Doe
//Order: Apple, Banana, Grape
//Total: $20.50
//Extract the customer name.
//Split the order into an array of items.
//Convert the total price to uppercase (e.g., "TOTAL: $20.50").
console.log("Advanced Challenge");
let string = "Customer: John Doe Order: Apple, Banana, Grape Total: $20.50 "
let customerName = string.slice(10, 18);
console.log(`Extracted customer name: ${customerName}`);
let items = string.slice(26,46 ).split(",");
console.log(items);
let total = string.slice(47).toUpperCase();
console.log(total);

/*Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/
console.log("Tasks:")
let inputString1 = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let hasJavaScript1 = inputString1.includes("JavaScript");
console.log(hasJavaScript1);
let codingPosition1 = inputString1.indexOf("Coding");
console.log(codingPosition1);
let startsWithWelcome = inputString1.startsWith("Welcome");
console.log(startsWithWelcome);
let endsWithToday= inputString1.endsWith("today.");
console.log(endsWithToday);
let lowercaseString1= inputString1.toLowerCase();
console.log(lowercaseString1);
let uppercaseString = inputString1.toUpperCase();
console.log(uppercaseString);
let trimmedString = inputString1.trim();
console.log(trimmedString);
let replacedString1 = inputString1.replace("JavaScript", "coding");
console.log(replacedString1);
let wordsArray1 = inputString1.split(" ");
console.log(wordsArray1);
let firstCharacter1 = inputString1.trim().charAt(0);
console.log(firstCharacter1);
let extractedBootcamp1= inputString1.slice(24,32);
console.log(extractedBootcamp1);




/*1. Searching
let hasJavaScript; // Your code here
let codingPosition; // Your code here
let startsWithWelcome; // Your code here
let endsWithToday; // Your code here

// 2. Transforming
let lowercaseString; // Your code here
let uppercaseString; // Your code here
let trimmedString; // Your code here
let replacedString; // Your code here

// 3. Breaking Apart
let wordsArray; // Your code here

// 4. Retrieving
let firstCharacter; // Your code here
let extractedBootcamp; // Your code here

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});/** */
