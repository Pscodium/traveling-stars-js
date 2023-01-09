const numStars = 500;
let stars = [];



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);
  strokeWeight(2);
  
  for(let i = 0; i < numStars; i ++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(0, 50);
  
  const acc = map(mouseX, 0, width, 0.005, 0.2);
  
  stars = stars.filter(star => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });
  
  while(stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;  
}