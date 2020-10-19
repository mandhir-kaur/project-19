var gameState="play";
var banana,bananai;
var stone,stonei; 
var monkey,monkeyi;
var jungle,junglei;
var ground,obstacleGroup,bananaGroup;
var score=0;

function preload(){
   bananai=loadImage("banana.png");
  monkeyi=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  stonei=loadImage("obstacle.png");
  junglei=loadImage("jungle.png");
  
  
}

function setup() {
  createCanvas(600, 600);
  
     
  
 jungle=createSprite(300,300);
 jungle.addImage(junglei);
 
  
   monkey=createSprite(80,515,20,20);
  monkey.addAnimation("moving",monkeyi);
  monkey.scale=0.1;
  
   ground=createSprite(400,550,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  ground.x=jungle.x;
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
   score=0;
    
}

function draw() { 
  background(54);
  jungle.velocityX=-4; 
  if(jungle.x<150){
     jungle.x=400;
     } 
     
  if(gameState==="play"){
     if (ground.x < 0){
      ground.x = ground.width/2;
   
    } 
  
  monkey.collide(ground);
    ground.visible=false;
  if(keyDown("space")){
    
     monkey.velocityY=-12;
     
     }
  
  monkey.velocityY = monkey.velocityY + 0.8; 
  
  if (bananaGroup.isTouching(monkey)){
    switch(score){
      case 1:monkey.scale=0.12;
        break;
        case 2:monkey.scale=0.14;
        break;
        case 3:monkey.scale=0.16;
        break;
        case 4:monkey.scale=0.18;
        break;
        default:break;
    }
          
   
      bananaGroup.destroyEach();
      score=score+3;
     }
  
      
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
     score=score-2;
     }
    if(score===-4){
      monkey.destroy();
      bananaGroup.destroyEach();
      bananaGroup.velocityX=0;
      obstacleGroup.destroyEach();
      obstacleGroup.velocityX=0;
      jungle.visible=false;
      gameState="end";
       }
      
  bananas();
  obstacle();
    
    
     }
  
  if(gameState==="end"){
     
      textSize(40);
     fill("green");
     text("GAMEOVER",200,250);
     
     }
 
  
  
  
 
  drawSprites();
   stroke("aqua");
     textSize(25);
     fill("lavender");
     text("score:"+score,50,50);
  
}

function bananas(){
  if(frameCount % 380 ===0){
  banana=createSprite(550,550,10,10);
  banana.y = Math.round(random(320,400));
  banana.velocityX=-2.5;
  banana.addImage(bananai);
  banana.scale=0.15;
  banana.lifetime=400;
  bananaGroup.add(banana);
  }  
}

function obstacle(){
  
  if(frameCount%450===0){
   stone=createSprite(550,520,10,10);
   stone.velocityX=-2.5;
   stone.addImage(stonei);
   stone.scale=0.12;
   stone.lifetime=400;
   obstacleGroup.add(stone);
}
}








