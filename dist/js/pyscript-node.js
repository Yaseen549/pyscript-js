// Input Funciton
var input = prompt;

//  Print funciton
var print = console.log;
exports.print = print;

// Number function
function number(param) {
  /** funciton int as in python **/
  return parseInt(param);
}
exports.number = number;

// integer function
function int(param) {
  /** funciton int as in python **/
  return parseInt(param);
}
exports.int = int;

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

// function sum
function sum(inputs) {
  var sumValue = 0;
  for (var i = 0; i < inputs.length; i++) {
    sumValue = sumValue + inputs[i];
  }
  return sumValue;
}
exports.sum = sum;

// alert Function
function popup(param) {
  alert(param);
}
exports.popup = popup;

// sorted funciton
function sorted(param) {
  return param.split('').sort()
}
exports.sorted = sorted;

// type Function
function type(param) {
  if (typeof(param) === typeof(1)) {
    return "int";
  } else if (typeof(param) === typeof("string")) {
    return "str";
  } else {
    return typeof(param);
  }
}
exports.type = type;
// power of
function pow(power, exp) {
  return Math.pow(power, exp);
}
exports.pow = pow;

// abs
function abs(param) {
  return Math.abs(param);
}
exports.abs = abs;