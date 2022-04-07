// Input Funciton
var input = prompt;

//  Print funciton
var print = console.log;

// Number function
function number(param) {
  /** funciton int as in python **/
    return parseInt(param);
}

// integer function
function int(param) {
  /** funciton int as in python **/
    return parseInt(param);
}

function float(param) {
  /** funciton float as in python **/
    return parseFloat(param);
}

// Lenth function
function len(param){
  return param.length;
}

// Round function
function round(param){
  return Math.round(param)
}

// Max function
function max(inputs){
  var maxValue = 0;
  for (var i=0;i <=inputs.length; i++){
    if (inputs[i] > maxValue){
      maxValue = inputs[i];
    }
  }
  return maxValue;
}

// function sum
function sum(inputs){
  var sumValue = 0;
  for (var i=0;i <inputs.length; i++){
      sumValue = sumValue + inputs[i];
  }
  return sumValue;
}

// alert Function
function popup(param){
  alert(param);
}

// sorted funciton
function sorted(param){
  return param.split('').sort()
}

// type Function
function type(param){
  if (typeof(param) === typeof(1)){
    return "<function 'int'>";
  }else if(typeof(param) === typeof("string")){
    return "<function 'str'>";
  }
  else{
    return "<function '"+typeof(param)+"'>";
  }
}

// power of
function pow(power, exp){
  return Math.pow(power, exp);
}

// abs
function abs(param){
  return Math.abs(param)
}
