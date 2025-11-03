let foods = [];
let binX;
let score = 0;
let missed = 0;
let gameOver = false;

function setup() {
  createCanvas(600, 400);
  textFont("Nunito, sans-serif");
  binX = width / 2;
  noCursor(); // Hide system cursor
  for (let i = 0; i < 10; i++) {
    foods.push(new Food(random(width), random(-400, 0)));
  }
}

function draw() {
  // Gradient background (soft green aesthetic)
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color("#eaf8f0"), color("#b9e5c4"), y / height);
    stroke(c);
    line(0, y, width, y);
  }

  if (!gameOver) {
    // Title
    fill(40, 70, 50);
    textSize(22);
    textAlign(CENTER);
    text("♻️ Save the Food!", width / 2, 40);
    textSize(14);
    text("Catch good food 🍎 Avoid rotten food 🚨", width / 2, 65);

    // Move and draw foods
    for (let f of foods) {
      f.move();
      f.display();
      f.checkCatch();
    }

    // Recycling bin (custom cursor)
    drawBin(binX, height - 40);

    // Display score
    fill(40, 70, 50);
    textSize(16);
    textAlign(LEFT);
    text("Saved: " + score, 20, 30);
    textAlign(RIGHT);
    text("Wasted: " + missed, width - 20, 30);

    if (missed >= 10) {
      gameOver = true;
    }
  } else {
    fill(40, 70, 50);
    textAlign(CENTER);
    textSize(24);
    text("Game Over", width / 2, height / 2 - 20);
    textSize(18);
    text("You saved " + score + " foods!", width / 2, height / 2 + 10);
    text("Press 1 to try again", width / 2, height / 2 + 40);
  }
}

function drawBin(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("#1e633ccb");
  rectMode(CENTER);
  rect(0, 0, 60, 40, 6);
  fill("#1d5d3a");
  rect(0, -20, 40, 8, 3);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("♻️", 0, 3);
  pop();
}

function keyPressed() {
  if (key === '1') {
    // Reset the game
    score = 0;
    missed = 0;
    gameOver = false;
    for (let f of foods) {
      f.y = random(-400, 0);
      f.x = random(width);
    }
  }
}

function mouseMoved() {
  binX = constrain(mouseX, 40, width - 40);
}

class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.good = random(1) > 0.3;
    this.size = 20;
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, 0);
      this.x = random(width);
      if (this.good) missed++;
    }
  }

  display() {
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);
    if (this.good) {
      text("🍏", this.x, this.y);
    } else {
      text("🍪", this.x, this.y);
    }
  }

  checkCatch() {
    if (this.y > height - 60 && dist(this.x, this.y, binX, height - 40) < 40) {
      if (this.good) score++;
      else score -= 2;
      this.y = random(-200, 0);
      this.x = random(width);
    }
  }
}