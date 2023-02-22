// Sound effects loaded made with an array & strings
const coffeeAudio = [
    new Audio('https://nichtrijder.pepijnblom.com/sounds/krijg%20nou%20een%20bakkie%20pleur.mp3'),
    new Audio('./assets/audio/de-eerste-indruk-is-romig.mp3')
  ];
const teaAudio = new Audio('./assets/audio/cup-of-tea.m4a')
const waterAudio = new Audio('./assets/audio/water.m4a')

const liquid = document.querySelector('.liquid')
const dispenser = ['.left-dispenser-output','.right-dispenser-output']

// Buttons for the sound effects
const coffeeButton = document.querySelector('#coffeeEvent')
const teaButton = document.querySelector('#teaEvent')
const waterButton = document.querySelector('#waterEvent')

// Color liquids
const coffeeColor = document.querySelector('.coffee')
const teaColor = document.querySelector('.tea')
const waterColor = document.querySelector('.water')


// Random soundeffect for coffee
coffeeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * coffeeAudio.length);
    const randomAudio = coffeeAudio[randomIndex];
    randomAudio.play();

// Add the 'liquid' class to both coffee dispenser elements
dispenser.forEach(dispenserSelector => {
    const dispenserElement = document.querySelector(dispenserSelector);
    dispenserElement.classList.add('liquid','coffee');
  })
});

// Will play the tea soundeffect
teaButton.addEventListener("click", () => {
    teaAudio.play();

    // Add the 'liquid' class to both coffee dispenser elements
dispenser.forEach(dispenserSelector => {
    const dispenserElement = document.querySelector(dispenserSelector);
    dispenserElement.classList.add('liquid','tea');
  })
  });

// Will play the water soundeffect
waterButton.addEventListener("click", () => {
    waterAudio.play();

// Add the 'liquid' class to both coffee dispenser elements
dispenser.forEach(dispenserSelector => {
    const dispenserElement = document.querySelector(dispenserSelector);
    dispenserElement.classList.add('liquid','water');
  })
});



