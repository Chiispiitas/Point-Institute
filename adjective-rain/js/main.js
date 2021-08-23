"use strict";
/* ==============================================
     Main
     Made by: David Santana
============================================== */

const noun = "house."

var adjectiveString = "";
var adjectiveList = document.getElementById("adjectives");
var adjectiveInput = document.getElementById("input-adjective");
var result = document.getElementById("result");
var currentResult = "";

/* ==============================================
     Add Event Listener
============================================== */
adjectiveInput.addEventListener("keyup", function(event) {
     if (event.code === "Enter") {
          addAdjective(adjectiveInput.value);
     }
});
/* ==============================================
     Add Adjective
============================================== */
function addAdjective(adjective) {
     adjectiveInput.value = "";
     adjectiveString += `<a onClick="showResult('${formatAdjective(adjective)}')">${adjective}</a>`;
     adjectiveList.innerHTML = adjectiveString;
}
/* ==============================================
     Format Adjective
============================================== */
function formatAdjective(adjective) {
     return adjective.replace("'", "´");
}
/* ==============================================
     Show Result
============================================== */
function showResult(adjective) {
     currentResult += formatAdjective(adjective) + " ";
     result.innerHTML = `<a onClick="clearResult()">${currentResult + noun}</a>`;
}
/* ==============================================
     Format Result
============================================== */
function formatResult(adjective) {
     return adjective.replace("´", "'");
}
/* ==============================================
     Clear Result
============================================== */
function clearResult() {
     currentResult = "";
     result.innerHTML = "";
}