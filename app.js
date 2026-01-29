let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#result-message');

const computerChoices = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}



// const updateScore = () => {
//     const userScore_span = document.getElementById("user-score");
//     const computerScore_span = document.getElementById("computer-score");
//     userScore_span.innerText = userScore;
//     computerScore_span.innerText = computerScore;
// }

const playGame = (choice) => {
    console.log("user choice: " + choice);
    const computerChoice = computerChoices();
    console.log("computer choice: " + computerChoice);

    if (choice === computerChoice) {
        console.log("It's a tie!");
        msg.innerText = " It's a tie! You both chose " + choice + ". ";
        msg.style = "background-color: yellow; color: red; border-radius: 10px; justify-content: center; align-items: center;";
    } else if ((choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win!");
        userScore++;
        userScore_span.innerText = userScore;
        msg.innerText = "Your " + choice + " beats " + computerChoice + " You win! ";
        msg.style = "background-color: green; color: white; border-radius: 10px; justify-content: center; align-items: center;";
    } else {
        console.log("Computer wins!");
        computerScore++;
        computerScore_span.innerText = computerScore;
        msg.innerText = " Computer's " + computerChoice + " beats your " + choice + " Computer wins! ";
        msg.style = "background-color: red; color: white; border-radius: 10px; justify-content: center; align-items: center";
    } 
};


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        console.log("choice clicked " + choice.id);
        playGame(choice.id);
    });
});