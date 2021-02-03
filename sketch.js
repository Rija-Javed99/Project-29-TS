const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//create variables- ball, ground, holder,2 stands, slingshot



var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  
  //create stands
  
  
  
 
  //create 16 blocks for 1st atnd

  //set 2 of 9blocks for second stand
 
 

 
  
  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

//create slingshot
  
  

}
function draw() {
  background(56,44,44); 
 

  //set text Drag the Hexagonal Stone and Release it, to launch it towards the blocks

  
  strokeWeight(2);
  stroke(15);
  
  
  fill("skyblue");
 //display 7 blocks in the color above
  
  
  fill("pink");
  //display8-12 blocks in above color
  
  
  
  fill("turquoise");
 //display 13-15 blocks in the above color
  
  
  
  fill("grey");
  //display 16th block
  
  
  
  fill("skyblue");
//display 1-5 blocks of second stand\
  
  
  fill("turquoise");
  //display6-8 blocks
  
  
  fill("pink")
 //display 9th block
  
  
  
  fill("gold");
  
 //set image mode and polygon position

  slingShot.display();
}

