// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
let movers = [];




let earth;
let sun;
let mercury;
let venus;
let jupiter;
let saturn;
let mars;
let neptune;
let uranus;



function preload() {
  sun = loadImage ('sun.png');
  earth = loadImage ('pngegg.png');
  mercury = loadImage ('mercury.png');
  venus = loadImage ('venus.png');
  jupiter = loadImage ('jupiter.png');
  saturn = loadImage ('saturn.png');
  mars = loadImage ('mars.png');
  neptune = loadImage ('neptune.png');
  uranus = loadImage ('uranus.png');

}

// let sun;
// function preload() {
//   sun = loadImage ('sun.png');
// }

// let earth;
// function preload() {
//   earth = loadImage ('earth.png');
// }


let attractor;

function setup() {
  createCanvas(700, 450);
  for (let i = 0; i < 8; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
  for (let i = 0; i < 7; i++) {
    movers[i] = new Mover2(random(0.1, 2), random(width), random(height));
  }
  for (let i = 0; i < 6; i++) {
    movers[i] = new Mover3(random(0.1, 2), random(width), random(height));
  }
   for (let i = 0; i < 5; i++) {
    movers[i] = new Mover4(random(0.1, 2), random(width), random(height));
  }
   for (let i = 0; i < 4; i++) {
    movers[i] = new Mover5(random(0.1, 2), random(width), random(height));
  }
   for (let i = 0; i < 3; i++) {
    movers[i] = new Mover6(random(0.1, 2), random(width), random(height));
  }
    for (let i = 0; i < 2; i++) {
    movers[i] = new Mover7(random(0.1, 2), random(width), random(height));
  }
    for (let i = 0; i < 1; i++) {
    movers[i] = new Mover8(random(0.1, 2), random(width), random(height));
  }

  attractor = new Attractor();
  

}

function draw() {
  background(0);

  attractor.display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}