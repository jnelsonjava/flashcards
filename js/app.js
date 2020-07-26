'use strict'

/*
=== Goal: allow a user to flip through a series of flashcards
and reveal their answers on click.
*/

// store question and answer card sides in variables
var questionEl;
var answerEl;
var cardEl;
Card.cardArray = [];

questionEl = document.getElementsByClassName('question')[0];
answerEl = document.getElementsByClassName('answer')[0];
cardEl = document.getElementsByClassName('card')[0];

function Card(question, answer) {
  this.question = question;
  this.answer = answer;

  Card.cardArray.push(this);
}

// create functions to switch display value between inline-block and none
function setDisplayNone(cardSide) {
  cardSide.style.display = 'none';
}

function setDisplayInlineBlock(cardSide) {
  cardSide.style.display = 'inline-block';
}

// add functions that switch displays between question and answer

function showAnswer(questionEl, answerEl) {
  setDisplayNone(questionEl);
  setDisplayInlineBlock(answerEl);
}

function showQuestion() {
  setDisplayNone(answerEl);
  setDisplayInlineBlock(questionEl);
}

// make something to respond to click on card

function sideIsVisible(cardSide) {
  if (cardSide.style.display === 'none') {
    return false;
  } else {
    return true;
  }
}

function userClickCard(questionEl, answerEl) {
  console.log('clicked?')
  if (sideIsVisible(questionEl)) {
    showAnswer(questionEl, answerEl);
  } else {
    showQuestion(questionEl, answerEl);
  }
}

Card.swap = function() {
  var nextCardIndex = Math.floor(Math.random() * Card.cardArray.length);
  questionEl.textContent = Card.cardArray[nextCardIndex].question;
  answerEl.textContent = Card.cardArray[nextCardIndex].answer;
}





new Card('what is the first question?', 'this is the first question');
new Card('is this the second question?', 'yes, this is thes second questions');


// adjusting cursor for clicking - https://stackoverflow.com/questions/1057416/how-to-make-div-click-able

cardEl.onclick = function(){
  userClickCard(questionEl, answerEl);
}















