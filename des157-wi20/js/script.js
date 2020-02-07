

function setup() {
var myCanvas = createCanvas(800,250);
  rectMode(CENTER);
  noFill();
  background('#e4ebed');
  myCanvas.parent(mySketch);
}

function draw(){
  var brushSize = 100;
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, brushSize, brushSize);
    stroke('#B79492');//mode 1: mouse pressed
  } else {
    rect(mouseX, mouseY, brushSize * 1, brushSize * 1);
    stroke('#545E56');//mode 2: mouse not pressed
  }
}
