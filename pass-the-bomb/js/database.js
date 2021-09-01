"use strict";
/* ==============================================
     Database
     Made by: David Santana
============================================== */

var wordPool = dictionary;
var participantsHash = {};
var participantsArray = [];
var participantsCounter = 0;
var usedWords = [];
var memoLetters = "";

/* ==============================================
     Participant Class
============================================== */
function Participant(name) {
     this.name = name;
     this.lives = 3;
}   
/* ==============================================
     Participant Hash to Array
============================================== */
function participantHashToArray() {
     for (let key in participantsHash) {
          participantsArray.push(new Participant(participantsHash[key]));
     }
}
/* ==============================================
     Count Element In Array
============================================== */
function countElementIn(array, element) {
     var count = 0;
     for(var i = 0; i < array.length; ++i){
         if(array[i] == element)
             count++;
     }
     return count;
}