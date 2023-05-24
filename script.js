// let mapping ={
// 	"2" : "abc",
// 	"3" : "def",
// 	"4" : "ghi",
// 	"5" : "jkl",
// 	"6" : "mno",
// 	"7" : "pqrs",
// 	"8" : "tuv",
// 	"9" : "wxyz"
// }
// let result = [];
// let searchString = "23"
// function letterCombinations(index, calculatedStr){

// 	 if(index >= searchString.length){
// 		 result.push(calculatedStr);
// 	 }
// 	let currStr = mapping[searchString[index]];// mapping["2"] => "abc"
// 	for(let i=0; i<currStr.length; i++){
// 		solve(index+1, calculatedStr + currStr[i])
// 	}
	
// }
// letterCombinations(0, "");

// // function letterCombinations(input_digit) {
// //   //Complete the function
// // }

// module.exports = letterCombinations;


let com=[0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];


function f(ques,comb,res){

    if(ques.length==0){
      res.push(comb);
      return;
    }
   
    let dig=parseInt(ques[0]);
    let curStr=com[dig];

    for(let i=0;i<curStr.length;i++){
        let curChar=curStr[i];
        f(ques.substring(1),comb+curChar,res);
    }
}

function letterCombinations(input_digit) {
  //Complete the function
	let res=[];
f(input_digit,"",res);
return res;
}

module.exports = letterCombinations;
