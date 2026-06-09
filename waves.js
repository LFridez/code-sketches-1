function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  stroke(0);
  noFill();

  beginShape();

  for (let x = 0; x < width; x = x + 10) {

    let y = height / 2;

    y = y + sin(x * 0.05) * 50;

    vertex(x, y);
  }

  endShape();
}
