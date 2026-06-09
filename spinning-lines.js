let angle = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  rotate(angle);

  stroke(0);
  noFill();

  for (let i = -2; i <= 2; i = i + 1) {

    beginShape();

    for (let x = -400; x <= 400; x = x + 10) {

      let y = i * 30;

      vertex(x, y);
    }

    endShape();

  }

  angle = angle + 0.01;
}
