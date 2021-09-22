"use strict";
/* ==============================================
     Database
     Made by: David Santana
============================================== */

var teamsHash = {};
var teamsArray = [];
var teamsCounter = 0;

/* ==============================================
     Team Class
============================================== */
function Team(name) {
     this.name = name;
     this.lives = 3;
}
/* ==============================================
     Teams Hash to Array
============================================== */
function teamsHashToArray() {
     for (let key in teamsHash) {
          teamsArray.push(new Team(teamsHash[key]));
     }
}
/* ==============================================
     Count Element In Array
============================================== */
function countArray(array, element) {
     var count = 0;
     for(var i = 0; i < array.length; ++i){
         if(array[i] == element)
             count++;
     }
     return count;
}