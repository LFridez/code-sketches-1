let x = 200;
let y = 200;

let taille = 20;

let vitesseX = 1;
let vitesseY = 0;

let nourritureX = 100;
let nourritureY = 100;

let corpsX = [];
let corpsY = [];

let longueur = 1;

function setup() {
  createCanvas(600, 600);

  nourritureX = floor(random(width / taille)) * taille;
  nourritureY = floor(random(height / taille)) * taille;

  frameRate(10);
}

function draw() {
  background(220);

  for (let i = longueur - 1; i > 0; i--) {
    corpsX[i] = corpsX[i - 1];
    corpsY[i] = corpsY[i - 1];
  }

  corpsX[0] = x;
  corpsY[0] = y;

  x = x + vitesseX * taille;
  y = y + vitesseY * taille;

  if (x < 0) {
    x = width - taille;
  }

  if (x >= width) {
    x = 0;
  }

  if (y < 0) {
    y = height - taille;
  }

  if (y >= height) {
    y = 0;
  }

  fill(255, 0, 0);
  rect(nourritureX, nourritureY, taille, taille);

  fill(0, 200, 0);

  for (let i = 0; i < longueur; i++) {
    rect(corpsX[i], corpsY[i], taille, taille);
  }

  if (x == nourritureX && y == nourritureY) {
    longueur = longueur + 1;

    nourritureX = floor(random(width / taille)) * taille;
    nourritureY = floor(random(height / taille)) * taille;
  }

  for (let i = 1; i < longueur; i++) {
    if (x == corpsX[i] && y == corpsY[i]) {
      longueur = 1;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    vitesseX = 0;
    vitesseY = -1;
  }

  if (keyCode === DOWN_ARROW) {
    vitesseX = 0;
    vitesseY = 1;
  }

  if (keyCode === LEFT_ARROW) {
    vitesseX = -1;
    vitesseY = 0;
  }

  if (keyCode === RIGHT_ARROW) {
    vitesseX = 1;
    vitesseY = 0;
  }
}
