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

  this.firework = new Firework(1, color(255, 0, 0), 50);
  makeFireworks(20);
}

function makeFireworks(numOfFireworks) {
  this.fireworks = [];
  for (let i = 0; i < numOfFireworks; i++) {
    let firework = new Firework(random(3), randomColor(), round(random(50)));
    this.fireworks.push(firework);
  }
}

function update() {
  for (let i = 0; i < this.fireworks.length; i++) {
    this.fireworks[i].update();
    if (this.fireworks[i].offScreen()) {
      console.log("SUCCESS");
      this.fireworks[i] = new Firework(
        random(3),
        randomColor(),
        round(random(50))
      );
    }
  }
}

function randomColor() {
  let r = round(random(255));
  r = map(r, 0, 255, 127, 255);
  let g = round(random(255));
  g = map(g, 0, 255, 127, 255);
  let b = round(random(255));
  b = map(b, 0, 255, 127, 255);
  return color(r, g, b);
}

function draw() {
  update();
  scale(scaleFactor);
  background(0);
  for (let firework of this.fireworks) {
    firework.draw();
  }
}

function keyTyped() {
  if (key == "s") {
    saveFrames("firework", "png", 1, 1);
  }
}
