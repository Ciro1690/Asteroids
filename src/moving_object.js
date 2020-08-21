const Util = require("./util");

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function draw(ctx) {
    const canvas = document.getElementById("mycanvas");

    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function move(ctx) {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.draw();

}

module.exports = MovingObject;
