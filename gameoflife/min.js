const xCount = 100;
const yCount = 100;
const mod = 10;
var gameOfLife;

var t = 0;

function setup() {
    createCanvas(xCount * mod, yCount * mod);
    this.gameOfLife = new GameOfLife();
    this.gameOfLife.init(-1,xCount,yCount);
}

function draw() {
    background(250);
    this.gameOfLife.nextGen();
    this.gameOfLife.draw();
    console.log("Gen: " + t++);
}