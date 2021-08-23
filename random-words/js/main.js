"use strict";
/* ==============================================
     Main
     Made by: David Santana
============================================== */

const word = document.getElementById("word")
const words = ["Car", "House", "Airplane", "Computer", "Island", "Suit", "Cat", "Dog",
               "Powerlifter", "Bird", "Butterfly"]
var used = []

/* ==============================================
     Add Event Listener
============================================== */
document.getElementById("new-word").addEventListener( "click", function(){ 
     generateNewWord(); 
} );
/* ==============================================
     Generate New Word
============================================== */
function generateNewWord() {
     let index = Math.floor(Math.random() * words.length);
     let value = words[index];
     
     while (used.includes(value)) {
          generateNewWord();
     }

     used.push(value);
     word.innerHTML = value;
}