function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FFFFFF");

  star(70, 180, "red", 5, 50, 0.5);
  star(280, 300, "blue", 8, 90, 0.7);
  star(170, 120, "green", 10, 90, 1);
}

function star(x, y, starfill, starPoints, startAngle, size) {
  angleMode(DEGREES);
  fill(starfill);
  noStroke();
  let addAngle = 360 / starPoints;
  push();
  translate(x, y);
  scale(size);
  rotate(startAngle);
  for (let pointsDrawn = 0; pointsDrawn < starPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}
