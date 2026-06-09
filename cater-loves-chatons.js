let x = 100;
let y = 100;

let vitesseX = 2;
let vitesseY = 2;

let couleurR = 255;
let couleurG = 255;
let couleurB = 255;

let texte = "Cater loves chaton";

function setup() {
  createCanvas(800, 600);

  textSize(40);
}

function draw() {
  background(0);

  fill(couleurR, couleurG, couleurB);

  text(texte, x, y);

  let largeurTexte = textWidth(texte);
  let hauteurTexte = 40;

  x = x + vitesseX;
  y = y + vitesseY;

  if (x < 0) {
    vitesseX = -vitesseX;

    couleurR = random(255);
    couleurG = random(255);
    couleurB = random(255);
  }

  if (x + largeurTexte > width) {
    vitesseX = -vitesseX;

    couleurR = random(255);
    couleurG = random(255);
    couleurB = random(255);
  }

  if (y - hauteurTexte < 0) {
    vitesseY = -vitesseY;

    couleurR = random(255);
    couleurG = random(255);
    couleurB = random(255);
  }

  if (y > height) {
    vitesseY = -vitesseY;

    couleurR = random(255);
    couleurG = random(255);
    couleurB = random(255);
  }
}
