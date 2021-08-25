var bomb;
var bombImg;
var coin;
var coinimg;
var drink;
var drinkImg;
var boy;
var boy_running;
var path;
var pathImg;

function preload(){
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  drinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  boy = createSprite(250,350,30,30);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.05;
  //create sprites here
}
function draw() {
  background("white");
  if(path.y > 400 ){
    path.y = height/2;
  }
  boy.x = World.mouseX
  drawSprites();
}
