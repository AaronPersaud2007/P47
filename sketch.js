var bg,bgImg;
var player, carImg;
var gasoline, gasolineImg, gasolineGroup
var tire, tireImg, tireGroup 

var gameState = "drive"

function preload(){
  
  carImg = loadImage("car.png")

  bgImg = loadImage("bg.png")
  tireImg= loadImage("tires.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(1100,600,20,20)
bg.addImage(bgImg)
bg.scale = 5
  

//creating the player sprite
player = createSprite(300, displayHeight-300, 100, 100);
 player.addImage(carImg)
 player.scale = 0.7
   player.setCollider("rectangle",50,0,400,100)
   player.debug = true

  

 invisibleGround = createSprite(windowWidth/2,windowHeight-30,windowWidth,10);
  invisibleGround.visible = false;


  tireGroup = new Group();
}



function createtires(){
  if (frameCount % 200 === 0){

    

    tire = createSprite(width/2 + 300,displayHeight-200, 30,30);
    tire.addImage(tireImg)
    tire.debug = true
    tire.scale = 0.3
    tire.velocityX = -12
    tire.lifetime = 400
   tireGroup.add(tire)
  }
}
function draw() {

  background(0); 
  background("skyBlue")
  if(gameState == "drive"){
  bg.velocityX = -12



if(keyDown("space")&& player.y >= windowHeight-300){
  player.y = player.y-30
}

player.velocityY = player.velocityY + 0.2

if (bg.x < 600){
  bg.x = windowWidth-1075;
}

    if(tireGroup.isTouching(player)){
 

      for(var i=0;i<tireGroup.length;i++){     
           
       if(tireGroup[i].isTouching(player)){
            tireGroup[i].destroy()
            gameState = "lost"
            }
          }
        }
player.collide(invisibleGround);
createtires();
drawSprites();

      } 
      if(gameState == "lost"){
  
        textSize(100)
        fill("red")
        text("You Lost ",windowWidth/2-250,windowHeight/2)

      } 
  }
