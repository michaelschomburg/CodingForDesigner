function setup() {
createCanvas(600, 600);
}

function draw() {
  background(230) ;
  // textSize(62);
  textFont('Helvetica', 43)
  fill(85, 215, 150)
  text("Hello\nWorld", 100, 100)

  textFont('Courier New', 43)
  fill(123, 15, 150)
  text("Hello\nWorld", 600, 400)

  textFont('Georgia', 43)
  fill(240, 165, 10)
  text("Hello\nWorld", 1100, 700)
}
