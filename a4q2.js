function setup() {
  createCanvas(800, 400);
}

function draw() {
  background("rebeccapurple");

  // Make a loop
  for (let x = 50; x < 800; x += 100) {
    for (let y = 50; y < 400; y += 100) {
      // Draw a circle
      fill(255, 120, 70);
      circle(x, y, 50);

      // Draw a square
      fill(0, 200, 255);
      rect(x + 25, y + 25, 50, 50);
    }
  }
}
