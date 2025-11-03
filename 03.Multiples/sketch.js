function setup() {
  createCanvas(windowWidth, windowHeight);
}

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [255, 105, 180,150]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  square(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200);
  }
}

function mouseClicked() {
  
   console.log('select: '+select); 
  
  rgba[select] = random(0,255); // Set r, g, or b 
  rgba[3] = random(5,50); // Set alpha (transparency) 
  select++; // Increment select by 1
 
  if(select >= 3){ // if select is greater or equal to...
    console.log('reset select'); 
    select = 0; 
  }
  return false; // mouseClicked expects this
}