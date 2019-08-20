function rollDice() {
	return Math.floor(Math.random() * 6 + 1);
}

function updateDice() {
	diceElem.innerHTML = rollDice();
}

let diceElem = document.getElementById("dice_result");
document.getElementById("roll").addEventListener("click", updateDice);