const { smallestPairSum } = require('./src/funcNo1');
const { countPalindromicSubstrings } = require('./src/funcNo2');
const { getCombinations } = require('./src/funcNo3');

// Answer number 1
const inputArray = [1, 4, 3, 2];
const result1 = smallestPairSum(inputArray);
console.log(`Answer no 1, Jumlah pasangan terkecil: ${result1}`);


// Answer number 2
const inputStr = "aaa";
console.log("Answer no 2, Kata Palindromik: ",countPalindromicSubstrings(inputStr)); 

// Answer number 3
const inputDigits = "23";
const output = getCombinations(inputDigits);
console.log("Answer no 3, Kombinasi angka ke huruf: ");
console.log(output);