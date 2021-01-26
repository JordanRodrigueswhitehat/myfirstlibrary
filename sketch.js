var movingRect, fixecRect;

var gobj1; gobj2, gobj3, gobj4;
function setup() {
  createCanvas(800,800);
  movingRect=createSprite(100, 100, 50, 60);
  fixedRect = createSprite(200,200,80,70);

  gobj1 = createSprite(50,50,30,30);
gobj2 = createSprite(150,60,40,40);
gobj3 = createSprite(250,70,50,50);
gobj4 = createSprite(600,80,60,60);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug =true;
  fixedRect.debug =true;

  gobj3.velocityX = 3;
  gobj4.velocityX = -3
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

 isTouching(movingRect, gobj2);

bounceOff(gobj3,gobj4);
  drawSprites();
}

