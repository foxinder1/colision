var rex,gt






function setup() {
  createCanvas(1200,800);
  rex = createSprite(600, 400, 50, 80);
  rex.shapeColor="blue"
rex.debug=true
  gt = createSprite(400, 200, 80, 30);
gt.debug=true
gt.shapeColor="black"

}

function draw() {
  background(255,255,255);  
  gt.x=World.mouseX
  gt.y=World.mouseY
  

  if(gt.x - rex.x < rex.width/2 + gt.width/2&&rex.x-gt.x<rex.width/2+gt.width&&gt.y - rex.y < rex.height/2 + gt.height/2&&rex.y-gt.y<rex.height/2+gt.height)
  { gt.shapeColor = "red"; rex.shapeColor = "red"; }
   else { gt.shapeColor = "green"; rex.shapeColor = "green"; }
  

  
  drawSprites();



}