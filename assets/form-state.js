// let formdisplay = []

document.querySelector('form').onsubmit = (event) => event.preventDefault()
document.querySelector('form').oninput = (event) => {
	
	let name = document.querySelector('#name').value
	document.querySelector('#name-display').textContent = name

	let exhibition = document.querySelector('#exhibition').value
	document.querySelector('#exhibition-display').textContent = exhibition

	let date = document.querySelector('#date').value
	document.querySelector('#date-display').textContent = exhibition 
	// this probably need to be something else than text content since its a date
}

// const renderFormdisplay = () => {
// 	let formdisplayList = document.querySelector('#formdisplay')
// 	formdisplayList.innerHTML = ''

// 	let formdisplay = localStorage.getItem('formdisplay')
// 	if (!formdisplay) {
// 		formdisplay = []
// 	} else {
// 		formdisplay = JSON.parse(formdisplay)
// 	}
// 	formdisplay = JSON.parse('formdisplay')

// 	formdisplay.forEach((nameObject) => {
// 		let nameItem = `
// 			<li><h2>${nameObject.name}</h2></li>
// 			<li><h2>${nameObject.description}</h2></li>
// 			<li><h2>${nameObject.date}</h2></li>
// 		`
// 	})
// }

document.querySelector('form').onsubmit = (event) => {
	event.preventDefault()

	let nameValue = document.querySelector('#name').value
	let exhibitionValue = document.querySelector('#exhibition').value
	let dateValue = document.querySelector('#date').value

	let nameObject = {
		name: nameValue,
		description: exhibitionValue,
		date: dateValue,
	}

	let formdisplay = localStorage.getItem('formdisplay')
	if (!formdisplay) {
		formdisplay = []
	} else {
		formdisplay = JSON.parse(formdisplay)
	}

	formdisplay.push(nameObject) 

	localStorage.setItem('formdisplay', JSON.stringify(formdisplay))
	renderFormdisplay()
}

// renderFormdisplay()

const renderFormdisplay = () => {
	let formdisplayList = document.querySelector('#formdisplay')
	formdisplayList.innerHTML = ''

	let formdisplay = localStorage.getItem('formdisplay')
	if (!formdisplay) {
		formdisplay = []
	} else {
		formdisplay = JSON.parse(formdisplay)
	}

	formdisplay.forEach((nameObject) => {
		let nameItem = `
			<li><h2>${nameObject.name}</h2></li>
			<li><h2>${nameObject.description}</h2></li>
			<li><h2>${nameObject.date}</h2></li>
		`
		formdisplayList.insertAdjacentHTML('beforeend', nameItem)
	})
}

renderFormdisplay()
