// alert("Hello world!")

// Input Funciton
function input(text) {
  /** funciton input as in python **/
    inputText = prompt(text);
    return inputText;
    // prompt(text);
}
exports.input = input;

// Print Function
function print(params) {
  /** funciton print as in python **/
    console.log(params);
}
exports.print = print;

// Number Function
function number(params) {
  /** funciton int as in python **/
    return parseInt(params);
}
exports.number = number;

// alert Function
function popup(params){
  alert(params);
}
exports.popup = popup;

// alert Function
function type(params){
  return typeof(params);
}
exports.type = type;

function h1(params){
  return document.querySelectorAll("h1");
}
exports.h1 = h1;
