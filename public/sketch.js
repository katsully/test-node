// FOUR
var socket;

function setup() {
  createCanvas(400, 400);
  background('red');

  // FOUR
  socket = io.connect('http://localhost:3000')

  // FIVE
  // second parameter is a callback
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
  ellipse(data.x, data.y, 25, 25);
}

function draw() {
  
  // TWO
  // ellipse(mouseX, mouseY, 25, 25);
}

// FIVE
function mouseDragged() {
  console.log("Sending: ", mouseX, mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit('mouse', data);

  ellipse(mouseX, mouseY, 25, 25);
}
