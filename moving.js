var moving, fix;
var r1, r2;
function setup() {
  createCanvas(800, 400);
  moving = createSprite(200, 200, 50, 50);
  fix = createSprite(400, 200, 50, 50);
  r1 = createSprite(300, 300, 40, 60);
  r1.shapeColor = "green";
  r2 = createSprite(100, 100, 15, 15);
  r2.shapeColor = "green";
  moving.shapeColor = "green";
  fix.shapeColor = "green";
  moving.debug = true;
  fix.debug = true;

}
function draw() {
  background("skyblue");
  moving.y = mouseY;
  moving.x = mouseX;

  if (collisionDetect(moving, r1)) {
    moving.shapeColor = "red";
    r1.shapeColor = "red";
  }

  else {
    moving.shapeColor = "green";
    r1.shapeColor = "green";
  }


  drawSprites();
}
