const Util = require("./util");
const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object")

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.randomPosition = function () {
    var randomX = Math.floor(Math.random() * Game.DIM_X);
    var randomY = Math.floor(Math.random() * Game.DIM_Y);
    return [randomX, randomY];
}

Game.prototype.add = function add(object) {
    if(object instanceof Asteroid) {
        this.asteroids.push(object);
    }
}

Game.prototype.addAsteroids = function() {
    for(i=0; i < Game.NUM_ASTEROIDS; i++) {
        const ast = new Asteroid({pos : this.randomPosition()});
        this.asteroids.push(ast);
        this.asteroids[i].draw();
    }
}

Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ships, this.asteroids, this.bullets);
};

Game.prototype.draw = function draw(ctx) {

    this.allObjects().forEach(function (object) {
        object.draw(ctx);
    });
};

Game.prototype.moveObjects = function moveObjects(ctx) {
    this.allObjects().forEach(function (object) {
        object.move(ctx);
    });    
}

module.exports = Game;