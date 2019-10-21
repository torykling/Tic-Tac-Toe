let container = document.querySelector(".container")
let buttonClasses = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

function createBoard() {
	// sets the turn value
	let turn = document.querySelector(".turn");
	turn.innerText = "Blue's turn"
	// creates the buttons
	for (let i=0; i < 9; i++) {
		container.appendChild(document.createElement("button"));
	}
	let buttons = document.querySelectorAll("button");
	for (let i=0; i < 9; i++) {
		buttons[i].classList.add(buttonClasses[i]);
		
	}
	console.dir(buttons);
	// adds event listeners to each button
	for (let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function handler(e) {
			e.preventDefault();
			if (turn.innerText === "Blue's turn") {
				buttons[i].classList.add("blue");
				turn.innerText = "Red's turn";
				e.target.removeEventListener(e.type, arguments.callee);
			} else if (turn.innerText === "Red's turn") {
				buttons[i].classList.add("red");
				turn.innerText = "Blue's turn";
				e.target.removeEventListener(e.type, arguments.callee);
			}
		
		})
	}
}

createBoard();


// reset button clears board
let reset = document.querySelector("form");
reset.addEventListener("submit", function(e) {
	e.preventDefault();
	container.innerHTML = "";
	createBoard();
})