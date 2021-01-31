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
const n = 16;

const multipleOf3 = num => i % 3 === 0;

while (i < n) {
   if (multipleOf3(i) && i % 5===0) {
      console.log("CLXDTC")
   } else if(multipleOf3(i)) {
      console.log("CLX")
   } else if(i % 5 === 0) {
      console.log("DTC")
   } else {
      console.log(i)   
   }
   
   i++;
}