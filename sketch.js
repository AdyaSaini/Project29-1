const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground1, ground2;
//1
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
//2
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25

function preload(){
}

function setup() {
	createCanvas(1200, 350);
	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, 175, 1200, 5);
//1
    //level 3
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    //level 2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    //level 1
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    //top
    block16 = new Block(390, 155, 30, 40);

//2
    //level 2
    block17 = new Block(330, 235, 30, 40);
    block18 = new Block(360, 235, 30, 40);
    block19 = new Block(390, 235, 30, 40);
    block20 = new Block(420, 235, 30, 40);
    block21 = new Block(450, 235, 30, 40);

    //level 1
    block22 = new Block(360, 235, 30, 40);
    block23 = new Block(390, 235, 30, 40);
    block24 = new Block(420, 235, 30, 40);

    //top
    block25 = new Block(390, 235, 30, 40);

    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgray");

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  

  drawSprites();
}