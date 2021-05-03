
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,papers	
var world;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	papers=new paper(100,600,50)
	groundObject=new ground(width/2,670,width,2);
	Engine.run(engine);
	dustbinObj.depth = papers.depth + 1
}
function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  papers.display()
  dustbinObj.display();
  isToucing()
  console.log(papers.body.position.x,papers.body.position.y)
}
function isToucing(){
	if (keyWentDown("up_arrow")){
		Matter.Body.applyForce(papers.body,papers.body.position,{x:33,y:-200})
	}
}