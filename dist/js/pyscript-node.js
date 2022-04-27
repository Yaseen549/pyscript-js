// Input Funciton - deprecated
// var input = prompt;
// exports.input = input;

//  Print funciton
var print = console.log;
exports.print = print;

// String.prototype.upper = function(){
//   return this.toUpperCase();
// }
// exports.upper = String.prototype.upper;


// integer function
exports.int = function(param) {
  /** funciton int as in python **/
  return parseInt(param);
}
// exports.int = int;

// float function
function float(param) {
  /** funciton float as in python **/
  return parseFloat(param);
}
exports.float = float;

// String function
function str(param) {
  /** funciton float as in python **/
  return param.toString();
}
exports.str = str;

// character function
function chr(value) {
  if (typeof(value) == typeof(Object())) {
    arrayValue = []
    for (var i = 0; i <= value.length - 1; i++) {
      value1 = value[i]
      arrayValue.push(String.fromCharCode(value1));
    }
    return arrayValue;
  } else {
    return String.fromCharCode(value);
  }
}
exports.chr = chr;

// ascii Function
function ascii(value){
  return value.charCodeAt();
}
exports.ascii = ascii;

// hexa value function
function hex(value){
  return "0x" + value.toString(16);
}
exports.hex = hex;

// Lenth function
function len(param) {
  return param.length;
}
exports.len = len;

// Round function
function round(param) {
  return Math.round(param)
}
exports.round = round;

// Max function
function max(inputs) {
  var maxValue = 0;
  for (var i = 0; i <= inputs.length; i++) {
    if (inputs[i] > maxValue) {
      maxValue = inputs[i];
    }
  }
  return maxValue;
}
exports.max = max;

// Min function
function min(inputs) {
  minValue = inputs[0]
  for (var i = 0; i <= inputs.length; i++) {
    if (inputs[i] < minValue) {
      minValue = inputs[i];
    }
  }
  return minValue;
}
exports.min = min;

// sum function
function sum(inputs) {
  var sumValue = 0;
  for (var i = 0; i < inputs.length; i++) {
    sumValue = sumValue + inputs[i];
  }
  return sumValue;
}
exports.sum = sum;

// sorted funciton
function sorted(param) {
  return param.split('').sort()
}
exports.sorted = sorted;

// type Function
function type(param) {
  if (typeof(param) === typeof(Number())) {
    return "int";
  } else if (typeof(param) === typeof(String())) {
    return "str";
  } else {
    return typeof(param);
  }
}
exports.type = type;

// power of function
function pow(power, exp) {
  return Math.pow(power, exp);
}
exports.pow = pow;

// absolute function
function abs(param) {
  return Math.abs(param);
}
exports.abs = abs;

// Python Random function
class random {
  static randInt(v1, v2) {
    return Math.round(Math.random(v1,v2)*(v2));
  }
  static choice(a){
    var randomNumber = Math.round(Math.random(0,a.length)*(a.length - 1));
    var randomElement = a[randomNumber]
    return randomElement;
  }
}
exports.random = random;



// var lowr = String.prototype.lower = function(){
//   return this.toLowerCase();
// }
// exports.lowr = lowr