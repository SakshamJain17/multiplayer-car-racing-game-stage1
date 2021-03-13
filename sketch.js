var database;
var form, player, game, playerCount;  
var gameState = 0;

function setup(){
  database = firebase.database();
  createCanvas(1900,800);

  game = new Game();
  game.start();
}

function draw(){
  background("blue")
  
}

