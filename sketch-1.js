var survivalTime=0;
var score=0;
var a;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,bananaGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  obstacleGroup=createGroup();
  bananGroup=createGroup();
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw() {
  background("#82EEFD");
  
a=createSprite(200,200,20,20);
a.velocityX=-1;

   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
   
  if(keyDown("space")){
    
     monkey.velocityY=-12;
    
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(bananaGroup.isTouching(monkey)){
     score = score+2;
     bananaGroup.destroyEach();
     
     }
  
  if(obstacleGroup.isTouching(monkey)){
     score = score-2;
     obstacleGroup.destroyEach(); 
     }

  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,310,40);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,20,40);
  
  
  
  
  obstacles();
  bananas();
  drawSprites();
}
 

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(390,345,10,10);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -(1.5+ score/20 );
   obstacle.scale=0.12;
   obstacle.collide(ground);
   obstacle.lifetime=400;
    
  obstacleGroup.add(obstacle);
    }
    }

function bananas(){
  
  if(frameCount % 150 ===0){
  var banana=createSprite(390,250,10,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX=-(1+score/10);
  banana.scale=0.1;
  banana.lifetime=400;
  bananaGroup.add(banana);
}
 
  
}





