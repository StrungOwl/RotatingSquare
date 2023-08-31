//Creates a geometric drawing 

let s = 100;
let sSpeed = 2;
let r = 0; //radians for rotating

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  background(220);
}

function draw() {
    
  //background(220);

  
  fill(255, 0.3); //fill with a transparent color  
  stroke(0, 10); //not sure why the stroke is diff from fill
  
  translate(width/2,height/2);
  rotate(radians(r));
  square(0, 0, s);
  
  s += sSpeed; 
  
  if(s >= height || s >= width){
     sSpeed = -sSpeed;  
     }
  if(s <= 100){ //NEED TO ADD THIS! WHEN REACH 0 IT WILL FAIL 
     sSpeed = -sSpeed;  
     }
  
  r += 1; 
}