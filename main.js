let container = document.querySelector(".container")
let buttonIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
let winner = document.querySelector(".winner")
let round = 0;

function createBoard() {
	// sets the turn value
	let turn = document.querySelector(".turn");
	turn.innerText = "Blue's turn"
	turn.style.color = "blue";
	// creates the buttons
	for (let i=0; i < 9; i++) {
		container.appendChild(document.createElement("button"));
	}
	let buttons = document.querySelectorAll("button");
	for (let i=0; i < 9; i++) {
		buttons[i].id = buttonIds[i];	
	}
	// adds event listeners to each button
	for (let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function handler(e) {
			e.preventDefault();
			if (turn.innerText === "Blue's turn") {
				buttons[i].classList.add("blue");
				turn.innerText = "Red's turn";
				turn.style.color = "red";
				round += 1;
				e.target.removeEventListener(e.type, arguments.callee);
				checkForWinners();
			} else if (turn.innerText === "Red's turn") {
				buttons[i].classList.add("red");
				turn.innerText = "Blue's turn";
				turn.style.color = "blue";
				round += 1;
				e.target.removeEventListener(e.type, arguments.callee);
				checkForWinners();
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
	winner.innerText = "";
	round = 0;
})

function checkForWinners() {
	let turn = document.querySelector(".turn")
	let buttons = document.querySelectorAll("button");
	let winningIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
	for (let i =0; i < winningIndices.length; i++) {
		if ((buttons[winningIndices[i][0]].classList.value=== "blue") && (buttons[winningIndices[i][1]].classList.value==="blue") && (buttons[winningIndices[i][2]].classList.value==="blue")) {
			winner.innerText = "Blue wins! Press Reset to play again!"
			turn.innerText = ""
			console.log("blue wins")
		} else if ((buttons[winningIndices[i][0]].classList.value=== "red") && (buttons[winningIndices[i][1]].classList.value==="red") && (buttons[winningIndices[i][2]].classList.value==="red")) {
			winner.innerText = "Red wins! Press Reset to play again!"
			turn.innerText = ""
			console.log("red wins") 
		} else if (round === 9) {
			winner.innerText = "It's a tie! Press Reset to play again!"
			turn.innerText = ""
		}
	}
}







