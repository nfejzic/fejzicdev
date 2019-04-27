class Star {
  // Construct a star
  // @x - x position of star
  // @y - y position of star
  // @size - size of the star in pixels
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = map(size, 0, 5, 0, 255);

    // Construct x and y velocity from x and y positions (Stars closer to the middle are not drifting towards edges as the ones closer to the edge)
    this.calculateVelocity(this.x, this.y);
    this.col = color(255, 255, 255);
  }

  calculateVelocity(xPos, yPos) {
    this.xv = (SKETCH_WIDTH / 2 - xPos) / -50;
    this.yv = (SKETCH_HEIGHT / 2 - yPos) / -50;
  }

  update() {
    //update position and size of star (P.S. size is used to fake Z-axis)
    this.size += 0.025;
    this.x += this.xv;
    this.y += this.yv;

    // if star is Off Screen, reinitialize all values
    if (this.offScreen()) {
      this.size = random(1);
      this.x = random(SKETCH_WIDTH);
      this.y = random(SKETCH_HEIGHT);
    }

    this.opacity = map(this.size, 0, 5, 0, 255);

    // Calculate new velocity every frame - as star approaches edge of screen, it speeds up
    this.calculateVelocity(this.x, this.y);
    this.calculateTail();
  }

  calculateTail() {
    // calculate infividual x and y distances from middle of the screen
    let xDiff = CENTER_X - this.x;
    let yDiff = CENTER_Y - this.y;

    // calculate distance from center of the screen
    let dist = sqrt(xDiff * xDiff + yDiff * yDiff);

    // calculate sine and cosine of angle between stars position and center of screen
    let sin = yDiff / dist;
    let cos = xDiff / dist;

    // calculate one-dimensional velocity using individual x and y velocities (is actually acceleretion but whatever...)
    let velocity = sqrt(this.xv * this.xv + this.yv * this.yv);

    // use multiplier for tailLength, otherwise is too short and almost invisible.
    this.tailLenght = velocity * this.size;

    // set tail end position using all the calculations above
    this.tailEndX = this.x + cos * this.tailLenght;
    this.tailEndY = this.y + sin * this.tailLenght;
  }

  //checks if this star is off screen.
  offScreen() {
    return (
      this.x > SKETCH_WIDTH + this.size + this.tailLenght ||
      this.x < -this.size - this.tailLenght ||
      this.y > SKETCH_HEIGHT + this.size + this.tailLenght ||
      this.y < -this.size - this.tailLenght
    );
  }

  draw() {
    this.col.setAlpha(this.opacity);
    // set the stroke color of the stroke
    stroke(this.col);
    // set the thickness of the stroke to match the size of the star
    strokeWeight(this.size);
    line(this.x, this.y, this.tailEndX, this.tailEndY);
    noStroke();
    fill(this.col);
    circle(this.x, this.y, this.size);
  }
}
