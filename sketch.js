var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;

var options;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	var boxposition = width/2-100;
	var boxY = 610;


	engine = Engine.create();
	world = engine.world;
	options = {
		isStatic:true,restitution:0.5
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);

	World.add(world, packageBody);
	
	box1 = new Box(380,645,280,30);
	box2 = new Box(255,580,30,100);
	box3 = new Box(505,580,30,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode == DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
		console.log("yo");
	}
}
