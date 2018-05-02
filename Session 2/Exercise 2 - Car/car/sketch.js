var count = 0;


function setup() {
  createCanvas(600, 600);
 
}

function draw() {
  background(230);
  noFill();
  var move = count
  
  ellipse(150 + move, 150, 50, 50);
  ellipse(300 + move, 150, 50, 50);
  fill(16,122,31)
  rect(200 + move, 90, 50,30);
  rect(130 + move, 110, 190, 30);
  strokeWeight(6);
  line(320 + move, 110, 260 + move, 90);
  strokeWeight(3);
  fill(120);
  ellipse(225 + move, 75, 30, 30);
  
  count = count + 1;
}