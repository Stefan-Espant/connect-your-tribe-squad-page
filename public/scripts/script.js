// Sound effects loaded made with an array & strings
import 'https://rawcdn.githack.com/flackr/scroll-timeline/ca40d920073ab1c3775f6e2aa973c6ea747ae664/dist/scroll-timeline.js';

const coffeeAudio = [
	new Audio('https://nichtrijder.pepijnblom.com/sounds/krijg%20nou%20een%20bakkie%20pleur.mp3'),
	new Audio('./assets/audio/de-eerste-indruk-is-romig.mp3')
];
const teaAudio = new Audio('./assets/audio/cup-of-tea.m4a')
const waterAudio = new Audio('./assets/audio/water.m4a')

const liquid = document.querySelector('.liquid')
const dispenser = ['.left-dispenser-output', '.right-dispenser-output']

addEventListener('click', (event) => {
	const { target } = event

	if (!target.matches('button')) return

	switch (target.id) {
		case 'coffeeEvent':
			playCoffee()
			break;
		case 'teaEvent':
			playTea()
			break;
		case 'waterEvent':
			playWater()
			break;

		default:
			break;
	}
})


function playCoffee() {
	const randomIndex = Math.floor(Math.random() * coffeeAudio.length);
	const randomAudio = coffeeAudio[randomIndex];
	randomAudio.play();
	setDispencerClass('coffee')
}

function playTea() {
	teaAudio.play()
	setDispencerClass('tea')
}

function playWater() {
	waterAudio.play()
	setDispencerClass('water')
}

function setDispencerClass(drink) {
	dispenser.forEach(dispenserSelector => {
		const dispenserElement = document.querySelector(dispenserSelector)
		dispenserElement.classList.add('liquid', drink)
		setTimeout(() => dispenserElement.classList.remove('liquid', drink), 3000);
	})
}

function buildScrollPanel() {
	const $listView = document.querySelector('.squad-members > ul');
	const $listItems = document.querySelectorAll('.squad-members > ul > li');

	$listItems.forEach(($listItem) => {

		const timeline = new ViewTimeline({
			source: $listView,
			subject: $listItem,
			axis: 'inline'
		})

		// Appear
		$listItem.animate(
			{
				opacity: [0, 1],
				transform: ['translateX(100%)', 'translateX(0)'],
			},
			{
				timeline,
				delay: { phase: 'enter', percent: CSS.percent(0) },
				endDelay: { phase: 'enter', percent: CSS.percent(100) }
			}
		)

		// Disappear
		$listItem.animate(
			{
				opacity: [1, 0],
				transform: ['translateX(0%)', 'translateX(-100%)'],
			},
			{
				timeline,
				delay: { phase: 'exit', percent: CSS.percent(0) },
				endDelay: { phase: 'exit', percent: CSS.percent(100) }
			}
		)
	})
}

buildScrollPanel()