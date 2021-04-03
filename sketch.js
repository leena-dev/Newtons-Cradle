
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plate = new Plate(375,200,200,40); 
	
	//Create the Bodies Here.
    bob1 = new Bob(300,500,20); 
	bob2 = new Bob(340,500,20); 
	bob3 = new Bob(380,500,20); 
	bob4 = new Bob(420,500,20); 
	bob5 = new Bob(460,500,20); 

	rope1 = new Rope(bob1.body,plate.body,-80,0); 
	rope2 = new Rope(bob2.body,plate.body,-40,0); 
	rope3 = new Rope(bob3.body,plate.body, 0,0); 
	rope4 = new Rope(bob4.body,plate.body, 40,0); 
	rope5 = new Rope(bob5.body,plate.body, 80,0); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  plate.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-50});
	}
}

