class Firework {
  constructor(particleSize, color, numOfParticles) {
    this.size = particleSize;
    this.color = color;
    this.numOfParticles = numOfParticles;
    this.xPos = round(random(SKETCH_WIDTH));
    this.yPos = SKETCH_HEIGHT;
    this.maxHeight = round(random(SKETCH_HEIGHT));

    this.yVel = 5;
    this.exploded = false;

    //life of 3 seconds
    this.life = 3;

    this.particles = [];

    this.generate();
  }

  generate() {
    for (let i = 0; i < this.numOfParticles; i++) {
      let position = createVector(this.xPos, this.yPos);
      let particle = new Particle(position, this.color, this.size);
      this.particles[i] = particle;
    }
  }

  update() {
    this.yPos -= this.yVel;

    if (this.yPos < this.maxHeight && !this.exploded) {
      this.explode();
      this.exploded = true;
      this.yVel = 0;
    }
    for (let p of this.particles) {
      if (!this.exploded) p.translate(p.position.x, this.yPos);
      p.update();
    }
  }

  explode() {
    for (let p of this.particles) {
      p.shoot();
      p.applyGravity();
    }
  }

  offScreen() {
    let offScreenParticles = [];
    for (let p of this.particles) {
      if (p.offScreen()) {
        offScreenParticles.push(p);
      }
    }
    if (offScreenParticles.length === this.numOfParticles) return true;
  }

  draw() {
    for (let p of this.particles) {
      p.draw();
    }
  }
}
