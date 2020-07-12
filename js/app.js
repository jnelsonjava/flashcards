'use strict'

/*
=== Goal: allow a user to flip through a series of flashcards
and reveal their answers on click.
*/

// store question and answer card sides in variables
var question;
var answer;
var card;

question = document.getElementsByClassName('question')[0];
answer = document.getElementsByClassName('answer')[0];
card = document.getElementsByClassName('card')[0];


// create functions to switch display value between inline-block and none
function setDisplayNone(cardSide) {
  cardSide.style.display = 'none';
}

function setDisplayInlineBlock(cardSide) {
  cardSide.style.display = 'inline-block';
}

// add functions that switch displays between question and answer

function showAnswer(question, answer) {
  setDisplayNone(question);
  setDisplayInlineBlock(answer);
}

function showQuestion() {
  setDisplayNone(answer);
  setDisplayInlineBlock(question);
}

// make something to respond to click on card

function sideIsVisible(cardSide) {
  if (cardSide.style.display === 'none') {
    return false;
  } else {
    return true;
  }
}

function userClickCard(question, answer) {
  console.log('clicked?')
  if (sideIsVisible(question)) {
    showAnswer(question, answer);
  } else {
    showQuestion(question, answer);
  }
}




// adjusting cursor for clicking - https://stackoverflow.com/questions/1057416/how-to-make-div-click-able

card.onclick = function(){
  userClickCard(question, answer);
}















