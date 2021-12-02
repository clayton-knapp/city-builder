// import functions and grab DOM elements

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



// let state
let sloganArray = [];
let villageCount = 0;
let castleCount = 0;
let waterCount = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

villageDropdown.addEventListener('change', ()=>{
    // - On change of any dropdown
    //     - get the value of the dropdown element
    const userVillage = villageDropdown.value;
    console.log(userVillage);
    //     - use the value to change the div or img image
    //     - update the count for that dropdown
    //     - update the DOM with new count

});
