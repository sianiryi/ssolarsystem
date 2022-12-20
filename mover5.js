// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover5 {
  constructor(mass, x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    
      stroke(0);
    if (this.dragging) {
      fill(255);
    } else if (this.rollover) {
      fill(175);
    } else {
      fill(101, 200);
    }
   imageMode(CENTER);
    image(
      saturn,
      this.position.x,
      this.position.y,
      this.mass * 20,
      this.mass * 10
    );
  }
    
  //   stroke(255);
  //   strokeWeight(2);
  //   fill(255, 175);
  //   image(earth,this.position.x, this.position.y, this.mass /20, this.mass  /20 );
  // 

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}
