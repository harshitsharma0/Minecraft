const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var steve,steve_Img;
var obstaclegroup;

function preload(){
    bg = loadImage("background Images/background 1.jpg")
    bg2= loadImage("background Images/background2.jpg")
    bg3= loadImage("background Images/background3.jpg")
    bg4 = loadImage("background Images/background4.jpg")
    bg5 = loadImage("background Images/background5.png")
    bg6 = loadImage("background Images/background6.jpg")
    steve_Img=loadImage("background Images/Steve.png")

    mon1=loadImage("background Images/Skeleton.jpg")
    mon2=loadImage("background Images/Creeper.png")
    mon3=loadImage("background Images/Gast.jpg")
    mon4=loadImage("background Images/Herobrime.jpg")
    mon5=loadImage("background Images/Enderdragon.jpg")
}

function setup(){
   createCanvas(1200,800)
   engine=Engine.create()
   world=engine.world;

  

   steve=createSprite(400,400)
   steve.scale=0.5
   steve.addImage(steve_Img)

   obstaclegroup=new Group()


   bomb=createSprite(0,0,20,20)
   bomb.shapeColor="black"
  

}

function draw(){
    background(bg);
    Engine.update(engine);
    

    steve.velocityX=0
    steve.velocityY=0
    if(steve.x>1200){
        b2=createSprite(600,400)
        b2.addImage(bg2)
        b2.scale=5
        steve.x=600
        steve.y=400
        b2.depth=steve.depth
        steve.depth=steve.depth+1
        

    }
    if(steve.x<0){
        b5=createSprite(600,400)
        b5.addImage(bg5)
        b5.scale=2
        steve.x=600
        steve.y=400
        b5.depth=steve.depth
        steve.depth=steve.depth+1
        

    } 
    if(steve.y>800){
        b3=createSprite(600,400)
        b3.addImage(bg3)
        b3.scale=5
        steve.x=600
        steve.y=400
        b3.depth=steve.depth
        steve.depth=steve.depth+1
    }
    if(steve.y<0){
        b4=createSprite(600,400)
        b4.addImage(bg4)
        b4.scale=1
        steve.x=600
        steve.y=400
        b4.depth=steve.depth
        steve.depth=steve.depth+1
    }
    if(keyDown("up_arrow")){
        steve.velocityY=-4;
        steve.velocityX=0;

    }

    if(keyDown("down_arrow")){
        steve.velocityY=4;
        steve.velocityX=0;

    }
    if(keyDown("right_arrow")){
        steve.velocityY=0;
        steve.velocityX=4;

    }
    if(keyDown("left_arrow")){
        steve.velocityY=0;
        steve.velocityX=-4;

    }
    if(obstaclegroup.isTouching(steve)){
        obstaclegroup.destroyEach();

    }
   obstacle();
   if(keyDown("space")){
       steve.velocityX=1
       steve.velocityY=1
       bomb.velocityX=1
       bomb.velocityY=1
    bomb.x=steve.x+2
    bomb.y=steve.y
    bomb.velocityX=steve.velocityX
    bomb.velocityY=steve.velocityY
    steve.depth+=1
    bomb.depth+=1

}

  
  
    drawSprites()
}

function obstacle(){
    if(frameCount%150===0){

    
    obstacles=createSprite(random(10,1000),random(10,800),50,50)
    obstacles.scale=0.1
    
    var rand =Math.round(random(1,5))
    switch(rand){
        case 1:obstacles.addImage(mon1)
        break
        case 2:obstacles.addImage(mon2)
        break
        case 3:obstacles.addImage(mon3)
        break
        case 4:obstacles.addImage(mon4)
        break
        case 5:obstacles.addImage(mon5)
        break
        default:break;

    }

    obstaclegroup.add(obstacles)
    
    }
}




