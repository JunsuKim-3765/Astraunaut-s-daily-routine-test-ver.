var astraunaut;

var bg;

var sleep, btush, gym, eat, drink, move;
function preload(){
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
eat=loadAnimation("images/eat1.png", "images/eat2.png");
drink=loadAnimation("images/drink1.png", "images/drink2.png");
move=loadAnimation("images/move.png", "images/move1.png");
bath=loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  astraunaut=createSprite(300, 230);
  astraunaut.addAnimation("astraunaut", sleep);
  astraunaut.scale=0.1;
}

function draw() {
  background(255,255,255);  

  if (keyDown("UP_ARROW")){
    astraunaut.addAnimation("astraunaut", brush);
  }
  if (keyDown("DOWN_ARROW")){
    astraunaut.addAnimation("astraunaut", gym);
  }
  if (keyDown("RIGHT_ARROW")){
    astraunaut.addAnimation("astraunaut", bath);
  }
  if (keyDown("LEFT_ARROW")){
    astraunaut.addAnimation("astraunaut", eat);
  }
  if (keyDown("M")){
    astraunaut.addAnimation("astraunaut", move);
  }
  if (keyDown("D")){
    astraunaut.addAnimation("astraunaut", drink);
  }
  if (keyDown("S")){
    astraunaut.addAnimation("astraunaut", sleep);
  }
  drawSprites();
}