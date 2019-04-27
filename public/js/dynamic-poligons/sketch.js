// setup the sketch

const SKETCH_WIDTH = 640;
const SKETCH_HEIGHT = 360;

const CENTER_X = SKETCH_WIDTH / 2;
const CENTER_Y = SKETCH_HEIGHT / 2;
// const SKETCH_WIDTH = 2000;
// const SKETCH_HEIGHT = 1000;

let scaleFactor = 0;

function setup() {
  let parentDiv = document.getElementById("p5canvas");
  let aspectRatio = 16 / 9;
  let w = parentDiv.offsetWidth;
  let h = w / aspectRatio;

  pixelDensity(3);

  scaleFactor = w / SKETCH_WIDTH;

  this.canvas = createCanvas(w, h);
  this.canvas.parent("p5canvas");

  parentDiv.style.height = h + "px";

  generateSketch();
}

function generateSketch() {
  this.points = [];
  // this.poligon = new DynamicPoligon("#413b3d");
  this.col = color("#413b3d");

  for (let i = 0; i < 25; i++) {
    let x = random(SKETCH_WIDTH);
    let y = random(SKETCH_HEIGHT);
    let pos = createVector(x, y);
    let radius = 2.5;
    let color = "#7a7677";
    let point = new Point(pos, radius, color);
    point.setVelocity(createVector(random(2), 0));
    // this.poligon.addPoint(point);
    this.points.push(point);
  }
}

function keyTyped() {
  if (key == "s") {
    saveFrames("dynamic-poligon", "png", 1, 60);
  }
}

function update() {
  this.points[0].getDistance(this.points[1]);
  for (let point of this.points) {
    point.update();
  }
  // this.poligon.update();
}

function draw() {
  update();
  scale(scaleFactor);
  background("#d9d7d8");

  for (let i = 0; i < this.points.length; i++) {
    let iPoint = this.points[i];
    iPoint.draw();
    for (let j = 0; j < this.points.length; j++) {
      let jPoint = this.points[j];
      let distance = iPoint.getDistance(jPoint);
      if (distance < 100) {
        this.col.setAlpha(map(distance, 100, 0, 0, 255));
        stroke(this.col);
        line(iPoint.getX(), iPoint.getY(), jPoint.getX(), jPoint.getY());
        // beginShape(LINES);

        // vertex(iPoint.getX(), iPoint.getY());
        // vertex(jPoint.getX(), jPoint.getY());

        // endShape();
      }
    }
  }
  // this.poligon.draw();
}
