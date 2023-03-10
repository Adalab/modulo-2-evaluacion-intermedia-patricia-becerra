"use strict";

const userNumber = document.querySelector(".js-in-number");
const buttonTry = document.querySelector(".js-button-try");
const errorMessage = document.querySelector(".js-error-message");
const numberTip = document.querySelector(".js-in-tip");
const numberTries = document.querySelector(".js-in-tries");
let triesCount = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function renderNumberTip() {
  const userNumberValue = parseInt(userNumber.value);
  if (userNumberValue < randomNumber) {
    numberTip.innerHTML = `Pista: Demasiado bajo`;
  } else if (userNumberValue === randomNumber) {
    numberTip.innerHTML = `Has ganado campeona!!!`;
  } else {
    numberTip.innerHTML = `Pista: Demasiado alto`;
  }
}

function renderNumberTries() {
  const userNumberValue = parseInt(userNumber.value);
  if (userNumberValue !== randomNumber) {
    triesCount++;
  }
  numberTries.innerHTML = `Número de intentos: ${triesCount}`;
}

function handleButtonTry(event) {
  event.preventDefault();
  if (
    userNumber.value === "" ||
    userNumber.value > 100 ||
    userNumber.value < 0
  ) {
    errorMessage.innerHTML = `El número debe estar entre 1 y 100`;
  } else {
    renderNumberTip();
    renderNumberTries();
  }
}

buttonTry.addEventListener("click", handleButtonTry);
