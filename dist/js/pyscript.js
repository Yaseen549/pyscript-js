// Input Funciton
var input = prompt;

//  Print funciton
let print = console.log;

// js print() function
function jsprint(){
  window.print();
}

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

// ascii Function
function ascii(value) {
  return value.charCodeAt();
}

// hexa value function
function hex(value) {
  return "0x" + value.toString(16);
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

// power of function
function pow(power, exp) {
  return Math.pow(power, exp);
}

// abs function
function abs(param) {
  return Math.abs(param);
}

// Python Random function
class random {
  static randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static randrange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  static choice(a) {
    var randomNumber = Math.round(Math.random(0, a.length) * (a.length - 1));
    var randomElement = a[randomNumber]
    return randomElement;
  }
  static shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}



// dot functions
String.prototype.upper = function() {
  return this.toUpperCase();
}
String.prototype.lower = function() {
  return this.toLowerCase();
}
String.prototype.title = function() {
  return this.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
