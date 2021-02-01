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
