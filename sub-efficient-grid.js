let x;
let y;

let taille = 5;

let direction = 0;
let longueur = 1;
let compteur = 0;
let repetition = 0;

function setup() {
  createCanvas(800, 600);
  background(255);

  x = width / 2;
  y = height / 2;
}

function draw() {

  stroke(0);
  noFill();

  rect(x, y, taille, taille);

  if (direction == 0) {
    x = x + taille;
  }

  if (direction == 1) {
    y = y + taille;
  }

  if (direction == 2) {
    x = x - taille;
  }

  if (direction == 3) {
    y = y - taille;
  }

  compteur = compteur + 1;

  if (compteur == longueur) {
    compteur = 0;
    direction = direction + 1;
    repetition = repetition + 1;
  }

  if (direction > 3) {
    direction = 0;
  }

  if (repetition == 2) {
    repetition = 0;
    longueur = longueur + 1;
  }
}
