class Point {
  constructor(pos, radius, col) {
    this.position = pos;
    this.color = color("#413b3d");
    this.radius = 5;
    if (!(col === null)) {
      this.color = color(col);
    }
    if (!(radius === null)) {
      this.radius = radius;
    }
    this.velociy = createVector(0, 0);
  }

  setVelocity(velVector) {
    this.velociy = velVector.copy();
  }

  setPosition(position) {
    this.position = position.copy();
  }

  setRandomPosition() {
    let position = createVector(random(SKETCH_WIDTH), random(SKETCH_HEIGHT));
    this.setPosition(position);
  }

  getX() {
    return this.position.x;
  }

  getY() {
    return this.position.y;
  }

  getDistance(x, y) {
    if (x instanceof Point) {
      let otherPoint = x;
      let xDist = this.getX() - otherPoint.getX();
      let yDist = this.getY() - otherPoint.getY();

      let distance = sqrt(xDist * xDist + yDist * yDist);

      return sqrt(xDist * xDist + yDist * yDist);
    }

    let xDist = this.position.x - x;
    let yDist = this.position.y - y;

    return sqrt(xDist * xDist + yDist * yDist);
  }

  update() {
    this.position.add(this.velociy);
    if (this.offScreen()) {
      let xPos = 0 - this.radius;
      let yPos = random(SKETCH_HEIGHT);
      this.setPosition(createVector(xPos, yPos));
    }
  }

  offScreen() {
    let isOffX =
      this.position.x - this.radius > SKETCH_WIDTH ||
      this.position.x + this.radius < 0;
    let isOffY =
      this.position.y - this.radius > SKETCH_HEIGHT ||
      this.position.Y + this.radius < 0;
    return isOffX || isOffY;
  }

  draw() {
    noStroke();
    fill(this.color);
    circle(this.position.x, this.position.y, this.radius);
  }
}
