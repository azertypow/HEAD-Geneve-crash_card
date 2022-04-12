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

let image_1

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

  background(couleurDuCanvas);


  // ------------------------------------------------------------------
  // POSER DU TEXT aligner à gauche
  noStroke()
  fill(0, 0, 0)

  textSize(100)     // taille de la typo
  textLeading(80)   // interligne

  textAlign('left')
  text(
      "texte\nà gauche",          // valeur
      20,                     // x
      canvasHeight / 4 * 2,    // y
  )
  // -> fin POSER DU TEXT aligner à gauche
  // ------------------------------------------------------------------





  // ------------------------------------------------------------------
  // POSER DU TEXT centré

  noStroke()
  fill(0, 240, 240)

  textSize(100)     // taille de la typo
  textLeading(80)   // interligne

  textAlign('center')
  text(
      "texte\ncentré dans\nla page",  // valeur
      10,                             // x
      canvasHeight / 4 * 3,           // y
      canvasWidth,                    // largeur du bloc de texte
  )
  // -> fin POSER DU TEXT centré
  // ------------------------------------------------------------------




  // ------------------------------------------------------------------
  // POSER DU TEXT aligné à droite

  noStroke()
  fill(0, 0, 240)

  textSize(100)     // taille de la typo
  textLeading(80)   // interligne

  textAlign('right')
  text(
      "texte\nà droite",   // valeur
      canvasWidth - 20, // x pa rapport à la droite
      80,               // y
  )
  // -> fin POSER DU TEXT aligné à droite
  // ------------------------------------------------------------------


}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
