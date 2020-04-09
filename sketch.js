
var fixedRect;
var movingRect;



function setup() {
createCanvas(800,400);
fixedRect= createSprite(300,100,20,100);
fixedRect.shapeColor= "green";
movingRect= createSprite(730,160,100,20);
movingRect.shapeColor= "green";
movingRect.debug= true;
fixedRect.debug= true;
}

function draw() {
  background(0,0,0);  
  movingRect.x= mouseX;
  movingRect.y= mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.y- movingRect.y < movingRect.height/2 + fixedRect.height/2&&
   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor= "red";
  fixedRect.shapeColor= "red";
}
else{
  movingRect.shapeColor= "green";
  fixedRect.shapeColor= "green";

}



console.log(movingRect.x - fixedRect.x);

  drawSprites();
}