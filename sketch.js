const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg;
function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world
  polygon = Bodies.circle(50,200,20,{restitution:0.8,friction:1,density:10});
  World.add(world,polygon);
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  rope = new Rope(polygon,{x:100,y:300});

  block1 = new Block(580,275,30,40);
  block2 = new Block(400,275,30,40);
  block3 = new Block(430,275,30,40);
  block4 = new Block(460,275,30,40);
  block5 = new Block(490,275,30,40);
  block6 = new Block(520,275,30,40);
  block7 = new Block(550,275,30,40);

  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);

  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);

  block16 = new Block(490,155,30,40);

  block17 = new Block(730,135,30,40);
  block18 = new Block(760,135,30,40);
  block19 = new Block(790,135,30,40);
  block20 = new Block(820,135,30,40);
  block21 = new Block(850,135,30,40);

  block22 = new Block(760,95,30,40);
  block23 = new Block(790,95,30,40);
  block24 = new Block(820,95,30,40);

  block25 = new Block(790,55,30,40);

  stand1 = new Ground(490,303,275,10);
  stand2 = new Ground(790,163,195,10);
  ground = new Ground(600,400,1200,10)
  
}
function draw(){
  background("brown");
  Engine.update(engine)
  var pos = polygon.position;
  var angle = polygon.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(polygonImg,0,0,50,50);
  pop();
  rope.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("green")
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display();
  fill("blue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("pink");
  block22.display();
  block23.display();
  block24.display();
  fill("green");
  block25.display();
  stand1.display();
  stand2.display();
  ground.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon,{x:50,y:200});
    rope.attach(polygon);
  }
}