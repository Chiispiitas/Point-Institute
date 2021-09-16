"use strict";
/* ==============================================
     Main
     Made by: David Santana
============================================== */

const question = document.getElementById("question")
var used = []

/* ==============================================
     Add Event Listener
============================================== */
document.getElementById("next-question").addEventListener( "click", function(){ 
     generateNextQuestion(); 
} );
/* ==============================================
     Generate Next Question
============================================== */
function generateNextQuestion() {
     let index = Math.floor(Math.random() * questions.length);
     let value = questions[index];
     
     if (used.includes(value)) {
          if (used.length == words.length) { used = []; }
          generateNextQuestion();
     } else {
          used.push(value);
          question.innerHTML = value;
     }

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