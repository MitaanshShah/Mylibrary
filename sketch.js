var fixedSprite, movingSprite
var object

function setup() {
  createCanvas(2000,2000);
  fixedSprite = createSprite(400, 200, 50, 50);
  object = createSprite(400, 400, 50, 50);
  movingSprite = createSprite(200, 200, 50, 50);
  fixedSprite.shapeColor = 'green'
  movingSprite.shapeColor = 'yellow'
  object.shapeColor = 'red'
  object.velocityY = -5
  fixedSprite.velocityY = 5
}

function draw() {
  background(0); 
  bounceOff(object, fixedSprite)
  drawSprites();
}

