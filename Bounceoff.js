var movingRect, fixecRect;
function setup() {
  createCanvas(800,800);
  movingRect=createSprite(100, 100, 50, 60);
  fixedRect = createSprite(200,200,80,70);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug =true;
  fixedRect.debug =true;

}

function draw() {
  background(0); 
  
 

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}