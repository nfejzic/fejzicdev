class Particle {
  constructor(position, col, size) {
    this.position = position;
    this.color = color(255, 255, 255);
    this.size = 1;
    this.velRange = 5;

    this.velocity = createVector(0, 0);

    if (color != null) {
      this.color = col;
    }
    if (size != null) {
      this.size = size;
    }
  }

  translate(xPos, yPos) {
    this.position.x = xPos;
    this.position.y = yPos;
  }

  shoot() {
    this.velocity.x = random(this.velRange) - this.velRange / 2;
    this.velocity.y = random(this.velRange) - this.velRange / 2;
  }

  applyGravity() {
    this.gravity = true;
  }

  offScreen() {
    let xPos = this.position.x;
    let yPos = this.position.y;
    let size = this.size;
    return (
      xPos < 0 - size ||
      xPos > SKETCH_WIDTH + size ||
      yPos < 0 - size ||
      yPos > SKETCH_HEIGHT + size
    );
  }

  update() {
    if (this.gravity) {
      this.velocity.y += 0.05;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  draw() {
    noStroke();
    fill(this.color);
    circle(this.position.x, this.position.y, this.size);
  }
}
