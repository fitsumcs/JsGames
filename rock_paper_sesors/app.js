// selecet images
const imgs = document.querySelectorAll('img');
const span = document.querySelectorAll('span');

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
    console.log(e.target.id);
    score.player++;
    score.compuer++;
    span[0].innerText = score.player;
    span[1].innerText = score.compuer;
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

    console.log(choice);



}

// who wins 
function winner(userchoice, compuerchoice) {

}


















function loadModal() {
    $('#exampleModalCenter').modal('show');
}