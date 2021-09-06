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
     updateInputSize();
});
inputNumber.addEventListener("keyup", function(event) {
     filterInput();
     updateResult();
});
/* ==============================================
     Update Result
============================================== */
function updateResult() {
     if (inputNumber.value != "") {
          textResult.textContent = capitalize(toWords(parseInt(inputNumber.value.replace(/\.|,/g, ""))));
     }
     else {
          textResult.textContent = "";
     }
}
/* ==============================================
     Filter Input
============================================== */
function filterInput() {
     let filtered = inputNumber.value.replace(/[^\d\.,]| /g, "");
     if (filtered.replace(/\.|,/g, "").length >= 15) {
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