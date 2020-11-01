const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  Pranavengine, Pranavworld;
var ground;
function setup() {
  createCanvas(400,400);

  Pranavengine = Engine.create();
  Pranavworld = Pranavengine.Pranavworld;

  ground = Bodies.rectangle(200,390,200,20);
World.add(Pranavworld,ground);
}

function draw() {
  background(0);
  Engine.update(Pranavengine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}