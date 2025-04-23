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



document.querySelector('form').onsubmit = (event) => {
	event.preventDefault()

	let nameValue = document.querySelector('#name').value
	let exhibitionValue = document.querySelector('#exhibition').value
	let dateValue = document.querySelector('#date').value
	let daysLeftValue = calculateDaysLeft(dateValue)

	let nameObject = {
		name: nameValue,
		description: exhibitionValue,
		date: dateValue,
		daysLeft: daysLeftValue
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

	// window.location.href = 'index.html'

	// setTimeout(() => {
	// 	window.location.href = 'index.html'
	// }, 1000)
}

// days left calculator
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// telling it what day it is and to pull the end date by setting up and deifining the two strings 
function calculateDaysLeft(endDateString) {
	const today = new Date()
	const endDate = new Date(endDateString)

//setting up the time measurments for start and end datesby defining the hoursValue, minutesValue, secondsValue, msValue 
// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours

	today.setHours(0, 0, 0, 0)
	endDate.setHours(0, 0, 0, 0)

// setting up the date values by dividing how many milisecs are in a day to get actual days
// then round it up so even half a day counts as 1 day
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
	const diffTime = endDate - today
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

	return diffDays
	
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

	formdisplay.reverse().forEach((nameObject) => {
		let nameItem = `
			<li><h2>${nameObject.name}</h2></li>
			<li><h2>${nameObject.description}</h2></li>
			<li><h2>${nameObject.date}</h2></li>
			<li><h2>${nameObject.daysLeft}</h2></li>
		`
		formdisplayList.insertAdjacentHTML('beforeend', nameItem)
	})
}

document.getElementById('reset-button').addEventListener('click', () => {
	localStorage.removeItem('formdisplay')
	
	document.getElementById('formdisplay').innerHTML = ''
	document.getElementById('some-form').reset()

	window.location.href = 'index.html'
})

renderFormdisplay()
