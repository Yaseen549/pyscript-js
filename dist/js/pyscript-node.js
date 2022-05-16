// Input Funciton - deprecated
// var input = prompt;
// exports.input = input;

//  Print funciton
let print = console.log;
exports.print = print;

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
exports.type = type

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
  static randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static randrange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  static choice(a){
    var randomNumber = Math.round(Math.random(0,a.length)*(a.length - 1));
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
exports.random = random;

// dot functions
String.prototype.upper = function(){
  return this.toUpperCase();
}

String.prototype.lower = function(){
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


// sort(): Sorts the list in ascending order. | exist ---
// append(): Adds one element to a list.
Array.prototype.append = function(value) {
  return this.push(value);
}

// extend(): Adds multiple elements to a list.
Array.prototype.extend = function (value){
  return this.concat(value)
}

// index(): Returns the first appearance of a particular value.
String.prototype.index = function (value) {
  return this.indexOf(value);
}


Array.prototype.index = function (value) {
  return this.indexOf(value);
}

// insert(): Adds a component at the required position.
Array.prototype.insert = function ( index, item ) {
    return this.splice( index, 0, item );
};

// clear(): Removes all the elements from the list.
Array.prototype.clear = function() {
    this.splice(0, this.length);
};


// count(): Returns the number of elements with the required value.
// Object.defineProperties(Array.prototype, {
//     count: {
//         value: function(value) {
//             return this.filter(x => x==value).length;
//         }
//     }
// });
Array.prototype.count = function (value){
  return this.filter(x => x==value).length;
}


// pop(): Removes the element at the required position. | exist --
// remove(): Removes the primary item with the desired value.
Array.prototype.remove = function(value){
  let indexOfElem = this.indexOf(value);
  if (indexOfElem > -1) {
      this.splice(indexOfElem, 1);
  }
  return this;
}


// reverse(): Reverses the order of the list. | exist --
// copy():  Returns a duplicate of the list.
Array.prototype.copy = function (){
  return Array.from(this);
}


String.prototype.charList = function (){
  return Array.from(this);
}


String.prototype.wordList = function (){
  return this.split(' ');
}


