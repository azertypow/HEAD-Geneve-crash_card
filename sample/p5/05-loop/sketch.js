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

let step        = 10
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
  
  for(let index = 0; index < 100; index = index + 10) {
    // index = 0, ça veut dire que l'index commence à 0
    //index+= c'est pareil que index +1
    
    console.log(index)
    
  }
}

// ------------------------------------------------------------------
// Draw / Boucle infinie
// Placer le code pour dessiner dans cette fonction
// ------------------------------------------------------------------
function draw() {

  background(couleurDuCanvas)

  // dessiner ici


  for(let x = 0; x < width; x = x + squareWidth*2) {
    //x+60 c'est les colonnes dans l'axe x. plus x est grand, plus les colonnes sont éloignées
    for(let y = 0; y < height / 2; y = y + squareHeight*2) {

      // transformation
      push()
      rectMode(CENTER)
      translate(x, y)
      angleMode(DEGREES)
      rotate(45)
      // rotate(45 + x + y)a
      // rotate(mouseX + x + y)

      // style
      noFill()
      stroke(
          0,    // rouge  (0 - 255)
          180,  // vert   (0-  255)
          180,  // bleu   (0 - 255)
      )

      /*
      stroke(
          0,                            // rouge  (0 - 255)
          mouseY / 1_000_000 * x * y,   // vert   (0-  255)
          180,                          // bleu   (0 - 255)
      )
      */
      strokeWeight(5)

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

