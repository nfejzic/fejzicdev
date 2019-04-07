function setup() {
  let parentDiv = document.getElementById("p5canvas");
  let aspectRatio = 16 / 9;
  let w = parentDiv.offsetWidth;
  let h = w / aspectRatio;

  let canvas = createCanvas(w, h);
  canvas.parent("p5canvas");
  background(0);
}

function update() {}

function draw() {}
