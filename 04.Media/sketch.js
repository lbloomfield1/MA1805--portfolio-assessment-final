let img;

function preload() {
  img = loadImage('68550D89-EA22-42F4-8026-0CEF47DFA213.JPG'); // replace with your image name
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  
  let imgAspect = img.width / img.height;
  let canvasAspect = width / height;
  let drawWidth, drawHeight;

  if (imgAspect > canvasAspect) {
    
    drawWidth = width;
    drawHeight = width / imgAspect;
  } else {
   
    drawHeight = height;
    drawWidth = height * imgAspect;
  }

  
  let x = (width - drawWidth) / 2;
  let y = (height - drawHeight) / 2;
  
  image(img, x, y, drawWidth, drawHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
