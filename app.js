// import functions and grab DOM elements
import { createCountString } from './utils.js';

const villageDropdown = document.querySelector('#village-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const waterDropdown = document.querySelector('#water-dropdown');

const villageImageContainer = document.querySelector('#village-container');
const castleImageContainer = document.querySelector('#castle-container');
const waterImageContainer = document.querySelector('#water-container');

const sloganInput = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');

const countDisplay = document.querySelector('#count-display');
const sloganDisplay = document.querySelector('#slogan-display');

const cityNameInput = document.querySelector('#city-name-input');
const cityNameButton = document.querySelector('#city-name-button');
const cityNameDisplay = document.querySelector('#city-name-display');

const birdsRadio = document.querySelector('#birds-radio');
const rainRadio = document.querySelector('#rain-radio');
const kittensRadio = document.querySelector('#kittens-radio');

const audioPlayer = document.querySelector('#audio-player');

const historyDisplay = document.querySelector('#history-display');

// let state
let sloganArray = [];
let villageCount = 0;
let castleCount = 0;
let waterCount = 0;
let cityName = '';

let historyArray = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

villageDropdown.addEventListener('change', ()=>{
    // - On change of any dropdown
    //     - get the value of the dropdown element
    const userVillage = villageDropdown.value;
    //     - use the value to change the div or img image
    villageImageContainer.style.backgroundImage = `url(./assets/village-${userVillage}.jpeg)`;
    //     - update the count for that dropdown
    villageCount++;
    //     - update the DOM with new count
    displayStats();
    //log change to history array
    historyArray.push(`The ${villageDropdown.name} was changed to ${userVillage}.`);
    displayHistory();
});

castleDropdown.addEventListener('change', ()=>{
    // - On change of any dropdown
    //     - get the value of the dropdown element
    const userCastle = castleDropdown.value;
    //     - use the value to change the div or img image
    castleImageContainer.style.backgroundImage = `url(./assets/castle-${userCastle}.jpeg)`;
    //     - update the count for that dropdown
    castleCount++;
    //     - update the DOM with new count
    displayStats();
    historyArray.push(`The ${castleDropdown.name} was changed to ${userCastle}.`);
    displayHistory();
});

waterDropdown.addEventListener('change', ()=>{
    // - On change of any dropdown
    //     - get the value of the dropdown element
    const userWater = waterDropdown.value;
    //     - use the value to change the div or img image
    waterImageContainer.style.backgroundImage = `url(./assets/water-${userWater}.jpeg)`;
    //     - update the count for that dropdown
    waterCount++;
    //     - update the DOM with new count
    displayStats();
    historyArray.push(`The ${waterDropdown.name} was changed to ${userWater}.`);
    displayHistory();
});

birdsRadio.addEventListener('click', ()=>{
    const userSound = birdsRadio.value;
    audioPlayer.src = `./assets/${userSound}`;
    historyArray.push(`The ${birdsRadio.name} was changed to ${userSound}.`);
    displayHistory();
});

rainRadio.addEventListener('click', ()=>{
    const userSound = rainRadio.value;
    audioPlayer.src = `./assets/${userSound}`;
    historyArray.push(`The ${rainRadio.name} was changed to ${userSound}.`);
    displayHistory();
});

kittensRadio.addEventListener('click', ()=>{
    const userSound = kittensRadio.value;
    audioPlayer.src = `./assets/${userSound}`;
    historyArray.push(`The ${kittensRadio.name} was changed to ${userSound}.`);
    displayHistory();
});

sloganButton.addEventListener('click', ()=> {
    // - get the value entered in input
    const userSlogan = sloganInput.value;

    // - push into array of slogans
    sloganArray.push(userSlogan);

    // reset input field
    sloganInput.value = '';

    // - update the DOM
    displaySlogans();
});

cityNameButton.addEventListener('click', ()=>{
    // When user clicks button it stores the name in state and displays it in a header
    cityName = cityNameInput.value;
    //update DOM - change header to display city name
    cityNameDisplay.textContent = cityName;
    historyArray.push(`The ${cityNameButton.name} was changed to ${cityName}.`);
    displayHistory();
});

//FUNCTIONS
function displayStats() {
    //calls createCountString function with arguments of 3 counts which returns the string of text and puts that in display div
    countDisplay.textContent = createCountString(villageCount, castleCount, waterCount);
}

function displaySlogans() {
    // - update the DOM by
    //     - reset old slogans from DOM (immutable)
    sloganDisplay.textContent = '';

    //     - loop through array
    for (let slogan of sloganArray) {
        //     - create <p> with content of each index of array and append to slogan display div
        const p = document.createElement('p');
        p.textContent = cityName + ': ' + slogan;
        p.classList.add('slogans');
        sloganDisplay.append(p);
    }
}

function displayHistory() {
    historyDisplay.textContent = '';
    for (let historyItem of historyArray) {
        const p = document.createElement('p');
        p.textContent = historyItem;
        p.classList.add('history');
        historyDisplay.append(p);
    }
}