function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  strokeWeight(6);
  noFill();

  stroke("#ffb703");
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke("#ffb703");
  line(0, 0, 150, 0);
  pop();

  stroke("#d00000");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke("#d00000");
  line(0, 0, 130, 0);
  pop();

  stroke("#023e8a");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("#023e8a");
  line(0, 0, 100, 0);
  pop();

  stroke("white");
  strokeWeight(10);
  point(0, 0);
  stroke("#00CF91");
  ellipse(0, 0, 350, 350);
  push();
  textSize(18);
  rotate(90);
  strokeWeight(1);
  text("6", -10, 200);
  pop();

  push();
  textSize(18);
  rotate(90);
  strokeWeight(1);
  text("waleed", 20, 300);
  pop();

  push();
  textSize(18);
  rotate(90);
  strokeWeight(1);
  text("12", -10, -200);
  pop();

  push();
  textSize(18);
  rotate(90);
  strokeWeight(1);
  text("9", -200, -1);
  pop();

  push();
  textSize(18);
  rotate(90);
  strokeWeight(1);
  text("4", 200, -1);
  pop();
}
