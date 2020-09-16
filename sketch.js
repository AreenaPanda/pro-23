var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	block1=new Block(400,650,200,20);
	block2=new Block(490,595,20,100);
	block3=new Block(310,595,20,100);
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 text(mouseX+","+mouseY,mouseX,mouseY);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  block1.display();
  block2.display();
  block3.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode=== LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody,translation);
	}
	else{
    if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody , false);
	}
	
	else{
    if(keyCode=== RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:+20,y:0}
	Matter.Body.translate(packageBody,translation);
	}
	}
	
  
    }
}


