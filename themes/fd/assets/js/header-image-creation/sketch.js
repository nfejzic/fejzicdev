// setup the sketch

const SKETCH_WIDTH = 640;
const SKETCH_HEIGHT = 360;
// const SKETCH_WIDTH = 2000;
// const SKETCH_HEIGHT = 1000;

let scaleFactor = 0;

function setup() {
  let parentDiv = document.getElementById("p5canvas");
  let aspectRatio = 16 / 9;
  let w = parentDiv.offsetWidth;
  let h = w / aspectRatio;

  //temporary width and height for saving frame:
  // w = 2000;
  // h = 1000;

  noLoop();

  this.canvas = createCanvas(w, h);
  this.canvas.parent("p5canvas");

  parentDiv.style.height = h + "px";
  // pixelDensity(10.0);
  background("#000000");
  frameRate(10);

  //setup the scaling
  scaleFactor = w / SKETCH_WIDTH;

  console.log(scaleFactor);

  this.generator = startGenerating();
}

function startGenerating() {
  let generator = new Generator(10);
  generator.generate();
  return generator;
}

function update() {}

// function mousePressed() {
//   saveCanvas(this.canvas, "filename", "png");
// }

function keyPressed() {
  if (keyCode == ENTER) {
    saveCanvas(this.canvas, "p5js-header-generator", "png");
  }
}

function draw() {
  blendMode(SCREEN);
  scale(scaleFactor);
  this.generator.draw();
}
