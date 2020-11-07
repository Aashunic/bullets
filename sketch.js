var car,wall,speed,weight,thickness;

function setup() {
 createCanvas(1000,600);

 speed=random(100,300);
 weight=random(30,50);
thickness=random(20,80);

 bullet= createSprite(50, 300, 30, 10);
 bullet.velocityX=speed;
 bullet.shapeColour = color(255);

 wall = createSprite( 900, 300, thickness, 500 );
 wall.shapeColour = color(255);
}

function draw() {
  background(255,255,255);   
  if (hasCollided (bullet,wall))
  { 
    bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10)
      { 
        wall.shapeColor = color(255,0,0);
       } 
       else if(damage<10)
       {
          wall.shapeColor = color(0,255,0);
         }
         }
  drawSprites();


  if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage>10)
{
wall.shapeColor=color(0,255,0);
}
}
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.X+lbullet.width;
  wallLeftEdge=lwall.X;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}