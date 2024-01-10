//Global execution context
var n=6;

function square(num){
  var ans = num * num;
  return ans;
}

//square6 execution context
var square6 = square(n);
console.log(square6);

//square5 execution context
var square5 = square(5);
console.log(square5);