let words = [];
let particles = [];

let dragging = null;
let offsetX = 0;
let offsetY = 0;

let prevMouseX = 0;
let prevMouseY = 0;
let mouseVX = 0;
let mouseVY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial Black");
  textAlign(CENTER, CENTER);

  let labels = ["Enjoy", "ChatGPT's", "code"];
  let palette = [
    color(255, 90, 140),
    color(90, 170, 255),
    color(255, 210, 90),
  ];

  let x = width * 0.3;

  for (let i = 0; i < labels.length; i++) {
    words.push(new WordBalloon(x, height * 0.35, labels[i], palette[i]));
    x += 260;
  }

  for (let i = 0; i < 22; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(15, 18, 35);

  drawBackgroundText();

  updateMouseVelocity();

  for (let p of particles) {
    p.update();
    p.collideWords(words);
    p.collideParticles(particles);
    p.display();
  }

  for (let w of words) {
    w.update();
    w.collideWords(words);
    w.collideParticles(particles);
    w.display();
  }
}

function drawBackgroundText() {
  fill(255, 10);
  textSize(48);
  text("Grabb the words !", width / 2, height / 2);
}

function updateMouseVelocity() {
  mouseVX = mouseX - prevMouseX;
  mouseVY = mouseY - prevMouseY;
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function mousePressed() {
  for (let w of words) {
    if (w.contains(mouseX, mouseY)) {
      dragging = w;
      offsetX = mouseX - w.x;
      offsetY = mouseY - w.y;

      w.vx *= 0.2;
      w.vy *= 0.2;
      break;
    }
  }
}

function mouseDragged() {
  if (dragging) {
    dragging.x = mouseX - offsetX;
    dragging.y = mouseY - offsetY;
  }
}

function mouseReleased() {
  if (dragging) {
    dragging.vx += mouseVX * 0.8;
    dragging.vy += mouseVY * 0.8;
  }
  dragging = null;
}

class WordBalloon {
  constructor(x, y, label, c) {
    this.x = x;
    this.y = y;

    this.vx = random(-1, 1);
    this.vy = random(-1, 1);

    this.angle = 0;
    this.spin = 0;

    this.label = label;
    this.c = c;

    textSize(56);
    this.w = textWidth(label) + 70;
    this.h = 85;
  }

  update() {
    if (this !== dragging) {
      this.vy += 0.06;

      this.x += this.vx;
      this.y += this.vy;

      this.vx *= 0.985;
      this.vy *= 0.985;

      this.spin *= 0.92;
      this.angle += this.spin;

      this.wallBounce();
    }
  }

  wallBounce() {
    if (this.x < this.w / 2) {
      this.x = this.w / 2;
      this.vx *= -0.6;
      this.spin *= 0.3;
    }
    if (this.x > width - this.w / 2) {
      this.x = width - this.w / 2;
      this.vx *= -0.6;
      this.spin *= 0.3;
    }
    if (this.y < this.h / 2) {
      this.y = this.h / 2;
      this.vy *= -0.6;
    }
    if (this.y > height - this.h / 2) {
      this.y = height - this.h / 2;
      this.vy *= -0.6;
    }
  }

  collideWords(others) {
    for (let o of others) {
      if (o === this) continue;

      let dx = o.x - this.x;
      let dy = o.y - this.y;
      let dist = sqrt(dx * dx + dy * dy);
      let minDist = (this.w + o.w) * 0.32;

      if (dist < minDist) {
        let angle = atan2(dy, dx);

        let overlap = minDist - dist;
        let push = overlap * 0.02;

        this.vx -= cos(angle) * push;
        this.vy -= sin(angle) * push;

        o.vx += cos(angle) * push;
        o.vy += sin(angle) * push;

        this.spin -= push * 0.01;
        o.spin += push * 0.01;
      }
    }
  }

  collideParticles(parts) {
    for (let p of parts) {
      let dx = p.x - this.x;
      let dy = p.y - this.y;
      let d = sqrt(dx * dx + dy * dy);

      if (d < this.w * 0.5) {
        let angle = atan2(dy, dx);

        let force = 0.5;

        p.vx += cos(angle) * force;
        p.vy += sin(angle) * force;

        this.vx -= cos(angle) * 0.05;
        this.vy -= sin(angle) * 0.05;

        this.spin += random(-0.003, 0.003);
      }
    }
  }

  contains(px, py) {
    return (
      px > this.x - this.w / 2 &&
      px < this.x + this.w / 2 &&
      py > this.y - this.h / 2 &&
      py < this.y + this.h / 2
    );
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    noStroke();

    fill(0, 40);
    rect(-this.w / 2 + 5, -this.h / 2 + 5, this.w, this.h, 28);

    fill(this.c);
    rect(-this.w / 2, -this.h / 2, this.w, this.h, 28);

    fill(255, 70);
    ellipse(-this.w * 0.2, -this.h * 0.2, this.w * 0.35);

    fill(255);
    textSize(56);
    text(this.label, 0, 2);

    pop();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.vx = random(-1.5, 1.5);
    this.vy = random(-1.5, 1.5);

    this.size = random(6, 12);
    this.type = random(["ball", "cube"]);
    this.c = color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.99;
    this.vy *= 0.99;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  collideWords(words) {
    for (let w of words) {
      let dx = this.x - w.x;
      let dy = this.y - w.y;
      let d = sqrt(dx * dx + dy * dy);

      if (d < w.w * 0.5) {
        let angle = atan2(dy, dx);

        this.vx += cos(angle) * 0.4;
        this.vy += sin(angle) * 0.4;

        w.vx -= cos(angle) * 0.03;
        w.vy -= sin(angle) * 0.03;
      }
    }
  }

  collideParticles(parts) {
    for (let p of parts) {
      if (p === this) continue;

      let dx = p.x - this.x;
      let dy = p.y - this.y;
      let d = sqrt(dx * dx + dy * dy);

      if (d < this.size) {
        let angle = atan2(dy, dx);

        let push = 0.2;

        this.vx -= cos(angle) * push;
        this.vy -= sin(angle) * push;
        p.vx += cos(angle) * push;
        p.vy += sin(angle) * push;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.c);

    if (this.type === "ball") {
      circle(0, 0, this.size);
    } else {
      rectMode(CENTER);
      rect(0, 0, this.size, this.size);
    }

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
