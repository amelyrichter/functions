let formdisplay = []

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

document.querySelector('form').onsubmit = (event) => {
	event.preventDefault()

	let nameValue = document.querySelector('#name').value
	let exhibitionValue = document.querySelector('#exhibition').value
	let dateValue = document.querySelector('#date').value

	let nameObject = {
		name: nameValue,
		text: exhibitionValue,
		date: dateValue,
	}

	formdisplay.push(nameObject) 
	renderFormdisplay()

	const renderFormdisplay = () => {
		let formdisplayList = document.querySelector('#formdisplay')
		formdisplayList.innerHTML = ''

		formdisplay.forEach((nameObject) => {
			let nameItem = `
				<li><h2>${nameObject.name}</h2></li>
				<li><h2>${nameObject.text}</h2></li>
				<li><h2>${nameObject.date}</h2></li>
			`
		})
	}
}
