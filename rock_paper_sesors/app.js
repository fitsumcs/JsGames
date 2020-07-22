// selecet images
const imgs = document.querySelectorAll('img');
const span = document.querySelectorAll('span');
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

let score = {
    player: 0,
    compuer: 0
};

span[0].innerText = score.player;
span[1].innerText = score.compuer;

// add action listener 
imgs.forEach((img) => img.addEventListener('click', myfun));


function myfun(e) {

    const userchoice = e.target.id;
    const compuerchoice = randomechoice();
    const whowhins = winner(userchoice, compuerchoice);
    addScore(whowhins);
    user.innerText = userchoice;
    computer.innerText = compuerchoice;
    result.innerText = whowhins;


    // loadModal();
}

// random computer choice 
function randomechoice() {

    const rand = Math.random() * 100;
    let choice = '';
    if (rand > 0) {
        choice = "paper";

    }
    if (rand > 30) {
        choice = "scissors";

    }
    if (rand > 60) {
        choice = "rock";

    }

    return choice;



}

// who wins 
function winner(userchoice, compuerchoice) {
    let winner = '';
    if (userchoice === compuerchoice) {
        winner = "It is a Draw";
    } else if (userchoice === 'rock') {
        if (compuerchoice === 'scissors') {
            winner = "You Won !!!";
        } else {
            winner = "Computer Won!!";
        }
    } else if (userchoice === 'paper') {
        if (compuerchoice === 'rock') {
            winner = "You Won !!!";
        } else {
            winner = "Computer Won!!";
        }

    } else if (userchoice === 'scissors') {
        if (compuerchoice === 'paper') {
            winner = "You Won !!!";
        } else {
            winner = "Computer Won!!";
        }

    }


    return winner;

}

function addScore(whowhins) {
    if (whowhins === 'You Won !!!') {
        score.player++;
    } else if (whowhins === 'Computer Won!!') {
        score.compuer++;
    }


    span[0].innerText = score.player;
    span[1].innerText = score.compuer;

}
















function loadModal() {
    $('#exampleModalCenter').modal('show');
}