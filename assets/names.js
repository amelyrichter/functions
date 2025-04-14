let formdisplay = localStorage.getItem('formdisplay')
if (!formdisplay) {
	formdisplay = []
} else {
	formdisplay = JSON.parse(formdisplay)
}

formdisplay.forEach((name) => {
	let nameItem = `
		<li><h2>${name.name}</h2></li>
		<li><h2>${name.description}</h2></li>
		<li><h2>${name.date}</h2></li>
		<li><h2>${name.daysLeft} days left</h2></li> <!-- adding this part -->
	`
	document.querySelector('#formdisplay').insertAdjacentHTML('beforeend', nameItem)
})
