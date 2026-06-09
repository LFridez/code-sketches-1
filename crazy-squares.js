let carres = [];

function setup() {
  createCanvas(600, 600);

  for (let x = 25; x < width; x = x + 50) {
    for (let y = 25; y < height; y = y + 50) {

      let carre = {
        x: x,
        y: y,
        angle: random(360),
        vitesseRotation: random(-0.05, 0.05),
        taille: random(15, 45),
        vitesseTaille: random(0.2, 1),
        direction: 1,
        tailleMin: random(10, 20),
        tailleMax: random(30, 60)
      };

      carres.push(carre);
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < carres.length; i++) {

    let carre = carres[i];

    carre.angle = carre.angle + carre.vitesseRotation;

    carre.taille = carre.taille + carre.vitesseTaille * carre.direction;

    if (carre.taille > carre.tailleMax) {
      carre.direction = -1;
    }

    if (carre.taille < carre.tailleMin) {
      carre.direction = 1;
    }

    push();

    translate(carre.x, carre.y);

    rotate(carre.angle);

    rectMode(CENTER);

    rect(0, 0, carre.taille, carre.taille);

    pop();
  }
}
