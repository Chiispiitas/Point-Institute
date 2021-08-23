"use strict";
/* ==============================================
     Scene Skill
     Made by: David Santana
============================================== */

var skillDescriptions = {
     "reading":["In the reading part of the test, your reading comprehension skills will be tested.\
                 This includes memorization, analysis and summarization.<br><br>\
                 You will mainly have to read texts on different topics, and determine multiple\
                 variables like the main topic, type of vocabulary, or arguments.", 
                 "<i class='bi bi-book'></i>"],
     "listening":["In the listening part of the test, your listening skills will be tested.\
                 Having your audio enabled is very important for this section.<br><br>\
                 You will mainly have to perform multiple tasks like: finding the correct transcription\
                 of audios, answering questions, and choosing between homophones.",
                 "<i class='bi bi-headphones'></i>"],
     "writing": ["In the writing part of the test, your writing skills will be tested. This includes grammar,\
                 punctuation, spelling and vocabulary.<br><br>\
                 You will have to perform multiple tasks like: finding missing words, correcting\
                 mistakes, and choosing the most natural-sounding sentences.",
                 "<i class='bi bi-pencil-fill'></i>"]
};

// Change Content.
function skillLoad(skill) {
     document.getElementById("skill-title").innerHTML = skill + " " + skillDescriptions[skill][1];
     document.getElementById("skill-description").innerHTML = skillDescriptions[skill][0];
}

// Add Event Listeners.
document.getElementById("btn-skill-back").addEventListener( "click", function(){ 
     sceneLoad("scene-menu"); 
} );