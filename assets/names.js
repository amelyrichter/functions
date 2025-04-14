let formdisplay = localStorage.getItem('formdisplay')
if (!formdisplay) {
	formdisplay = []
} else {
	formdisplay = JSON.parse(formdisplay)
}

formdisplay.forEach((name) => {
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
		
	`
	document.querySelector('#formdisplay').insertAdjacentHTML('beforeend', nameItem)
})
