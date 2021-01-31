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

let i = 1;
const n = 101;

const multipleOf3 = (num) => num % 3 === 0;
const multipleOf5 = (num) => num % 5 === 0;

while (i < n) {
	// if (multipleOf3(i) && multipleOf5(i)) {
	// 	console.log('CLXDTC');
	// } else if (multipleOf3(i)) {
	// 	console.log('CLX');
	// } else if (multipleOf5(i)) {
	// 	console.log('DTC');
	// } else {
	// 	console.log(i);
   // }
   
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
