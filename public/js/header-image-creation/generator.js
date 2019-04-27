class Generator {
  constructor(numOfPoints) {
    this.numOfPoints = numOfPoints;
    this.points = [];
    this.lines = [];
  }

  generate() {
    let lineWidth = 30;
    let numOfLines = (SKETCH_WIDTH * 3) / lineWidth;

    let xBegin = (SKETCH_WIDTH * -1) / lineWidth;

    for (let i = 0; i < numOfLines; i++) {
      let x = i + xBegin;
      let y = round(random(1)) * SKETCH_HEIGHT;
      let value = round(random(255));
      this.points[i] = new Point(x, y, value);
      this.lines[i] = new ArtLine(
        this.points[i].getX(),
        lineWidth,
        this.points[i]
      );
    }

    // for (let i = 0; i < this.numOfPoints; i++) {
    //   let x = round(random(SKETCH_WIDTH));
    //   let y = round(random(1)) * SKETCH_HEIGHT;
    //   let value = round(random(255));
    //   this.points[i] = new Point(x, y, value);

    //   this.lines[i] = new ArtLine(this.points[i].getX(), 50, this.points[i]);
    //   // console.log(this.points[i]);
    // }
  }

  draw() {
    for (let artLine of this.lines) {
      artLine.draw();
    }
  }
}
