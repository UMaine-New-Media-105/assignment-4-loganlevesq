let circles = [];
let squares = [];
let colors = [
  "cyan",
  "dodgerblue",
  "mediumorchid",
  "palegreen",
  "burlywood",
  "slategray",
];

function setup() {
  createCanvas(800, 400);
  noLoop();

  // create 35 circles and squares with random position and size
  for (let i = 0; i < 35; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
    });

    squares.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
    });
  }
}

function draw() {
  background("pink");

  // draw the circles
  fill(random(colors));
  noStroke();

  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].size);
  }

  // draw the squares
  fill(random(colors));

  for (let i = 0; i < squares.length; i++) {
    rect(squares[i].x, squares[i].y, squares[i].size, squares[i].size);
  }
}
