/** @type {Capteurs}*/  let capteurs    // sert pout l'importation des outils de capteurs, éviter de modifier
/** @type {Geometrie}*/  let geometrie    // sert pout l'importation des outils de capteurs, éviter de modifier
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

let gridMargin = 10
let grilleDivision = 2

// Setup / s'exécute une seule fois
function setup() {
  // ------------------------------------------------------------------
  // initialisation des parametres.
  // Ces valeurs peuvent etre modifiée
  // ------------------------------------------------------------------
  canvasHeight    = windowHeight
  canvasWidth     =  windowWidth
  couleurDuCanvas = color(255, 255, 255)

  // creer le canvas
  createCanvas(canvasWidth, canvasHeight, P2D)
  pixelDensity(1)

  // instance, pour initialiser les outils importer plus haut.
  // là aussi, éviter de toucher
  capteurs    = new Capteurs()
  geometrie = new Geometrie()
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

  // ----------------------------------------------------------------------

  capteurs.drawCamera({
    x: 0,
    y: 0,
    largeur: width,
    hauteur: height / 2,
  })

  graphiques.pixeliser({
    definition: 20,
    colorFilter: true,          // true | false
    colorFilterThreshold: 150,  // entre 0 et 255. 125 par défaut
  })

  // graphiques.flouter({intensity: 5})

  // graphiques.inverser()
  // graphiques.onlyNB()
  // graphiques.onlyRGB()

}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
