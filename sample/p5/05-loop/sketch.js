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

let step        = 60
let squareWidth = 30

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
// Placer le code pour dessiner dans cette fonction
// ------------------------------------------------------------------
function draw() {

  background(couleurDuCanvas)

  // dessiner ici

  for(let x = 0; x < width; x += step) {
    for(let y = 0; y < height; y += step) {

      // transformation
      push()
      rectMode(CENTER)
      translate(x, y)
      angleMode(DEGREES)
      rotate(45)
      // rotate(45 + x + y)
      // rotate(mouseX + x + y)

      // style
      noFill()
      stroke(
          0,    // rouge  (0 - 255)
          180,  // vert   (0-  255)
          180,  // bleu   (0 - 255)
      )

      stroke(
          0,                            // rouge  (0 - 255)
          mouseY / 1_000_000 * x * y,   // vert   (0-  255)
          180,                          // bleu   (0 - 255)
      )

      strokeWeight(10)

      // element
      rect(
          0,
          0,
          squareWidth,
          squareWidth,
      )
      pop()

    }
  }
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
