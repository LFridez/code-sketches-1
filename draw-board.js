let outil = 1;

let canvasX = 150;
let canvasY = 50;
let canvasTaille = 500;

function setup() {
  createCanvas(800, 600);

  background(180);

  fill(255);
  stroke(0);
  rect(canvasX, canvasY, canvasTaille, canvasTaille);
}

function draw() {

  fill(220);
  stroke(0);
  rect(20, 50, 100, 40);

  fill(220);
  rect(20, 110, 100, 40);

  fill(0);
  textSize(20);
  text("Crayon", 30, 75);
  text("Gomme", 30, 135);

  noFill();
  strokeWeight(3);

  if (outil == 1) {
    rect(20, 50, 100, 40);
  }

  if (outil == 2) {
    rect(20, 110, 100, 40);
  }

  if (mouseIsPressed) {

    if (mouseX > 20) {
      if (mouseX < 120) {
        if (mouseY > 50) {
          if (mouseY < 90) {
            outil = 1;
          }
        }
      }
    }

    if (mouseX > 20) {
      if (mouseX < 120) {
        if (mouseY > 110) {
          if (mouseY < 150) {
            outil = 2;
          }
        }
      }
    }

    if (mouseX > canvasX) {
      if (mouseX < canvasX + canvasTaille) {
        if (mouseY > canvasY) {
          if (mouseY < canvasY + canvasTaille) {

            if (outil == 1) {
              noStroke();
              fill(0);
              circle(mouseX, mouseY, 8);
            }

            if (outil == 2) {
              noStroke();
              fill(255);
              circle(mouseX, mouseY, 30);
            }

          }
        }
      }
    }

  }

}
