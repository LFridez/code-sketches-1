let formes = [];

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 300; i++) {

    let forme = {
      x: random(width),
      y: random(height),
      taille: random(10, 80),
      angle: random(360),
      vitesseAngle: random(-0.3, 0.3),
      vitesseTaille: random(0.5, 3),
      direction: 1,
      type: floor(random(3))
    };

    formes.push(forme);
  }

  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(0, 20);

  for (let i = 0; i < formes.length; i++) {

    let forme = formes[i];

    forme.angle = forme.angle + forme.vitesseAngle;

    forme.taille = forme.taille + forme.vitesseTaille * forme.direction;

    if (forme.taille > 120) {
      forme.direction = -1;
    }

    if (forme.taille < 5) {
      forme.direction = 1;
    }

    let r = random(255);
    let g = random(255);
    let b = random(255);

    stroke(r, g, b);
    fill(r, g, b, 100);

    push();

    translate(forme.x, forme.y);

    rotate(forme.angle);

    if (forme.type == 0) {
      rect(0, 0, forme.taille, forme.taille);
    }

    if (forme.type == 1) {
      ellipse(0, 0, forme.taille, forme.taille);
    }

    if (forme.type == 2) {
      triangle(
        -forme.taille,
        forme.taille,
        0,
        -forme.taille,
        forme.taille,
        forme.taille
      );
    }

    pop();

    forme.x = forme.x + random(-3, 3);
    forme.y = forme.y + random(-3, 3);

    if (forme.x < 0) {
      forme.x = width;
    }

    if (forme.x > width) {
      forme.x = 0;
    }

    if (forme.y < 0) {
      forme.y = height;
    }

    if (forme.y > height) {
      forme.y = 0;
    }

    if (random(100) < 1) {
      forme.type = floor(random(3));
    }
  }
}
