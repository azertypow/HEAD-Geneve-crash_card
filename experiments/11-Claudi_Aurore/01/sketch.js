/** @type {Capteurs}*/    let capteurs    // sert pout l'importation des outils de capteurs, éviter de modifier
/** @type {Gestes}*/      let gestes      // sert pout l'importation des outils de gestes, éviter de modifier
/** @type {Resultats}*/   let resultats   // sert pout l'importation des outils de resultats, éviter de modifier
/** @type {Graphiques}*/  let graphiques  // sert pout l'importation des outils de graphiques, éviter de modifier

// ------------------------------------------------------------------
// déclaration des parametres
// [voir "initialisation des parametres" dans la fonction setup()
// pour leurs initialisation]
// ------------------------------------------------------------------
let canvasHeight
let canvasWidth
let couleurDuCanvas

// Setup / s'exécute une seule fois
function setup() {
  // ------------------------------------------------------------------
  // initialisation des parametres.
  // Ces valeurs peuvent etre modifiée
  // ------------------------------------------------------------------
  canvasHeight = 1280
  canvasWidth = 905 // le ratio d'un A3
  couleurDuCanvas = color(0, 255, 0)

  // creer le canvas
  createCanvas(canvasWidth, canvasHeight, P2D)
  pixelDensity(.5)

  // instance, pour initialiser les outils importer plus haut.
  // là aussi, éviter de toucher
  capteurs    = new Capteurs()
  gestes      = new Gestes()
  resultats   = new Resultats(this)
  graphiques  = new Graphiques(this)
}

// ------------------------------------------------------------------
// Draw / Boucle infinie
// Placer le code pour déssiner dans cette fonction
// ------------------------------------------------------------------
function draw() {

  background(couleurDuCanvas)

  // déssiner le rectangle
  rect(
      400,   // position x | par rapport a l'angle en haut à gauche
      400,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      400,  // height
  )
  noStroke();
  fill(0,0,255);
  
    rect(
      200,   // position x | par rapport a l'angle en haut à gauche
      200,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      700,  // height
  )
    noStroke();
    fill(0,0,255);
  rect(
      100,   // position x | par rapport a l'angle en haut à gauche
      50,   // position y | par rapport a l'angle en haut à gauche
      200,  // width
      50,  // height
  )
    noStroke();
    fill(0,0,255);
    rect(
      800,   // position x | par rapport a l'angle en haut à gauche
      200,   // position y | par rapport a l'angle en haut à gauche
      50,  // width
      75,  // height
  )
    noStroke();
    fill(0,0,255);
  
    ellipse(200,400,500,50);
  ellipse(600,400,500,50);
  ellipse(200,400,50,500);
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
