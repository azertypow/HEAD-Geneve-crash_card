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
  couleurDuCanvas = color(255, 255, 255)

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

  // dessiner ici
  
  
  // ------------------------------------------------------------------
  // DESSINER UNE ÉLIPSE

  // FOND
  fill(
      0,    // rouge  (0 - 255)
      0,      // vert   (0-  255)
      0,    // bleu   (0 - 255)
  )

  // CONTOUR
  noStroke() //c'est pour ne pas avoir de contours
  

  // ELEMENT
  ellipse(
      800, // position x | par rapport au centre
      300, // position y | par rapport au centre
      600, // width
      200, // height
  )
  // -> fin DESSINER UNE ÉLIPSE
  // ------------------------------------------------------------------

  
  
  
  
  
  
  
  
  
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }