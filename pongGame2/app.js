// doc
const gameCanvas = document.querySelector('#gameCanvas');
const context = gameCanvas.getContext('2d');

// ball related 
let x = gameCanvas.width / 2;
let y = gameCanvas.height - 30;
const dx = 2;
const dy = -2;
// draw the ball 
function drawBall() {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
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

}

setInterval(paint, 10); //run every 10miliseconds