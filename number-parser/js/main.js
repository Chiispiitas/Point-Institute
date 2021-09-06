"use strict";
/* ==============================================
     Main
     Made by: David Santana
============================================== */

const inputNumber = document.getElementById("input-number");
const textResult = document.getElementById("text-result");

/* ==============================================
     Add Input Listener
============================================== */
inputNumber.addEventListener("keypress", function(event) {
     filterInput();
});
inputNumber.addEventListener("keyup", function(event) {
     filterInput();
     updateResult();
     inputNumber.value = separateWithCommas(inputNumber.value);
});
/* ==============================================
     Update Result
============================================== */
function updateResult() {
     if (inputNumber.value != "") {
          textResult.textContent = capitalize(toWords(parseInt(inputNumber.value)));
     }
     else {
          textResult.textContent = "";
     }
}
/* ==============================================
     Filter Input
============================================== */
function filterInput() {
     let filtered = inputNumber.value.replace(/[^\d]| /g, "");
     if (filtered.length >= 16) {
          inputNumber.value = filtered.substring(0, filtered.length - 1);
     }
     else {
          inputNumber.value = filtered;
     }
}
/* ==============================================
     Capitalize
============================================== */
function capitalize(string) {
     let lower = string.toLowerCase();
     return string.charAt(0).toUpperCase() + lower.slice(1);
}
/* ==============================================
     Separate With Commas
============================================== */
function separateWithCommas(numberStr) {
     return numberStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }