var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup(){
createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet = createSprite(50,200,50,5);
bullet.shapeColor="white"
bullet.debug=true;

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor="gray";
wall.debug=true;

bullet.velocityX=speed;
}

function draw(){
background(0);

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 *weight * speed* speed/(thickness *thickness *thickness);
 
if(damage>10)
{
wall.shapeColor="red";
}
if(damage<10)
{
wall.shapeColor="green";
}
}

drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;
}