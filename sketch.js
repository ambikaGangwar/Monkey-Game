
var monkey , monkey_running
var banana ,bananaImage, obstacles,obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //createCanvas(600,600);
  

   monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   
  
  var survivalTime=0;
  
  
 
  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
 background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
     } 
  monkey.velocityY=monkey.velocityY+0.8;
   monkey.collide(ground);
  
     stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,50);
  
  
  food();
  obstacles();
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("SCORE:"+ score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
}

function food(){
  if(World.frameCount%80===0){
     fruit=createSprite(400,200,20,20);
     fruit.addImage(bananaImage);
     fruit.y=Math.round(random(120,200));
     fruit.velocityX=-(8+(score/10));
     fruit.lifetime=50;
    fruit.scale=0.1;
      
    bananaGroup.add(fruit);
   }
  
}
function obstacles(){
  
    
   if(frameCount%300===0){
     obstacle=createSprite(800,320,10,40);
     obstacle.addImage(obstacleImage);
     //obstacle.y=Math.round(random(10,100));
     obstacle.velocityX=-6;
     obstacle.scale=0.15;
      obstacle.lifetime=100;
     
     obstaclesGroup.add(obstacle);
     
    
   }
}



