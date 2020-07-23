// Element selection 
const canvas = document.querySelector("#canv");
const context = canvas.getContext("2d");

// variables 
// Realted to ball 
let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 10;


// draw the ball 
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}



// Game Loop 
function paint() {



    // draw the ball
    drawBall();


    // make a call multiple times 
    requestAnimationFrame(paint);
}

// Render UI 
requestAnimationFrame(paint);