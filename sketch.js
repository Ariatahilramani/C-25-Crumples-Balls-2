
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1;
var box2;
var box3;
var ball;


function setup() {
	createCanvas(1000, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;



	
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);



	box1= new Box(800,320,160,160);
	box2= new Box(780,340,20,160);
	box3= new Box(800,330,20,160);
	ball= new Ball(200,300,50,50);

	

  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("pink");
  rect(ground.position.x,ground.position.y, 2000,20);

	

  
  box2.display();
  box3.display();
  box1.display();
  ball.display();
  
   



  drawSprites();

}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:160,y:-120});
	}
}


