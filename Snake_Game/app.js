// The DOM
const canves = document.querySelector('#gameCanvas');

const ctx = canves.getContext("2d");
const scoreUI = document.querySelector("#score");
const highscore = document.querySelector("#highscore");
// event listener 
document.addEventListener("keydown", keycontrol);
document.addEventListener('DOMContentLoaded', () => {

    highscore.textContent = localStorage.getItem('snake_highscore') || 0;

});

function highScore(score) {
    if (Number(localStorage.getItem('snake_highscore')) < score) {
        localStorage.setItem('snake_highscore', score);
    }

}
// update score
function updateScore() {
    scoreUI.textContent = score;
}

let direction;
// key control
function keycontrol(e) {
    if (e.keyCode == 37 && direction != "Right") {
        direction = "Left";

    } else if (e.keyCode == 38 && direction != "Down") {
        direction = "Up";

    } else if (e.keyCode == 39 && direction != "Left") {
        direction = "Right";

    } else if (e.keyCode == 40 && direction != "Up") {
        direction = "Down";

    }



}


// comon vars 
const scale = 32;

// Images 
// The bord 
const bord = new Image();
bord.src = "./images/bord.png";
// The ball 
const food_Item = new Image();
food_Item.src = "./images/food.png";

// The snake 
let snake = [];
snake[0] = {
    x: 9 * scale,
    y: 10 * scale
};

// The food 
let food = {
    x: Math.floor(Math.random() * 17 + 1) * scale,
    y: Math.floor(Math.random() * 15 + 3) * scale

};

// Score 
let score = 0;


// draw the things 
function paint() {

    // draw the bord 
    ctx.drawImage(bord, 0, 0);
    // high score
    highScore(score);
    // draw the snake 
    for (let index = 0; index < snake.length; index++) {
        ctx.fillStyle = (index == 0) ? "green" : "white";
        ctx.fillRect(snake[index].x, snake[index].y, scale, scale);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[index].x, snake[index].y, scale, scale);
    }

    // draw food
    ctx.drawImage(food_Item, food.x, food.y);
    // Snake move 
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;



    // direction 
    if (direction == "Left") snakeX -= scale;
    if (direction == "Up") snakeY -= scale;
    if (direction == "Right") snakeX += scale;
    if (direction == "Down") snakeY += scale;

    // add new head 
    let snakeHead = {
        x: snakeX,
        y: snakeY
    };
    snake.unshift(snakeHead);
    // score update 
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        updateScore(score);

        food = {
            x: Math.floor(Math.random() * 17 + 1) * scale,
            y: Math.floor(Math.random() * 15 + 3) * scale

        };
    } else {
        // remove tail
        snake.pop();
    }
    // game over 
    if (snakeX < scale || snakeX > 17 * scale || snakeY < 3 * scale || snakeY > 17 * scale || collissionDetection(snakeHead, snake)) {
        clearInterval(interval);
        location.reload();
    }


}














let interval = setInterval(paint, 1000 / 10);