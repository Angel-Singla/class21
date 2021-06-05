var fixedRect, movingRect, O1, O2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  O1 = createSprite(200, 500, 50, 80);
  O1.shapeColor = "green";
  O1.debug = true;
  O2 = createSprite(100,300,80,30);
  O2.shapeColor = "green";
  O2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}
