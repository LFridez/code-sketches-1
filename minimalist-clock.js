let angle = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  rotate(angle);

  stroke(0);

  for (let i = 0; i < 10; i = i + 1) {
    rect(i * 10, i * 10, 50, 50);
  }

  angle = angle + 0.01;
}
