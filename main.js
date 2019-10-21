let container = document.querySelector(".container")
let buttonIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

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
		buttons[i].id = buttonIds[i];
		
	}
	// adds event listeners to each button
	for (let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function handler(e) {
			e.preventDefault();
			if (turn.innerText === "Blue's turn") {
				buttons[i].classList.add("blue");
				turn.innerText = "Red's turn";
				e.target.removeEventListener(e.type, arguments.callee);
				checkForWinners();
			} else if (turn.innerText === "Red's turn") {
				buttons[i].classList.add("red");
				turn.innerText = "Blue's turn";
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
})

// figuring out how to check for winners
let winner = document.querySelector(".winner")
let buttons = document.querySelectorAll("button");
function checkForWinners() {
	// these may need to be zero indexed if I switch from ids to index
	let winningIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
	let buttonClasses = []
	for(let i = 0; i<buttons.length; i++) {
		buttonClasses.push(buttons[i].classList.value);		
	}
	for (let i =0; i < winningIndices.length; i++) {
		if ((buttonClasses[winningIndices[i][0]]=== "blue") && (buttonClasses[winningIndices[i][1]]==="blue") && (buttonClasses[winningIndices[i][2]]==="blue")) {
			winner.innerText = "Blue Wins!"
		} else if ((buttonClasses[winningIndices[i][0]]=== "red") && (buttonClasses[winningIndices[i][1]]==="red") && (buttonClasses[winningIndices[i][2]]==="red")) {
			winner.innerText = "Red Wins!"
		}
		
	}
	console.log(buttonClasses);
}






