function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(400);
}

function draw() {
  background(225);
  //face 
  fill(255,220,80);
  ellipse (width / 2, height / 2, 150);

  //eyes 
  fill(50)
  ellipse(width / 2 - 30, height / 2 - 20, 15, 15);
  ellipse(width / 2 + 30, height / 2 - 20, 15, 15);
// smile
noFill();
stroke(50);
strokeWeight(5);
arc(width / 2, height / 2 + 10, 70, 50, 20, 160);

}

