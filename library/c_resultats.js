class Resultats {
  //for bug
  bug_x = random(width)
  bug_y = random(width)
  bug_maxY = random(height)
  bug_width = random(100)
  bug_height = 10
  iterationCounter = 0

  //----------------------------------
  //Constructeur
  //----------------------------------
  constructor(parent) {
    this.parent = parent;
    console.log("init resultats class");
    //one buffer
    this.buffer = createGraphics(width, height);

    //plein de particule
    this.particuleTab = [];
    for (let i = 0; i < 100; i++) this.particuleTab[i] = new ParticuleClass();

    //tresor
    this.tresorAng = 0;
  }

  // ----------------------------------
  //run
  //----------------------------------
  draw() {
    //console.log(this);
  }
  //----------------------------------
  multiplier() {
    let x = random(width);
    let y = random(height);
    let w = random(100);
    let h = random(100);
    let decX = random(-100, 100);
    let decY = random(-100, 100);
    if (frameCount % 10 == 0)
      this.buffer.copy(this.parent, x, y, w, h, x + decX, y + decY, w, h);
    image(this.buffer, 0, 0);
  }
  //----------------------------------
  pleinDeParticule(partSize = 10) {
    rectMode(CENTER);
    for (let i = 0; i < this.particuleTab.length; i++)
      this.particuleTab[i].draw(partSize);
    rectMode(CORNER);
  }
  //----------------------------------
  brouillard(color) {
    fill(red(color), green(color), blue(color), 100);
    rect(0, 0, width, height);
  }
  //----------------------------------
  ecranNoir() {
    fill(0);
    rectMode(CORNER);
    rect(0, 0, width, height);
  }
  //----------------------------------
  bug() {
    //stroke(255,0,0)/;
    //rect(this.bug_x,this.bug_y,this.bug_width,this.bug_height);
    this.buffer.copy(
      this.parent,
      this.bug_x,
      this.bug_y - 10,
      this.bug_width,
      this.bug_height,
      this.bug_x,
      this.bug_y,
      this.bug_width,
      this.bug_height
    );
    image(this.buffer, 0, 0);
    this.bug_y++;
    if (this.bug_y > this.bug_maxY || this.iterationCounter % 60 === 0) {
      this.bug_y = random(random(height), height)
      this.bug_maxY   = random(this.bug_y, height)
      this.bug_width  = random(20, width / 4)
      this.bug_x      = random(width)
    }
    if (this.iterationCounter % 30 === 0) this.bug_x += random(-30, 30)
    this.iterationCounter++
  }
  //----------------------------------
  barbouiller() {
    if (frameCount % 2 === 0)
      this.buffer.copy(
        this.parent,
        mouseX,
        mouseY,
        10,
        10,
        mouseX - 25,
        mouseY - 25,
        50,
        50,
      );
    image(this.buffer, 0, 0);
  }
  //----------------------------------
  miseEnAbime() {}
  //----------------------------------
  vagueSonore() {}
  //----------------------------------
  deformation() {}

  //----------------------------------
  sensationDUnTresor() {
    this.tresorAng += 0.0025;
    push();
    translate(width / 2, height / 2);
    rotate(this.tresorAng);
    rectMode(CENTER);
    let nb = 30;
    let ang = TWO_PI / nb;
    noStroke();
    fill(255, 255, 100, sin(this.tresorAng * 20) * 60 + 30);
    for (let i = 0; i < nb; i++) {
      rotate(ang);
      rect(600, 0, 900, 10, 10);
    }
    rectMode(CORNER);
    pop();
  }
  //----------------------------------
  pleinDeVoix() {}
}

//---------------------------------------------
//PARTICULE CLASS
//---------------------------------------------
class ParticuleClass {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vitx = random(-1, 1);
    this.vity = random(-1, 1);
    this.rotation = random(-0.01, 0.01);
    this.vitRotation = random(-0.1, 0.1);
  }
  //---------------------------------------------
  draw(partSize = 10) {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(255);
    rect(0, 0, partSize, partSize);
    pop();
    this.x += this.vitx;
    this.y += this.vity;
    this.rotation += this.vitRotation;
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
  //---------------------------------------------
}
