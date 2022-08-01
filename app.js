let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const note_p = document.querySelector(".note > p");
const milk_div = document.getElementById("mi");
const cat_div = document.getElementById("ca");
const broom_div = document.getElementById("br");
const win_div = document.getElementById("w");
const loose_div = document.getElementById("l");
const draw_div = document.getElementById("d");

function getComputerChoice() {
	const choices = ['mi', 'ca', 'br'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}

function convertToWord(letters) {
	if(letters === "mi") {
		return "Milk";
	}
	else if(letters === "ca") {
		return "Cat";
	}
	else {
		return "Broom";
	}

}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	note_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} !! You Win :)`;
	document.getElementById(userChoice).classList.add('win-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('win-glow')
	}, 1000);
}

function loose(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	note_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} !! You Loose :(`;
	document.getElementById(userChoice).classList.add('loose-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('loose-glow')
	}, 1000);
}

function draw(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	note_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(computerChoice)} !! It's a Draw :P`;
	document.getElementById(userChoice).classList.add('draw-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('draw-glow')
	}, 1000);
}

function game(userChoice) 
{
   const computerChoice = getComputerChoice();
	//console.log("userChoice" + userChoice);
	//console.log("computerChoice" + computerChoice);
	switch(userChoice + computerChoice) {
		case "mibr":
		case "cami":
		case "brca":
			//console.log("You Win :)");
			win(userChoice, computerChoice);
			break;
		case "mica":
		case "cabr":
		case "brmi":
			//console.log("You Loose :(");
			loose(userChoice, computerChoice);
			break;
		case "mimi":
		case "caca":
		case "brbr":
			//console.log("It's a Draw :|");
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	
	milk_div.addEventListener('click', function() {
		game("mi");
	})

	cat_div.addEventListener('click', function() {
		game("ca");
	})

	broom_div.addEventListener('click', function() {
		game("br");
	})
}

main();
