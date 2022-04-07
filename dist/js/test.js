// print( ) function y
// type( ) function y
// input( ) function y
// abs( ) function y
// pow( ) function y
// dir( ) function
// sorted( ) function y
// max( ) function y
// round( ) function y
// divmod( ) function
// id( ) function
// ord( ) function
// len( ) function y
// sum( ) function y
// help( ) function

var print = console.log;


// var a = type(5);
// print("Hi" + "Hello" , 6+6, 5);
// // alert("hi");
// a = number("4");
// b = int("5");
// print(a+b)
// print(a);
// print(type(a), type(b));
// print(abs(-12.5))
// print(abs("Hello"))
// print(typeof("Astring"))
// print(Math.abs(6))
// function len(param){
//   return param.length;
// }
// print(len("5"))
//
// function round(param){
//   return Math.round(param)
// }

a = [1,2,3,6,5];
function max(inputs){
  var maxValue = 0;
  for (var i=0;i <=inputs.length; i++){
    if (inputs[i] > maxValue){
      maxValue = inputs[i];
    }
  }
  return maxValue;
}
print(max(a))

b = [5,6,6,3];
function sum(inputs){
  var sumValue = 0;
  for (var i=0;i <inputs.length; i++){
      sumValue = sumValue + inputs[i];
  }
  return sumValue;
}
print(sum(b))

function dare(){
  // Returns Null
  return null;
}




// document.querySelector("h1").innerHTML = 5;
