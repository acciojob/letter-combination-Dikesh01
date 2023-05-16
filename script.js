let mapping ={
	"2" : "abc",
	"3" : "def",
	"4" : "ghi",
	"5" : "jkl",
	"6" : "mno",
	"7" : "pqrs",
	"8" : "tuv",
	"9" : "wxyz"
}
let result = [];
let searchString = "23"
function letterCombinations(index, calculatedStr){

	 if(index >= searchString.length){
		 result.push(calculatedStr);
	 }
	let currStr = mapping[searchString[index]];// mapping["2"] => "abc"
	for(let i=0; i<currStr.length; i++){
		solve(index+1, calculatedStr + currStr[i])
	}
	
}
letterCombinations(0, "");

// function letterCombinations(input_digit) {
//   //Complete the function
// }

module.exports = letterCombinations;
