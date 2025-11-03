let foods = [];
let binX;
let binWidth = 120;
let binHeight = 60;
let score = 0;

function setup() {
  createCanvas(1000, 800);
  binX = width / 2 - binWidth / 2;
  textAlign(CENTER, CENTER);
  textSize(20); // capital “S” in textSize, not textsize
}

function draw() {
  background(20, 20, 20);

  // Draw recycling bin
  fill(50, 200, 100);
  rect(binX, height - binHeight - 10, binWidth, binHeight, 10); // use rect(), not rectangle()
  fill(255);
  text("♻", binX + binWidth / 2, height - binHeight / 2 - 10);

  // Occasionally create new falling foods
  if (random(1) < 0.05) {
    foods.push(new Food(random(width), 0));
  }

  // Update and draw foods
  for (let i = foods.length - 1; i >= 0; i--) {
    foods[i].update();
    foods[i].display();

    // Check if the food hits the bin
    if (
      foods[i].y + foods[i].size / 2 > height - binHeight - 10 &&
      foods[i].x > binX &&
      foods[i].x < binX + binWidth
    ) {
      score++;
      foods.splice(i, 1);
    } 
    // Remove if off-screen
    else if (foods[i].y > height) { // missing '.' before y
      foods.splice(i, 1);
    }
  }

  // Display score
  fill(255);
  text(`Composted: ${score}`, width / 2, 30);
}

// Food class
class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 50);
    this.speed = random(2, 5);
    this.type = random(["🍎", "🍌", "🥦", "🍞", "🥕"]);
  }

  update() {
    this.y += this.speed;
  }

  display() {
    textSize(this.size);
    text(this.type, this.x, this.y);
  }
}
