var path,boy,cash,diamonds,jwellery,sword, gameOver;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4 + treasureCollection/10;




//creating boy running
boy = createSprite(width/2,height-50,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;


  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  gameOver=createSprite(width/2,height/2)
  gameOver.addImage(endImg)
  gameOver.visible=false
  gameOver.scale=1.5
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+30;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+90

      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+15
      
    }else{
      if(swordGroup.isTouching(boy)) {
      gameState=0
      gameOver.visible=true
     
     // swordGroup.destroyEach()
    }
  }
  
  drawSprites();
  textSize(20);
  stroke("red")
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }
  

}

function createCash() {
  if (World.frameCount % 180 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3+ treasureCollection/20 ;
  cash.lifetime = height;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 220 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3+ treasureCollection/20 ;
  diamonds.lifetime = height;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 150 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3 + treasureCollection/20 ;
  jwellery.lifetime = height;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 230 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3+ treasureCollection/20 ;
  sword.lifetime = height;
  swordGroup.add(sword);
  }
}