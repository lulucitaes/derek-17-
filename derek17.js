var gameoverImage;
var restartImage;
var cactusGroup;
var cloudGroup;
var pisoInvisible;
var score = 0;
var play=1;
var end=0;
var gameState = play;
var cactusImage1;
var cactusImage2;
var cactusImage3;
var cactusImage4;
var cactusImage5;
var cactusImage6;

var piso;
var piso1;
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
piso1=loadImage("ground2.png");
cloudImage=loadImage("cloud.png")
cactusImage1=loadImage("obstacle1.png");
cactusImage2=loadImage("obstacle2.png");
cactusImage3=loadImage("obstacle3.png");
cactusImage4=loadImage("obstacle4.png");
cactusImage5=loadImage("obstacle5.png");
cactusImage6=loadImage("obstacle6.png");
gameoverImage=loadImage("gameOver.png");
restartImage=loadImage("restart.png");

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(100,50,20,50);
  trex.addAnimation("corriendo",trex_running);
  trex.scale=0.5;
  piso=createSprite(200,180,400,20);
  piso.addImage(piso1);
  piso.x = piso.width /2;
 pisoInvisible=createSprite(200,190,400,10);
 pisoInvisible.visible=false;
 cactusGroup=new Group();
 cloudGroup=new Group();
 gameover=createSprite(300,100);
 gameover.addImage(gameoverImage);
 restart=createSprite(300,140);
 restart.addImage(restartImage);
 restart.scale=0.5;
 trex.setCollider("rectangle",0,0,50,50);
 trex.debug=true;

}

function draw(){
  background("white")
  text("Score" + score,500,50);
  if (gameState===play){
    gameover.visible=false;
    restart.visible=false;
    if (keyDown("space")){trex.velocityY=-10;}
    piso.velocityX=-3;
    score=score+Math.round(frameCount/70)
    nubes();
    cactus();
    if (cactusGroup.isTouching(trex)){gameState=end;}

  }
  else if (gameState===end){
    piso.velocityX=0;
    trex.velocityY=0;
    cactusGroup.setVelocityXEach(0);
    cloudGroup.setVelocityXEach(0);
    gameover.visible=true;
    restart.visible=true;
  }




trex.velocityY=trex.velocityY+0.8
trex.collide(pisoInvisible);
if (piso.x<0){piso.x=piso.width/2;
}
drawSprites();
}

function nubes (){
  if(frameCount % 60 === 0) { 
    cloud = createSprite(600,100,40,10);
     cloud.addImage(cloudImage)
      cloud.y = Math.round(random(10,60))
       cloud.scale = 0.4; 
       cloud.velocityX = -3;
       cloud.lifetime=150
       cloudGroup.add(cloud);
       }
}
function cactus (){
  if(frameCount % 60 === 0) { 
 var cactus=createSprite(600,165,10,40);
 
 cactus.velocityX = -6;
cactus.lifetime=150
cactus.scale=0.5
var rand = Math.round(random(1,6));
 switch(rand)
 { case 1: cactus.addImage(cactusImage1);
   break;
   case 2: cactus.addImage(cactusImage2);
    break;
    case 3: cactus.addImage(cactusImage3); 
    break;
     case 4: cactus.addImage(cactusImage4); 
     break;
      case 5: cactus.addImage(cactusImage5);
       break;
       case 6: cactus.addImage(cactusImage6); 
       break; 
       default: break; }
       cactusGroup.add(cactus);
      
}
}