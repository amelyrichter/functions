let formdisplay = localStorage.getItem('formdisplay')
console.log(formdisplay)
if (!formdisplay) {
	formdisplay = []
} else {
	formdisplay = JSON.parse(formdisplay)
}

formdisplay.forEach((name) => {
	let nameList = document.querySelector(#formdisplay) `
		<li><h2>${name.name}</h2></li>
		<li><h2>${name.description}</h2></li>
		<li><h2>${name.date}</h2></li>
	`
	nameList.insertAdjacentHTML('beforeend', nameItem)
})