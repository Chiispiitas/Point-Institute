"use strict";
/* ==============================================
     Main
     Made by: David Santana
============================================== */

const noun = "woman."

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
     Capitalize
============================================== */
function capitalize(string) {
     let lower = string.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);
}
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
     currentResult += formatResult(adjective) + " ";
     result.innerHTML = `<a onClick="clearResult()">${currentResult + noun}</a>`;
}
/* ==============================================
     Format Result
============================================== */
function formatResult(adjective) {
     if (currentResult.length > 0) {
          adjective = adjective.toLowerCase();
     } else {
          adjective = capitalize(adjective);
     }

     return adjective.replace("´", "'");
}
/* ==============================================
     Clear Result
============================================== */
function clearResult() {
     currentResult = "";
     result.innerHTML = "";
}