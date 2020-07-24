// Element selection 
const canvas = document.querySelector("#canv");
const context = canvas.getContext("2d");
const scoreUI = document.querySelector("#score");

// Events 
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);


// variables 
// ball Realted to ball 
let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 15;

let dx = 2;
let dy = -2;

// Related to paddle 
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight;

let paddleDx = 7;

// Key Press 
let rightKeyPressed;
let leftKeyPressed;

// score
let score = 0;
// update score
function updateScore() {
    scoreUI.textContent = score;
}

function drawthePaddle() {
    context.beginPath();
    context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();


}
// draw the ball 
function drawtheBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}
// Event Handlers 
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightKeyPressed = true;
    } else if (e.keyCode == 37) {
        leftKeyPressed = true;
    }

}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightKeyPressed = false;
    } else if (e.keyCode == 37) {
        leftKeyPressed = false;
    }

}


// Game Loop 
function paint() {

    // clear canves on each paint 
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw paddle
    drawthePaddle();

    // draw the ball
    drawtheBall();
    // collision detection 
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius || (y + dy > canvas.height - paddleHeight - ballRadius && x + dx > paddleX && x + dx < paddleX + paddleWidth)) {
        // score 
        if (y + dy > canvas.height - paddleHeight - ballRadius && x + dx > paddleX && x + dx < paddleX + paddleWidth) {
            score++;
            updateScore(score);
        }
        dy = -dy;

    } else if (y + dy > canvas.height) {
        location.reload();
    }
    // paddle
    if (rightKeyPressed && (paddleX + paddleWidth) < canvas.width) {
        paddleX += paddleDx;
    }
    if (leftKeyPressed && paddleX > 0) {
        paddleX -= paddleDx;
    }


    //    add 2 px 
    x += dx;
    y += dy;

    // make a call multiple times 
    requestAnimationFrame(paint);
}

// Render UI 
requestAnimationFrame(paint);