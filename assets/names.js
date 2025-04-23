let formdisplay = localStorage.getItem('formdisplay')
if (!formdisplay) {
	formdisplay = []
} else {
	formdisplay = JSON.parse(formdisplay)
}

// DOM overriding makes sure that it waits until the entire HTML has loaded before running this code
//I am addressing it to the reset button and giving it the action on click to remove my formdisplay from localStorage
// source: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
	const resetButton = document.getElementById('reset-button')

	if (resetButton) {
		resetButton.addEventListener('click', () => {
			
			localStorage.removeItem('formdisplay')
			document.getElementById('formdisplay').innerHTML = ''
		})
	}
})

//simply adding reverse() flips around the order of how the boxes are displaye – life saver
//it does it by rendering/loading it the opposite way so the most recent added one is at the top
//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
formdisplay.reverse().forEach((name) => {
	let nameItem = `
	<div class="countdown-box">
	<div class="top-row">
		<li><h2 class="title-left">${name.name}</h2></li>
		<li><h2 class="title-right">${name.date}</h2></li>
	</div>

	<div class="countdown-content">
		<li><h2 class="countdown-number">${name.daysLeft}</h2></li>
		<div class="days-left">days left</div>
	</div>

	<div class="bottom-title">
		<li><h2>${name.description}</h2></li>
	</div>
	</div>
		
	`
	document.querySelector('#formdisplay').insertAdjacentHTML('beforeend', nameItem)
})
