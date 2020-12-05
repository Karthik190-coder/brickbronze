var frontcover, frontcoverimg;
var Background1,Background1img;
var Background2,Background2img
var Background3,Background3img;
var button1,button1img;
var button2,button2img;
var button3,button3img;
var button4,button4img;
var button5,button5img;
var button6,button6img;
var button7,button7img;
var button8,button8img;
var button9,button9img;
var ground;
var player;
var obstacle,obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var hope, hope1, hope2,hope3,hope4,hope5,hope6,hopesGroup;
var gamestate="scene0";

function preload(){
  
 Background1img=loadImage("Pics/backgroundimg1.jpeg") 
 Background2img=loadImage("Pics/backgroundimg2.jpg") 
 Background3img=loadImage("Pics/backgroundimg3.jpeg") 
 button1img=loadImage("Pics/Play.png")
 button2img=loadImage("Pics/next.png")
 button3img=loadImage("Pics/back.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  obstaclesGroup=createGroup()
  
  
}

function draw() {
  background("green"); 
  // This is scene 0 where front cover will be applied
  if(gamestate==="scene0"){

    button1=createSprite(windowWidth/2,windowHeight/2)
    button1.addImage(button1img)
    button1.scale=0.25

    if(mousePressedOver(button1)){
      console.log("Goint to scene 1");

      gamestate="scene1"
    }
    
  }

  //this is scene 1 where the car accident is depicted and next button is displayed
  if(gamestate==="scene1"){

    Background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background1.addImage(Background1img)
    Background1.scale=1.5
    button2=createSprite(windowWidth-80,windowHeight-80)
    button2.addImage(button2img)
    button2.scale=0.25

    if(mousePressedOver(button2)){
      console.log("Goint to scene 1.1");
      
      //Background1.destroy();
      gamestate="scene1.1"
    }
  }
  
// this is scene 1.1 where gravyard scene is depicted and has next/back both buttons
  if(gamestate==="scene1.1"){

    Background2=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background2.addImage(Background2img)
    Background2.scale=2.0

    
    button=createSprite(windowWidth-80,windowHeight-80)
    button3.addImage(button2img)
    button3.scale=0.25

    button5=createSprite(90,windowHeight-80)
    button5.addImage(button3img)
    button5.scale=0.20

    if(mousePressedOver(button4)){
      console.log("Goint to scene 1.2");

      gamestate="scene1.2"
    }
    if(mousePressedOver(button5)){
      console.log("Goint to scene 1");

      gamestate="scene1.2"
    }
  }
  
  if(gamestate==="scene1.2"){

    Background3=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background3.addImage(Background2img)
    Background3.scale=2.0

    button2.visible=true;
    button3=createSprite(90,windowHeight-80)
    button3.addImage(button3img)
    button3.scale=0.20

    if(mousePressedOver(button2)){
      console.log("Goint to scene 1.3");

      gamestate="scene2"
    }
    if(mousePressedOver(button3)){
      console.log("Goint to scene 1.1");

      gamestate="scene1.1"
    }
  }
  if(gamestate = infiniterunner){
    player=createSprite(20,20,50,50)
   ground=createSprite(windowWidth/2,windowHeight-20,windowWidth,30)
   ground.velocityX=-3
   if(ground.x<0){
    ground.x=windowWidth/2
   }
   if(keyDown("Space")){
     player.velocityY=-3;

   }
   player.velocityY=player.velocityY+0.5;


Hope();
obstacles();
    
  }



  drawSprites();
}
function Hope(){
  if(frameCount%50===0){
    hope=createSprite(30,30,20,20)
    hope.velocityX=-2 
    hope.y=Math.round(random(ground.y-200,ground.y ))
    var rand= Math.round(random(1,6))
    switch(rand){
    case 1:hope.addImage(hope1)
    break;
    case 2:hope.addImage(hope2)
    break;
    case 3:hope.addImage(hope3)
    break;
    case 4:hope.addImage(hope4)
    break;
    case 5:hope.addImage(hope5)
    break;
    case 6:hope.addImage(hope6)
    break;
    default:
    break;
    
    }
    hopesGroup.add(hope)
    

}
function obstacles(){
  if(frameCount%50===0){
  obstacle=createSprite(30,30,20,20)
  obstacle.velocityX=-2 
  obstacle.y=Math.round(random(ground.y-200,ground.y ))
  var rand= Math.round(random(1,6))
  switch(rand){
  case 1:obstacle.addImage(obstacle1)
  break;
  case 2:obstacle.addImage(obstacle2)
  break;
  case 3:obstacle.addImage(obstacle3)
  break;
  case 4:obstacle.addImage(obstacle4)
  break;
  case 5:obstacle.addImage(obstacle5)
  break;
  case 6:obstacle.addImage(obstacle6)
  break;
  default:
  break;

  }
  obstaclesGroup.add(obstacle)

  }

}