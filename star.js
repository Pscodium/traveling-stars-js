class Star {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prevPos = createVector(x, y);
      
      this.vel = createVector(0, 0);
      
      this.ang = atan2(y - (height/2), x - (width/2));
    }
    
    isActive() {
      return onScreen(this.prevPos.x, this.prevPos.y);
    }
    
    update(acc) {
      this.vel.x += cos(this.ang) * acc;
      this.vel.y += sin(this.ang) * acc;
      
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
      
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    }
    
    draw() {
      const alpha = map(this.vel.mag(), 0, 3, 0, 255);
      stroke(255, alpha);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    }
  }