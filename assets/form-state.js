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