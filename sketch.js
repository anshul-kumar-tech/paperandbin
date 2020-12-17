
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,box

function preload()
{
	paper.png
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,680,800,20);
	paper = new Paper(400,500,60);
	box = new Box(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  paper.display();
  box.display();

  drawSprites();
 
}



