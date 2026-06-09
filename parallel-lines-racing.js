let x = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  stroke(0);
  noFill();

  for (let y = 0; y < height; y = y + 40) {
    line(0, y, x, y);
  }

  x = x + 2;

  if (x > width) {
    x = 0;
  }
}
