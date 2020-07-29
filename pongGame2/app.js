// doc
const gameCanvas = document.querySelector('#gameCanvas');
const context = gameCanvas.getContext('2d');

// test 
context.beginPath();
context.rect(20, 40, 50, 50);
context.fillStyle = '#ff0000';
context.fill();
context.closePath();

context.beginPath();
context.arc(240, 160, 20, 0, Math.PI * 2, false);
context.fillStyle = "green";
context.fill();
context.closePath();

context.beginPath();
context.rect(160, 10, 100, 40);
context.strokeStyle = "rgba(0, 0, 255, 0.5)";
context.stroke();
context.closePath();