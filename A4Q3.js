let color = ["red", "blue", "green"];

function setup() {
  createCanvas(850, 450);
  noLoop();
}

function draw() {
  background("black");

  // Make a loop
  for (let x = 50; x < 800; x += 100) {
    for (let y = 50; y < 400; y += 100) {
      // Draw a circle
      fill(random(color));
      circle(x, y, 50);

      // Draw a square
      fill(random(color));
      rect(x + 25, y + 25, 50, 50);
    }
  }
}
