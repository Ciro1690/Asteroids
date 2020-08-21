const Game = require("./game");
const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

window.Asteroid = Asteroid;
window.MovingObject = MovingObject;
window.Game = Game;

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
   
    const game = new Game();
});

