"use strict";
/* ==============================================
     Scene Teams
     Made by: David Santana
============================================== */

var listTeams = document.getElementById("list-teams");
var inputTeams = document.getElementById("input-teams");

/* ==============================================
     Add Button Listeners
============================================== */
document.getElementById("btn-teams-back").addEventListener( "click", function(){ 
     sceneLoad("scene-title");
});
document.getElementById("btn-teams-next").addEventListener( "click", function(){ 
     if (Object.keys(teamsHash).length == 2) {
          teamsHashToArray();
          sceneLoad("scene-countdown");
          startCountdown();
     } 
});
/* ==============================================
     Add Input Listener
============================================== */
inputTeams.addEventListener("keydown", function(event) {
     if (event.code === "Enter") {
          if (teamsCounter < 2) { addTeam(inputTeams.value.trim()); }
     }
});
/* ==============================================
     Add Team
============================================== */
function addTeam(name) {
     inputTeams.value = "";
     if (name == "") { return; }
     listTeams.innerHTML += generateTeamAnchor(name);
     teamsCounter += 1;
     if (teamsCounter == 2) { inputTeams.disabled = true; }
}
/* ==============================================
     Generate Team Anchor
============================================== */
function generateTeamAnchor(name) {
     let id = `${name}-${teamsCounter}-${Math.floor(Math.random() * 999999) + 1}`;
     teamsHash[id] = name;
     return `<a id="${id}" onClick="removeTeam('${id}');">${name}</a>`;
}
/* ==============================================
     Remove Team
============================================== */
function removeTeam(id) {
     teamsCounter -= 1;
     delete teamsHash[id];
     inputTeams.disabled = false;
     document.getElementById(id).outerHTML = "";
}
/* ==============================================
     Update teams
============================================== */
var updateteams = setInterval(function() {
     if (sceneCurrent == "scene-teams") { inputTeams.focus(); }
}, 1);