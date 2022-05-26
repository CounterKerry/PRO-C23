
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

	//Crie os Corpos aqui.

	var ball_options = {
		restitution: 0.95,
		frictionAir: 0.01,
	}

	var ground_opitions = {
		
	}

	ball = Bodies.circle(100, 10, 20, ball_options);
	World.add(world, ball);

	ball2 = Bodies.circle(150, 10, 20, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(200, 10, 20, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(250, 10, 20, ball_options);
	World.add(world, ball4);

	ball5 = Bodies.circle(300, 10, 20, ball_options);
	World.add(world, ball5);

	ball6 = Bodies.circle(350, 10, 20, ball_options);
	World.add(world, ball6);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 20);
  ellipse(ball3.position.x, ball3.position.y, 20);
  ellipse(ball4.position.x, ball4.position.y, 20);
  ellipse(ball5.position.x, ball5.position.y, 20);
  ellipse(ball6.position.x, ball6.position.y, 20);

  drawSprites();
 
}



