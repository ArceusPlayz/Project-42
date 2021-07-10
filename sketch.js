var iss, issimage
var spacecraft1, spacecraft2, spacecraft3, spacecraft4
var spacecraft
var hasDocked = false




function preload(){
  issimage = loadImage("images/iss.png");
  spacebg = loadImage("images/spacebg.jpg");
  spacecraft1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spacecraft4.png");

}
function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.15;
  
  iss = createSprite(330, 130)
  iss.addImage(issimage)
  iss.scale = 0.7; 

}

function draw() {
  background(spacebg)
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if (keyDown( UP_ARROW)){
      spacecraft.y = spacecraft.y -2;
      spacecraft.addImage(spacecraft2)
    }
    if (keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y +2;
      spacecraft.addImage(spacecraft1)

    }
    if (keyDown( RIGHT_ARROW)){
      spacecraft.x = spacecraft.x +2;
      spacecraft.addImage(spacecraft3)
    }
    if (keyDown( LEFT_ARROW)){
      spacecraft.x = spacecraft.x -2;
      spacecraft.addImage(spacecraft4)
    }
    
    
  }
  end();
  drawSprites();

}

function end(){
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true; 
     textSize(25); 
     fill("white") 
     text("Docking Successful!", 200, 300);
     }
    
    }