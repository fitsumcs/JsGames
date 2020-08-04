// The DOM
const canves = document.querySelector('#gameCanvas');

const ctx = canves.getContext("2d");

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
    ctx.drawImage(bord, 0, 0);

}














let interval = setInterval(paint, 1000);