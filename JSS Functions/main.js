// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(firstNumber, secondNumber){

    if (firstNumber > secondNumber){
    	console.log(firstNumber + " is greater than " + secondNumber);
    	return firstNumber;
    } else {
    	console.log(firstNumber + " is less than " + secondNumber);
    	return secondNumber;
    }
    
}

let big = max(15,10);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(firstNumber, secondNumber, thirdNumber){
	return max(max(firstNumber, secondNumber), thirdNumber);

    // if (firstNumber > secondNumber && firstNumber > thirdNumber){
    // 	console.log(firstNumber);
    // } else if (secondNumber > firstNumber && secondNumber > thirdNumber){
    // 	console.log(secondNumber);
    // } else if (thirdNumber > firstNumber && thirdNumber > secondNumber){
    // 	console.log(thirdNumber);
    // }
    // return;
}

maxOfThree(20,15,18);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(x){
	if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
		console.log("true");
		
	} else {
		console.log("false");
		
	}
   
}

isVowel("a");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(firstNumber, secondNumber){
	return firstNumber + secondNumber;
}

sum(10,5);



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(firstNumber, secondNumber, thirdNumber){
	return ((firstNumber + secondNumber + thirdNumber) / 3);
}

avg(5,10,15);



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string){
	return (string.length);
}

getLength("string");



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (firstNumber, secondNumber){
	return firstNumber < secondNumber;
}
greaterThan(4,8);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
	return ("Hello," + name + "!");
}

greet("Savannah");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1, word2, word3, word4){
	return ("Big" + word1 + "and a fast" + word2 + "up the" + word3 + "and into the" + word4 + "we go.");
}

madlib("house", "car", "hill", "woods");




