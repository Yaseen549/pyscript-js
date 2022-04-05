a = [1,2,3]
a.slice(0,1)

a.length

b = "hello"
b.toUpperCase();

var arrayList = [1,2,3,4,5];
arrayList.includes(1)

document.getElementsByTagName();
document.getElementsByClassName();
document.getElementById();
document.querySelector(".className" or "#id" or "tagname");

document.querySelector("li a");
document.querySelector("."+key).classList;

document.querySelectorAll("#list .item");

document.getAttribute("");
document.setAttribute("");


// anonymous function
document.querySelectorAll(".drum").addEventListener("click", function(){
  console.log(this);
  console.log(this.innerHTML);
}

document.addEventListener("keydown",function(event){
  // console.log(event.key);
  keyName  = event.key;
  makeSound(keyName)
});

// this keyword
funciton BellBoy(name, age, hasWorkpermit){
  this.name = name;
  this.age = age;
  this.hasWorkpermit = hasWorkpermit;
}

var bellboy1 = new BellBoy("bell boy", 25, true);
var bellboy2 = new BellBoy("bell boy 2", 26, true);







// understand add event addEventListener
function newAddEventLlistner(typeofEvent, callback){
    //  Detect Event code
    var eventThatHappened = {
      eventType : "keypressingdown",
      key: "e",
      durationOfKeypress: 2
    }

    if(eventThatHappened.eventType === typeofEvent){
      callback(eventThatHappened);
    }
}

newAddEventLlistner("keypressingdown", function(userVariable){
  console.log(userVariable);
});


document.addEventListener("keydown",function(e){
  console.log(e);
})
