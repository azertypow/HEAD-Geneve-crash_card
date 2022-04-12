/** @type {Capteurs}*/  let capteurs    // sert pout l'importation des outils de capteurs, éviter de modifier
/** @type {Gestes}*/    let gestes      // sert pout l'importation des outils de gestes, éviter de modifier
/** @type {Resultats}*/    let resultats   // sert pout l'importation des outils de resultats, éviter de modifier
/** @type {Graphiques}*/    let graphiques  // sert pout l'importation des outils de graphiques, éviter de modifier

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
  image_1 = loadImage('https://cdn.glitch.global/3597cb1f-c30b-47ea-b431-59f63007a799/img.jpg?v=1648644834020')

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

  // style
  noFill()
  stroke(
      0,    // rouge  (0 - 255)
      180,  // vert   (0-  255)
      180,  // bleu   (0 - 255)
  )
  strokeWeight(10)

  // ------------------------------------------------------------------
  // variable accessible dans p5
  // ------------------------------------------------------------------



  // ------------------------------------------------------------------
  // taille du canvas:
  // - width
  // - height

  rect(
      0,
      1280 / 2,
      200,
      200,
  )
  rect(
      width / 2,
      height / 2,
      200,
      200,
  )

  let positionX = width / 2
  let positionY = height / 2

  triangle(
      positionX,
      positionY,
      positionX + 75, // x2
      positionY + 100, // y2
      positionX - 75, // x3
      positionY + 100, // y3
  )



  // ------------------------------------------------------------------
  // position de la souris
  // mouseX
  // mouseY

  triangle(
      mouseX,
      mouseY,
      mouseX + 75, // x2
      mouseY + 100, // y2
      mouseX - 75, // x3
      mouseY + 100, // y3
  )

  rect(
      0,
      mouseY,
      200,
      200,
  )
  rect(
      width / 2,
      mouseY,
      200,
      200,
  )



  // ------------------------------------------------------------------
  // le nombre de frame
  // frameCount
  rect(
      0,
      frameCount,
      200,
      200,
  )
  rect(
      width / 2,
      frameCount,
      200,
      200,
  )

}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
