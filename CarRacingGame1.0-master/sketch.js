var canvas, backgroundImage;
var carArray = [];
var car1;
var car2;
var car3;
var car4;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
}
