class Point {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.r = round(random(value));
    this.g = round(random(value));
    this.b = round(random(value));

    let chance = floor(random(5));
    switch (chance) {
      case 0:
        this.c = color("#9381ff");
        break;
      case 1:
        this.c = color("#17bebb");
        break;
      case 2:
        this.c = color("#ff5154");
        break;
      case 3:
        this.c = color("#fbf5f3");
        break;
      case 4:
        this.c = color("#413b3d");
        break;
    }

    this.value = value;

    this.size = map(value, 0, 255, 25, 50);
  }

  draw() {
    fill(this.r, this.g, this.b);
    noStroke();
    circle(this.x, this.y, 5);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getValue() {
    return this.value;
  }

  getColor() {
    // return color(this.r, this.g, this.b);
    return this.c;
  }
}
