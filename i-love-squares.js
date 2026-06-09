function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255), 80);
  noStroke();

  let x = random(width);
  let y = random(height);

  let taille = random(10, 100);

  rect(x, y, taille, taille);
}
