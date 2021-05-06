const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ice=[];
var maxSnow=50;
var sprite,spriteImg;
var bgMusic;


function preload(){
  bg = loadImage("snow2.jpg");
  spriteImg = loadAnimation("santa.png","santa2.png","santa3.png");
  bgMusic = loadSound("Music.mp3");
}

function setup() {
  createCanvas(1300,600);


  engine = Engine.create();
  world = engine.world;

  bgMusic.loop();

  sprite = createSprite(200,520,50,50);
  sprite.addAnimation("name",spriteImg);
  sprite.scale=0.6;
  

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);


  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    

  
  drawSprites();

}