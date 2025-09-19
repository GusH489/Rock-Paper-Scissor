
// score variables
let playerScore = 0;
let cpuScore = 0;
let round = 0;
let roundStatus_p = document.getElementById("roundStatus");
let playerScore_p = document.getElementById("player-score");
let cpuScore_p = document.getElementById("cpu-score");
roundStatus_p.innerText = "Start Game!";
playerScore_p.innerText = 0
cpuScore_p.innerText = 0;


let scissor_choice_button = document.getElementById("scissor-choice");
let rock_choice_button = document.getElementById("rock-choice");
let paper_choice_button = document.getElementById("paper-choice");


function getComputerChoice() {
    var ran = Math.floor(Math.random() * 3);
    if (ran == 0) {
        return "scissor";
    }

    if (ran == 1) {
        return "rock";
    }

    if (ran == 2) {
        return "paper";
    }

}

function main() {

    scissor_choice_button.addEventListener('click', function() {
        // replace with round(userChoice)
        playRound("scissor");
        
    })

    rock_choice_button.addEventListener('click', function() {
        playRound("rock");
        
    })

    paper_choice_button.addEventListener('click', function() {
        playRound("paper");
        
    })

}

main();


function getHumanChoice(button) {
    var humChoice = button.value;
    return humChoice;
}

function playRound(humanChoice) {
    const cpuChoice = getComputerChoice();

    if (humanChoice == cpuChoice) {
        draw();
    }
    else if ((humanChoice == "rock" && cpuChoice == "scissor") || (humanChoice == "paper" && cpuChoice == "rock") || (humanChoice == "scissor" && cpuChoice == "paper")) {
        win();
    }
    else {
        lose();
    }
}

function win() {
    playerScore++;
    playerScore_p.textContent = playerScore;
    roundStatus_p.innerText = "You Win this round";
}

function lose() {
    cpuScore++;
    cpuScore_p.textContent = cpuScore;
    roundStatus_p.innerText = "You lose this round";
}

function draw() {
    roundStatus_p.innerText = "Draw";
}

// play five rounds


// console.log(getHumanChoice());