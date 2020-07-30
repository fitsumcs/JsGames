// Dom 
const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');

// event 
canvas.addEventListener("mousemove", moveuserPaddle);

// creating paddle 

// User 
const user = {
    x: 0,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "white",
    score: 0

};
const ai = {
    x: canvas.width - 10,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "white",
    score: 0

};
// the ball 
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: "white"

};
// the net 
const net = {
    x: canvas.width / 2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: "white"

};

// move paddle 
function moveuserPaddle(e) {
    let cent = canvas.getBoundingClientRect();

    user.y = e.clientY - cent.top - user.height / 2;


}
// draw the net 
function drawNet() {
    for (let index = 0; index < canvas.height; index += 15) {
        drawRect(net.x, net.y + index, net.width, net.height, net.color);

    }
}
// draw rectangle
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
// draw ball 
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}
// draw Text 
function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}

function reset() {

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
}




function render() {
    // clear canvas 
    drawRect(0, 0, canvas.width, canvas.height, "black");

    // draw the net 
    drawNet();

    // draw score 
    drawText(user.score, canvas.width / 4, canvas.height / 5, "white");
    drawText(ai.score, 3 * canvas.width / 4, canvas.height / 5, "white");

    // draw paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(ai.x, ai.y, ai.width, ai.height, ai.color);

    // draw the ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}
// check collection 
function collisionDetection(_ball, player) {
    _ball.top = _ball.y - _ball.radius;
    _ball.bottom = _ball.y + _ball.radius;
    _ball.left = _ball.x - _ball.radius;
    _ball.right = _ball.x + _ball.radius;


    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    return _ball.right > player.left && _ball.top < player.bottom && _ball.left < player.right && _ball.bottom > player.top;
    // console.log(col);
    // return col;

}
// Update 
function update() {

    // Move the ball 
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    // the ai move 
    let level = 1;
    ai.y += (ball.y - (ai.y + ai.height / 2)) * level;
    // who is the player 
    let player = (ball.x < canvas.width / 2) ? user : ai;
    // collisionDetection(ball, player);
    if (collisionDetection(ball, player)) {
        // ball.velocityX = -ball.velocityX;
        // collision point 
        let collidePlace = (ball.y - (player.y + player.height)) / (player.height / 2);
        let angle = collidePlace * (Math.PI / 4);
        // ball direction 
        let dir = (ball.x < canvas.width / 2) ? 1 : -1;
        // change velocity 
        ball.velocityX = dir * ball.speed * Math.cos(angle);
        ball.velocityY = dir * ball.speed * Math.sin(angle);

        ball.speed += 0.1;

    }

    if (ball.x - ball.radius < 0) {
        ai.score++;
        reset();
    } else if (ball.x + ball.color.radius > canvas.width) {
        user.score++;
        reset();
    }

}

function game() {
    update();
    render();
}

// farme 
const fps = 50;
setInterval(game, 1000 / fps);