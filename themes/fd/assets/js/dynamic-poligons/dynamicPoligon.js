class DynamicPoligon {
  constructor(col) {
    this.points = [];
    this.color = color("#413b3d");
    if (!(col === null)) {
      this.color = color(col);
    }
  }

  getPoint() {
    return this.points[0];
  }

  addPoint(point) {
    this.points.push(point);
  }

  removePoint(point) {
    for (let i = 0; i < this.points.length; i++) {
      if (this.points[i] === point && i > 0) {
        this.points.slice(i, 1);
        return;
      }
    }
  }

  update() {
    if (this.points === null || this.points.length < 1) return;
  }

  draw() {
    noFill();
    for (let i = 0; i < this.points.length; i++) {
      let iPoint = this.points[i];
      for (let j = 0; j < this.points.length; j++) {
        let jPoint = this.points[j];
        let distance = iPoint.getDistance(jPoint);
        if (distance < 100) {
          this.color.setAlpha(map(distance, 100, 0, 0, 255));
          stroke(this.color);
          line(iPoint.getX(), iPoint.getY(), jPoint.getX(), jPoint.getY());
          // beginShape(LINES);

          // vertex(iPoint.getX(), iPoint.getY());
          // vertex(jPoint.getX(), jPoint.getY());

          // endShape();
        }
      }
    }
  }
}
