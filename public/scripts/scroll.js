import 'https://rawcdn.githack.com/flackr/scroll-timeline/ca40d920073ab1c3775f6e2aa973c6ea747ae664/dist/scroll-timeline.js';

const $listView = document.querySelector('.squad-members > ul');
const $listItems = document.querySelectorAll('.squad-members > ul > li');


console.log($listView);
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