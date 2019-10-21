let buttons = document.querySelectorAll("button");
let turn = document.querySelector(".turn");
turn.innerText = "Blue's turn"

for (let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", function(e) {
		e.preventDefault();
		if (turn.innerText === "Blue's turn") {
			buttons[i].classList.add("blue");
			turn.innerText = "Red's turn";
		} else if (turn.innerText === "Red's turn") {
			buttons[i].classList.add("red");
			turn.innerText = "Blue's turn";
		}
		
	})
}

// reset button clears board
let reset = document.querySelector("form");
reset.addEventListener("submit", function(e) {
	e.preventDefault();
	for (let i=0; i<buttons.length; i++) {
		buttons[i].classList.remove("red");
		buttons[i].classList.remove("blue");
	}
})