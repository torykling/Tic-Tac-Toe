let buttons = document.querySelectorAll("button");
let turn = document.querySelector(".turn");
turn.innerText = "Blue's turn"

// this event listener alternates background colors of squares clicked to be red or blue
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

// reset button clears board
let reset = document.querySelector("form");
reset.addEventListener("submit", function(e) {
	e.preventDefault();
	for (let i=0; i<buttons.length; i++) {
		buttons[i].classList.remove("red");
		buttons[i].classList.remove("blue");
	}
})