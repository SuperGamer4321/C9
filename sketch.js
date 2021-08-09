
var box;


function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20);

}
function draw() 
{
 background("black");
if(keyIsDown(RIGHT_ARROW)){
  box.x = box.x+4
} 
if(keyIsDown(LEFT_ARROW)){
  box.x = box.x-4
} 
if(keyIsDown(UP_ARROW)){
  box.y = box.y-4
} 
if(keyIsDown(DOWN_ARROW)){
  box.y = box.y+4
} 
drawSprites()

}




