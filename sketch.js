var wall, thickness;
var bullet, speed, weight;


function setup ()
{
  createCanvas(1400,600);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2); 
  bullet=createSprite(100,250,40,10);

  speed=random(223,321)
  weight=random(30,52)
bullet.velocityX=speed;
}

function draw ()
{
  background("lightgray")
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if (damage>10)
    {
      wall.shapeColor="red";
    }

    if (damage<10)
    {
      wall.shapeColor="green";
    }
  }
  drawSprites ();
}

function hasCollided(bullet, wall)
{
bulletRightEdge= bullet.x + bullet.width;
wallLeftEdge= wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false 
}