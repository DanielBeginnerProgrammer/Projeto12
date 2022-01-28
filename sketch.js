var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  /*PASSEI DUAS HORAS DIGITANDO ISSO (comenta o appleImg("apple png") e descomenta o 
  appleImg(kisspng-scalable-vector-graphics-computer-icons-encapsulat-carrot-icons-539-free-vector-icons-page-2
  -5bf7ed962640b3.8567257715429748701567.jpg) para uma cenoura)*/
  
  //appleImg = loadImage("kisspng-scalable-vector-graphics-computer-icons-encapsulat-carrot-icons-539-free-vector-icons-page-2-5bf7ed962640b3.8567257715429748701567.jpg");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){ 
  createCanvas(400,400);
//background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating rabbit
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //chamando funções
   createApples();
   createRedLeafs();
   createOrangeLeafs()
   drawSprites()
}

function createApples() {
 if (frameCount%80===0){
 //criar maçãs
  apple = createSprite(200,-50,10,10);
  apple.x = Math.round(random(50,350));
  apple.y = Math.round(random(40,0));
  apple.addImage("caindo",appleImg);
  apple.scale = 0.05;
  apple.velocityY = 3
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
 /*if (rabbit.position.x === apple.position.x) {
  score = score + 10;
  apple.y = 2000;
}*/
}
}

function createRedLeafs() {
  if (frameCount%30===0){
  //criar folhas vermelhas
  redL = createSprite(200,100,10,10);
  redL.y = Math.round(random(50,100));
  redL.velocityY = 3; 
  redL.x = Math.round(random(50,350));
  redL.addImage("caindo",redImg);
  redL.scale = 0.05;
  redL.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
 }
 }

 function createOrangeLeafs() {
   if (frameCount%10===0){
   //criar folhas vermelhas
   orangeL = createSprite(200,100,10,10);
   orangeL.y = Math.round(random(50,100));
   orangeL.velocityY = 3; 
   orangeL.x = Math.round(random(50,350));
   orangeL.addImage("caindo",orangeImg);
   orangeL.scale = 0.05;
   orangeL.depth = rabbit.depth;
   rabbit.depth = rabbit.depth + 1;
 }
 }