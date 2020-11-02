var wall,Thickness;

var bullet,Speed,width,Weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(400, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="black";

  wall=createSprite(1200,200,thickness,300);
  wall.shapeColor="grey";
}

function draw() {
  background(255,255,255);

if (hascollided(bullet,wall) ) {

 bullet.velocityX=0;
 var damage=0.5*Weight*Speed*Speed/(Thickness*Thickness*Thickness);
  if (damage<10) {
     wall.shapeColor="green" ;
   }

  if (damage>10) {
     wall.shapeColor="red";  
   }
  

}
  drawSprites();
}

function hascollided(lbullet,lwall) {
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
  return true;
  }
  return false;
  
}

