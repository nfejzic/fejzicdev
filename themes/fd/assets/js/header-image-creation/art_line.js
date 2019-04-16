class ArtLine {
  //   constructor(points) {
  //     // this.points = points;
  //     // console.log(points);
  //   }

  constructor(xIndex, width, point) {
    this.width = width;
    this.x = xIndex * width;
    // console.log(this.x);
    // this.x = xIndex;
    this.point = point;
    this.y = point.getY();

    this.yDir = 0;
    this.xDir = 0;
    this.distance = 0;

    this.xPoints = [];
    this.yPoints = [];

    this.calculate();
  }

  calculate() {
    // if y is 0, point down, else point up
    this.yDir = this.y == 0 ? 1 : 0;
    // this.xDir = round(random());
    this.xDir = this.x < SKETCH_WIDTH / 2 ? 1 : 0;

    this.distance = tan(QUARTER_PI) * SKETCH_HEIGHT;
    this.distance = this.xDir == 0 ? this.distance * -1 : this.distance;

    let x0 = this.x;
    let x1 = this.x + this.width;
    let x2 = this.x + this.distance;
    let x3 = x2 + this.width;

    let yDown = SKETCH_HEIGHT;
    let yUp = 0;

    this.xPoints = [x0, x2, x3, x1];
    if (this.yDir == 0) {
      this.yPoints = [yDown, yUp];
    } else {
      this.yPoints = [yUp, yDown];
    }
  }

  draw() {
    let color = this.point.getColor();
    color.setAlpha(150);
    noStroke();
    fill(color);
    beginShape();
    vertex(this.xPoints[0], this.yPoints[0]);
    vertex(this.xPoints[1], this.yPoints[1]);
    vertex(this.xPoints[2], this.yPoints[1]);
    vertex(this.xPoints[3], this.yPoints[0]);
    endShape();
  }
}
