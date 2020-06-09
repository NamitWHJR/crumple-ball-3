var paper,ground,zone1,zone2,zone3, sling
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload(){
	zone1IMG = loadImage("bin.png");

	
	

}



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	


	engine = Engine.create();
	world = engine.world;

	
	
	zone1 = new Ground(650,640,200,20)
	zone2 = new Ground2(750,600,40,225)
	zone3 = new Ground2(550,600,30,225)



	paper = new Paper(100,200, 50)

	sling = new Slingshot(paper.body,{x:200,y:500})
	

//zone1 = Bodies.rectangle(400,600,75,20,{isStatic:true} )
//world.add(world,zone1)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //var pos = paper.body.position

	 //paper = Bodies.circle(pos.x,pos.y,50)
	 //World.add(world,paper)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
 
  zone1.display();	
  zone2.display();
  zone3.display();

  paper.display();

  sling.display();
  
  
  imageMode(CENTER);
  image(zone1IMG, 650, 550, 235, 250);

  
 
  drawSprites();

  
  

  
 
}

//function keyPressed() {

	//if (keyCode === UP_ARROW){
	
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-300});
	//}
	
	
	
	  //}



function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY})
	
	}
	
	function mouseReleased(){
		sling1.fly()
		
		}
		