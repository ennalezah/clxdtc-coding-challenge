/********** 

- This program should run from the command line, using NodeJs 
- The program should print the numbers 1 to 100
- Multiple of 3, print "CLX" instead of the number
- Multiple of 5, print "DTC"
- Multiple of 3 and 5, print "CLXDTC" 

Example Output:

1
2
CLX
4
DTC
CLX
7
8
CLX
DTC
11
CLX
13
14
CLXDTC

**********/

// console.log("Connected!")

const multipleOf3 = (num) => num % 3 === 0;
const multipleOf5 = (num) => num % 5 === 0;

function replaceNums(start, end) {
	let i = start;

	while (i <= end) {
		switch (true) {
			case multipleOf3(i) && multipleOf5(i):
				console.log('CLXDTC');
				break;

			case multipleOf3(i):
				console.log('CLX');
				break;

			case multipleOf5(i):
				console.log('DTC');
				break;

			default:
				console.log(i);
		}

		i++;
	}
}

// console.time('replaceNums');
replaceNums(1, 100);
// console.timeEnd('replaceNums');




/**********
 
function replaceNumsArr(maxLength) {
	// creates new instance of Array from an array-like (length property / indexed elems) or iterable obj (strings, other arrays)
	// v (value) is undefined because array was created from "nothing"
	const numbers = Array.from({ length: maxLength }, (v, i) => i + 1);

	for (const num of numbers) {
		switch (true) {
			case multipleOf3(num) && multipleOf5(num):
				console.log('CLXDTC');
				break;

			case multipleOf3(num):
				console.log('CLX');
				break;

			case multipleOf5(num):
				console.log('DTC');
				break;

			default:
				console.log(num);
		}
	}
}

console.time('replaceNumsArr');
replaceNumsArr(100);
console.timeEnd('replaceNumsArr');

**********/
