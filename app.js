const board	= document.querySelector('.board')
const newGame = document.querySelector('.new-game')
let counter = 0

board.addEventListener('click', function (event) {
	let target = event.target
	start(target)
})

function start(item) {
	counter++
	if (counter === 1) {
		item.textContent = 'X'
		item.classList.add('bcg-active-cross')
		return
	} else {
		item.textContent = 'O'
		counter = 0
		item.classList.add('zero', 'bcg-active-zero')
	}
}
newGame.addEventListener('click', () => {
	location.reload()
})