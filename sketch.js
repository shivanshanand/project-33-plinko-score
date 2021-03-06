const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var divisionheight=300;

var particles;
var turn=0;
var score=0;
var gameState="begin";

var plinkos=[];

function preload(){
  bgImg=loadImage("plinko bg.png")
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(width/2,height,width,20);

  for(var s=0; s<=width; s=s+80){
    divisions.push(new Divisions(s,height-divisionheight/2, 10, divisionheight));
}

for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,120,20))
 }
 
for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,185,20))
 }

 for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,250,20))
 }
 
for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,315,20))
 }
 
for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,380,20))
 }

}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  push();
  stroke("white");
  textSize(30);
  fill("black");
  text("Score:"+score,20,60);
  pop();

  push();
  stroke("black");
  fill("white");
  textSize(30);
  text(500,10,550);

  text(500,90,550);

  text(500,170,550);

  text(500,250,550);

  text(200,330,550);

  text(200,410,550);

  text(200,490,550);

  text(100,570,550);

  text(100,650,550);

  text(100,730,550);
  pop();

 // if(turn>=5 && particles.body.position.y>520){
   
  

    if(particles!=null){
      particles.display();
      if(particles.body.position.y>520){
        if(particles.body.position.x<300 && particles.body.position.x>1){
          score=score+500;
          particles=null;
          if(turn>=5){
             gameState="end"
          }
        }
      }
    }

    if(particles!=null){
      particles.display();
      if(particles.body.position.y>520){
        if(particles.body.position.x<510 && particles.body.position.x>350){
          score=score+200;
          particles=null;
          if(turn>=5){
             gameState="end"
          }
        }
      }
    }

    if(particles!=null){
      particles.display();
      if(particles.body.position.y>520){
        if(particles.body.position.x<760 && particles.body.position.x>550){
          score=score+100;
          particles=null;
          if(turn>=5){
             gameState="end";
          }
        }
      }
    }

  ground1.display();

  for(var s=0; s<divisions.length; s++){
    divisions[s].display();
  }

  for(var s=0; s<plinkos.length; s++){
    plinkos[s].display();
  }  

  if(gameState==="end"){
    fill("black");
    textSize(60);
    text("GAME OVER",220,250);
   }
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particles=new Particle(mouseX,10,10);
  }
}
