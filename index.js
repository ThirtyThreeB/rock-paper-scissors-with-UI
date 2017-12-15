/*jshint esversion: 6 */
let playerScore = 0;
let compScore = 0;
let gameNumber = 1;
let playerChoice;



let game = () => {
	//while (gameNumber <6) {}
	const buttons = document.querySelectorAll('button');

	buttons.forEach((button) => {

	  button.addEventListener('click', playerChoiceFunction);
	});
};

let computerPlay = () => {
	let randomizer = Math.floor(Math.random()*3);
	let choice = {
		0 : "rock", 
		1 : "paper", 
		2 : "scissors"
	};
	let compChoice = choice[randomizer];
	console.log("comp",compChoice);
	return compChoice;
};

let playerChoiceFunction = (e) => {
	playerChoice = e.target.id;
  console.log("player", playerChoice);
  if (gameNumber < 6){
	  playRound(playerChoice);
  }
};

let playRound = (playerChoice) => {
	checkRoundWinner(playerChoice);
	gameNumber++;
	


	if (gameNumber == 6) {
		whoWinsGame();
		//scoreDisplay.textContent = `GAME OVER, Player ${playerScore}, 
			//	Computer ${compScore}`;
		//reset()
	}

	scoreBoard.textContent = `Player ${playerScore}, Computer ${compScore}`;
	console.log("playerScore=", playerScore, "compScore=", compScore,
			 "gameNumber=", gameNumber);

};

let checkRoundWinner = (playerChoice) => {

	let compTest = computerPlay();

	const container = document.querySelector('#container');
	const scoreDisplay = document.createElement('div');
	scoreDisplay.classList.add('scoreDisplay');
	//scoreDisplay.textContent = `Player ${playerScore}, Computer ${compScore}`;
	

		if (compTest == playerChoice) {
			console.log("TIE");
			scoreDisplay.textContent = `Round ${gameNumber}. Player ${playerChoice}, computer ${compTest}, it's a tie!`;
			container.appendChild(scoreDisplay);
			//console.log("test", playerScore);
			return;
		}

		switch (compTest) {

			case "rock":
			if (playerChoice == "paper") {
				playerScore++;
				scoreDisplay.textContent = `Round ${gameNumber}. You win, paper beats rock!`;
				container.appendChild(scoreDisplay);
				console.log("You win, paper beats rock!");
			}
			else {
				compScore++;
				scoreDisplay.textContent = `Round ${gameNumber}.You lose, rock beats scissors`;
				container.appendChild(scoreDisplay);
				console.log("You lose, rock beats scissors");
			}
			break;

			case "paper":
			if (playerChoice == "scissors") {
				playerScore++;
				scoreDisplay.textContent = `Round ${gameNumber}.You win, scissors beats paper`;
				container.appendChild(scoreDisplay);
				console.log("You win, scissors beats paper");	
			}
			else {
				compScore++;
				scoreDisplay.textContent = `Round ${gameNumber}. You lose, paper beats rock`;
				container.appendChild(scoreDisplay);
				console.log("You lose, paper beats rock");	
			}
			break;

			case "scissors":
			if (playerChoice == "rock") {
				playerScore++;
				scoreDisplay.textContent = `Round ${gameNumber}. You win, rock beats scissors`;
				container.appendChild(scoreDisplay);
				console.log("You win, rock beats scissors");
			}
			else {
				compScore++;
				scoreDisplay.textContent = `Round ${gameNumber}. You lose, scissors beats paper`;
				container.appendChild(scoreDisplay);
				console.log("You lose, scissors beats paper");
			}
			// console.log('teste');
			// scoreDisplay.textContent = `Round ${gameNumber}, Player chose ${playerChoice}, 
			// Computer chose ${compChoice}`;
		}
	};

	let whoWinsGame = () => {
		let winStatement;

		if (playerScore > compScore) {
			winStatement = "you win!";
		} else if (playerScore < compScore) {
			winStatement = "computer wins.";
		} else {
			winStatement = "it's a tie!";
		}
		scoreDisplay.textContent =`END OF GAME You scored ${playerScore}, 
			the computer scored ${compScore}, ${winStatement}`;
			message.appendChild(scoreDisplay);
	};




game();

