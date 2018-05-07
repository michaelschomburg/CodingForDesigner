var count = 0;


function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(230);
  noFill();


  ellipse(150 + count, 150, 50, 50);
  ellipse(300 + count, 150, 50, 50);
  fill(16,122,31)
  rect(200 + count, 90, 50,30);
  rect(130 + count, 110, 190, 30);
  strokeWeight(6);
  line(320 + count, 110, 260 + count, 90);
  strokeWeight(3);
  fill(120);
  ellipse(225 + count, 75, 30, 30);

  count = count + 1;
}
