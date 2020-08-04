// The DOM
const canves = document.querySelector('#gameCanvas');

const ctx = canves.getContext("2d");

// event listener 
document.addEventListener("keydown", keycontrol);

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

    // draw the snake 
    for (let index = 0; index < snake.length; index++) {
        ctx.fillStyle = (index == 0) ? "green" : "white";
        ctx.fillRect(snake[index].x, snake[index].y, scale, scale);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[index].x, snake[index].y, scale, scale);
    }


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

        food = {
            x: Math.floor(Math.random() * 17 + 1) * scale,
            y: Math.floor(Math.random() * 15 + 3) * scale

        };
    } else {
        // remove tail
        snake.pop();
    }

    // draw food
    ctx.drawImage(food_Item, food.x, food.y);

}














let interval = setInterval(paint, 1000 / 10);