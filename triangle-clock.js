let angle = 0;
let vitesse = 0.02;

let compteur = 0;
let temps = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  rotate(angle);

  stroke(0);
  noFill();

  triangle(-120, 120, 0, -140, 120, 120);

  if (vitesse != 0) {
    angle = angle + vitesse;
  }

  compteur = compteur + 1;
  temps = temps + 1;

  if (compteur > 20) {
    compteur = 0;

    if (vitesse == 0) {
      vitesse = 0.02;
    } else {
      vitesse = 0;
    }
  }

  if (temps > 120) {
    temps = 0;
    vitesse = 0;
  }
}
