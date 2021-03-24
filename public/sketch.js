// FOUR
var socket;

// SIX
var redButton;
var greenButton;
var mycolor = color('blue');

function setup() {
  createCanvas(400, 400);
  background('red');

  // FOUR
  // socket = io.connect('http://localhost:3000')

  // HEROKU ONLY
  socket = io.connect('https://test-node-kat.herokuapp.com/');

  // FIVE
  // second parameter is a callback
  socket.on('mouse', newDrawing);

  // SIX
  redButton = select('#red');
  greenButton = select('#green');
  redButton
}

function newDrawing(data){
  fill(mycolor);
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
