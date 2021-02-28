
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(800,350,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  dustbinObj.display();
  ellipseMode(CENTER);
  paper.display();
  
 
  }


function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
		
	}
}
