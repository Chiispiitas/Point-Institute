"use strict";

var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");
var answer5 = document.getElementById("a5");
var result1 = document.getElementById("r1");
var result2 = document.getElementById("r2");
var result3 = document.getElementById("r3");
var result4 = document.getElementById("r4");
var result5 = document.getElementById("r5");

/* ==============================================
     Add Event Listeners
============================================== */
document.getElementById("check-btn").addEventListener( "click", function(){ 
    check(); 
} );
document.getElementById("clear-btn").addEventListener( "click", function(){ 
    clear();  
} );

/* ==============================================
    Check.
============================================== */
function check() {
    result1.textContent = (answer1.textContent == "Sir or Madam" ? " ✅" : " ❌");
    result2.textContent = (answer2.textContent == "I am writing" ? " ✅" : " ❌");
    result3.textContent = ((answer3.textContent== "in regard to" || answer3.textContent.toLowerCase() == "with regard to") ? " ✅" : " ❌");
    result4.textContent = (answer4.textContent == "look forward" ? " ✅" : " ❌");
    result5.textContent = (answer5.textContent == "Best of" ? " ✅" : " ❌");
}

/* ==============================================
    Clear.
============================================== */
function clear() {
    answer1.textContent = ""
    answer2.textContent = ""
    answer3.textContent = ""
    answer4.textContent = ""
    answer5.textContent = ""
    result1.textContent = ""
    result2.textContent = ""
    result3.textContent = ""
    result4.textContent = ""
    result5.textContent = ""
}

/* ==============================================
    Create button ripple.
============================================== */
function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
        ripple.remove();
    }
  
    button.appendChild(circle);
}

/* ==============================================
    Add button click listener.
============================================== */
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}