
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world,paper1,ground,dustbin1,dustbin2,dustbin3
function setup()
createCanvas(800, 700);
rectMode(CENTER)
{
engine = Engine.create();
world = Engine.world();
}
//Create the Bodies Here.
paper1 = new Paper(200,600,10);
ground = new Ground(800,600,1000,20);
dustbin1 = new Dustbin(1100,680,100,20);
dustbin2 = new Dustbin(1740,620,20,100);
dustbin3 = new Dustbin(1150,620,20,100);
groundObj = new Ground(width/2 , 670, width,20 );
leftside = new ground(1100,600,200,120);

function keyPressed ();
if(keyCode === UP_ARROW);

//write code here to applyForce on ball body
function vForse();
Matter.body.applyForse(ball,{x:0,y:0},{x:0,y:-0.05});

	groundObj.display();

	
	Engine.run(engine);	


	
	function draw()
	
	rectMode(CENTER);

	background(0);
  
 drawSprites();


 {
  
  
 
}



