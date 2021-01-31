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

console.time('replaceNums');
replaceNums(1, 100);
console.timeEnd('replaceNums');


console.time('Solution #2');

const nums = Array.from({ length: 100 }, (v, i) => i + 1);
// console.log(nums);

for (const val of nums) {
	switch (true) {
		case multipleOf3(val) && multipleOf5(val):
			console.log('CLXDTC');
			break;

		case multipleOf3(val):
			console.log('CLX');
			break;

		case multipleOf5(val):
			console.log('DTC');
			break;

		default:
			console.log(val);
	}
}
console.timeEnd('Solution #2');
