// Element selection 
const canvas = document.querySelector("#canv");
const context = canvas.getContext("2d");

// variables 
// ball Realted to ball 
let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 15;

let dx = 2;
let dy = -2;



// draw the ball 
function drawtheBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}



// Game Loop 
function paint() {

    // clear canves on each paint 
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw the ball
    drawtheBall();
    // collision detection 
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    //    add 2 px 
    x += dx;
    y += dy;

    // make a call multiple times 
    requestAnimationFrame(paint);
}

// Render UI 
requestAnimationFrame(paint);