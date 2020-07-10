const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  block1 = new box(600,580,1200,20);
  block2 = new box2(200,400,80,340);
  block3 = new box2(1000,400,80,340);
  block4 = new box3(400,480,250,160);
  block5 = new box3(800,480,250,160);
  block6 = new box3(600,400,650,50);
  block7 = new box3(600,200,880,40);
  block8 = new box2(300,160,20,40);
  block9 = new box2(350,160,20,40);
  block10 = new box2(400,160,20,40);
  block11 = new box2(450,160,20,40);
  block12 = new box2(500,160,20,40);
  block13 = new box2(550,160,20,40);
  block14 = new box2(600,160,20,40);
  block15 = new box2(650,160,20,40);
  block16 = new box2(700,160,20,40);
  block17 = new box2(750,160,20,40);
  block18 = new box2(800,160,20,40);
  block19 = new box2(850,160,20,40);
  block20 = new box2(900,160,20,40);

  block21 = new box3(600,120,600,40);
  block22 = new box2(600,300,400,50);
  block23 = new box2(440,350,40,50);
  block24 = new box2(760,350,40,50);

}

function draw() {
  background(0);  
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
}