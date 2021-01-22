var fruitsGroup;
var banana,bananaImg;
var avacado,avacadoImg;
var apple,appleImg;
var cherry,cherryImg;
var mango,mangoImg;
var carrot,carrotImg;
//var dog , dogImg;
var boy, boy_running;
var ground;
var cheetah, cheetahImg;
var bear, bearImg;
var jaguar, jaguarImg;
var strength = 100;

function preload(){
  jungleImg = loadImage('jungl.jpg');
  mangoImg = loadImage('mango.png');
  bananaImg = loadImage('banana.png');
  dogImg = loadImage("dog1.png");
  appleImg = loadImage("apple.png");
  avacadoImg = loadImage('avacado.png');
  cherryImg = loadImage('cherry.png');
  carrotImg = loadImage('carrot.png');
  boy_running = loadAnimation("boy3.png","boy2.png","boy1.png");
  cheetahImg = loadImage("cheetah.png");
  bearImg = loadImage("bear.png");
  jaguarImg = loadImage("jaguar.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight-300);
  background = createSprite(0,displayHeight/2-300, displayWidth/2*5, displayHeight);
  background.addImage('set',jungleImg);
       background.x = background.width/2;
  background.scale = 1;
     background.velocityX = -3;
  boy = createSprite(displayWidth-1300,displayHeight-650,100,100);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.3;
  ground = createSprite(displayWidth-1300,displayHeight-620,5,5);
  ground.visible = false;
}

function draw(){
  
    if (background.x < 30){
      background.x=background.width/2
    }
    animals();
    fruits();

    //if(fruitsGroup.isTouching(boy)){
    //    strength = strength+11;
    //}

    if(keyDown("space")&& boy.y > displayHeight-750){
        boy.velocityY = -17;
    }
    boy.velocityY = boy.velocityY+0.8;
    boy.collide(ground);

    text("L I F E = "+strength,displayWidth-100,displayHeight-580);
  
  drawSprites();
}

function animals(){
    if(frameCount%1000 === 0){
        dog = createSprite(1000,displayHeight/2-210,10,10);
        dog.velocityX = -3;
        dog.scale = 0.2;

        var rand = Math.round(random(1,6))
        switch(rand){
            case 1:dog.addImage(dogImg);
            break;

            case 2:dog.addImage(cheetahImg);
            dog.scale = 1;
            break;

            case 3:dog.addImage(bearImg);
            dog.scale = 1;
            break;

            case 4:dog.addImage(jaguarImg);
            dog.scale = 1;
            break;

            case 5:dog.addImage(dogImg);
            //dog.scale = 1;
            break;

            case 6:dog.addImage(dogImg);
            //dog.scale = 1;
            break;
            
            default: break;
        }
    }
}

function fruits(){
  if(frameCount%600 === 0){
      fruit = createSprite(1000,displayHeight/2-350,10,10);
      fruit.velocityX = -2;
      fruit.scale = 0.025;

      var rand = Math.round(random(1,6))
      switch(rand){
          case 1:fruit.addImage(bananaImg);
          break;

          case 2:fruit.addImage(appleImg);
          fruit.scale = 0.4;
          break;

          case 3:fruit.addImage(cherryImg);
          fruit.scale = 0.4;
          break;

          case 4:fruit.addImage(avacadoImg);
          fruit.scale = 0.4;
          break;

          case 5:fruit.addImage(mangoImg);
          fruit.scale = 0.4;
          break;

          case 6:fruit.addImage(carrotImg);
          fruit.scale = 0.4;
          break;
          
          default: break;
      }
       // fruitsGroup.add(fruit);
  }
}