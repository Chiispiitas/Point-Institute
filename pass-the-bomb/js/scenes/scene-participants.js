"use strict";
/* ==============================================
     Scene Participants
     Made by: David Santana
============================================== */

var listParticipants = document.getElementById("list-participants");
var inputParticipant = document.getElementById("input-participants");

/* ==============================================
     Add Button Listeners
============================================== */
document.getElementById("btn-title-start-now").addEventListener( "click", function(){ 
     sceneLoad("scene-participants"); 
} );
/* ==============================================
     Add Input Listener
============================================== */
inputParticipant.addEventListener("keyup", function(event) {
     if (event.code === "Enter") {
          if (participantsCounter < 10) { addParticipant(inputParticipant.value); }
     }
});
/* ==============================================
     Add Participant
============================================== */
function addParticipant(name) {
     inputParticipant.value = "";
     listParticipants.innerHTML += generateParticipantAnchor(name);
     participantsCounter += 1;
     if (participantsCounter == 10) { inputParticipant.disabled = true; }
}
/* ==============================================
     Generate Participant Anchor
============================================== */
function generateParticipantAnchor(name) {
     let id = `${name}-${participantsCounter}${Math.floor(Math.random() * 999) + 1}`;
     return `<a id="${id}" onClick="removeParticipant('${id}')">${name}</a>`;
}
/* ==============================================
     Remove Participant
============================================== */
function removeParticipant(id) {
     participantsCounter -= 1;
     inputParticipant.disabled = false;
     document.getElementById(id).outerHTML = "";
}