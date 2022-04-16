// Input Funciton
var input = prompt;

//  Print funciton
var print = console.log;

// integer function
function int(param) {
  /** funciton int as in python **/
  return parseInt(param);
}

// float function
function float(param) {
  /** funciton float as in python **/
  return parseFloat(param);
}

// String function
function str(param) {
  /** funciton float as in python **/
  return param.toString();
}

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

// Lenth function
function len(param) {
  return param.length;
}

// Round function
function round(param) {
  return Math.round(param)
}

// Max function
function max(inputs) {
  var maxValue = inputs[0];
  for (var i = 0; i <= inputs.length; i++) {
    if (inputs[i] > maxValue) {
      maxValue = inputs[i];
    }
  }
  return maxValue;
}

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

// function sum
function sum(inputs) {
  var sumValue = 0;
  for (var i = 0; i < inputs.length; i++) {
    sumValue = sumValue + inputs[i];
  }
  return sumValue;
}

// sorted funciton
function sorted(param) {
  return param.split('').sort()
}

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

// power of
function pow(power, exp) {
  return Math.pow(power, exp);
}

// abs
function abs(param) {
  return Math.abs(param);
}