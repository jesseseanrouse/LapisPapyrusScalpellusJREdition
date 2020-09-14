const player = {
	playerChoice: null,
};
const computer = {
	computerChoice: null,
};
const gameChoices = ['Lapis', 'Papyrus', 'Scalpellus', 'Lacerta', 'Spock'];
console.log(gameChoices);
function computerMakesChoice() {
	const random = Math.floor(Math.random() * gameChoices.length);
	computer.computerChoice = gameChoices[random];
}
function winOrLose() {
	if (player.playerChoice === computer.computerChoice) {
		displayResult(
			"It's a tie! Both the player and the computer choose " +
				computer.computerChoice
		);
	} else if (player.playerChoice === gameChoices[0]) {
		if (computer.computerChoice === gameChoices[1]) {
			displayResult('Player Loses! Papyrus obtegit lapis');
		} else if (computer.computerChoice === gameChoices[3]) {
			displayResult('Player Wins! Lapis contundito lacerto');
		} else if (computer.computerChoice === gameChoices[4]) {
			displayResult('Player Loses! Spock adiuuatur Lapis');
		} else {
			displayResult('Player Wins! Lapis contundito scalpellus');
		}
	} else if (player.playerChoice === gameChoices[1]) {
		if (computer.computerChoice === gameChoices[0]) {
			displayResult('Player Wins! Papyrus obtegit lapis');
		} else if (computer.computerChoice === gameChoices[3]) {
			displayResult('Player Loses! Lacerto consumit papyrus');
		} else if (computer.computerChoice === gameChoices[4]) {
			displayResult('Player Wins! Papyrus reprobat Spock');
		} else {
			displayResult('Player Loses! Scalpellus secare papyrus');
		}
	} else if (player.playerChoice === gameChoices[2]) {
		if (computer.computerChoice === gameChoices[1]) {
			displayResult('Player Wins! Scalpellus secare papyrus');
		} else if (computer.computerChoice === gameChoices[3]) {
			displayResult('Player Wins! Scalpellus carnificare lacerto');
		} else if (computer.computerChoice === gameChoices[4]) {
			displayResult('Player Loses! Spock frangit scalpellus');
		} else {
			displayResult('Player Loses! Lapis contundito scalpellus');
		}
	} else if (player.playerChoice === gameChoices[3]) {
		if (computer.computerChoice === gameChoices[1]) {
			displayResult('Player Wins! Lacerto consumit papyrus');
		} else if (computer.computerChoice === gameChoices[0]) {
			displayResult('Player Loses! Lapis contundito lacerto');
		} else if (computer.computerChoice === gameChoices[4]) {
			displayResult('Player Wins! Lacerto venena Spock');
		} else {
			displayResult('Player Loses! Scalpellus carnificare lacerto');
		}
	} else if (player.playerChoice === gameChoices[4]) {
		if (computer.computerChoice === gameChoices[1]) {
			displayResult('Player Loses! Papyrus reprobat Spock');
		} else if (computer.computerChoice === gameChoices[3]) {
			displayResult('Player Loses! Lacerto venena Spock');
		} else if (computer.computerChoice === gameChoices[0]) {
			displayResult('Player Wins! Spock adiuuatur Lapis');
		} else {
			displayResult('Player Wins! Spock frangit scalpellus');
		}
	}
}
function displayResult(winOrLoseText) {
	const resultText = document.getElementById('textResult');
	resultText.innerText = winOrLoseText;
	document.getElementById('textResult').appendChild(resultText);
}
function clickLapis() {
	player.playerChoice = gameChoices[0];
	computerMakesChoice();
	winOrLose();
	displayResult();
}
function clickPapyrus() {
	player.playerChoice = gameChoices[1];
	computerMakesChoice();
	winOrLose();
	displayResult();
}
function clickScalpellus() {
	player.playerChoice = gameChoices[2];
	computerMakesChoice();
	winOrLose();
	displayResult();
}
function clickLacerta() {
	player.playerChoice = gameChoices[3];
	computerMakesChoice();
	winOrLose();
	displayResult();
}
function clickSpock() {
	player.playerChoice = gameChoices[4];
	computerMakesChoice();
	winOrLose();
	displayResult();
}
document.getElementById('Lapis').addEventListener('click', clickLapis);
document.getElementById('Papyrus').addEventListener('click', clickPapyrus);
document
	.getElementById('Scalpellus')
	.addEventListener('click', clickScalpellus);
document.getElementById('Lacerta').addEventListener('click', clickLacerta);
document.getElementById('Spock').addEventListener('click', clickSpock);
//orginal code for win/loss non tie
//displayResult("Player Wins! Player chose " + player.playerChoice + " and the computer chose " + computer.computerChoice);
