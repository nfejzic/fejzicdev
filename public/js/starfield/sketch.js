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

  scaleFactor = w / SKETCH_WIDTH;

  this.canvas = createCanvas(w, h);
  this.canvas.parent("p5canvas");

  parentDiv.style.height = h + "px";
  // pixelDensity(10.0);

  // pixelDensity(4);

  loadSketch();
}

// create array of Stars. Stars are going to be reused, so no deleting of stars needed.
function loadSketch() {
  // Init empty array of stars
  this.stars = [];
  for (let i = 0; i < (SKETCH_WIDTH * SKETCH_HEIGHT) / 250; i++) {
    // get random x and y position
    x = round(random(SKETCH_WIDTH));
    y = round(random(SKETCH_HEIGHT));
    // starting size of star ( when it's far away ) is 1px
    size = 1;
    // add new star with generated values to the array
    this.stars[i] = new Star(x, y, size);
  }
}

function update() {
  // update all the stars
  for (star of this.stars) {
    star.update();
  }
}

function keyTyped() {
  if (key == "s") {
    saveFrames("starfield", "png", 1, 1);
  }
}

function draw() {
  // scale the sketch to compensate for different canvas sizes (Responsive web design)
  // makes it easy to use standard SKETCH_WIDTH and SKETCH_HEIGHT for width and height of screen
  // scaleFactor makes sure 10px on 200px wide screen, and 10px on 600px wide screen is same position and size
  scale(scaleFactor);
  background("#000000");
  // call update function
  update();
  // render stars
  for (star of this.stars) {
    star.draw();
  }
}
