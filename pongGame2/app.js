// doc
const gameCanvas = document.querySelector('#gameCanvas');
const context = gameCanvas.getContext('2d');

// ball related 
let x = gameCanvas.width / 2;
let y = gameCanvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;
// draw the ball 
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
    x += dx;
    y += dy;
}
// draw function 
function paint() {
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawBall();
    if (x + dx > gameCanvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > gameCanvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

}

setInterval(paint, 10); //run every 10miliseconds