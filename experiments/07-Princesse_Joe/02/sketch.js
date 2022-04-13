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
let image_1

// Setup / s'exécute une seule fois
function setup() {
  // ------------------------------------------------------------------
  // initialisation des parametres.
  // Ces valeurs peuvent etre modifiée
  // ------------------------------------------------------------------
  canvasHeight = 1280
  canvasWidth = 905 // le ratio d'un A3
  couleurDuCanvas = color(0, 0, 255)

  // creer le canvas
  createCanvas(canvasWidth, canvasHeight, P2D)
  pixelDensity(.5)

  // instance, pour initialiser les outils importer plus haut.
  // là aussi, éviter de toucher
  capteurs    = new Capteurs()
  gestes      = new Gestes()
  resultats   = new Resultats(this)
  graphiques  = new Graphiques(this)
  image_1 = loadImage ('https://cdn.glitch.global/5e11a20b-1654-432e-8fc5-d6959f247371/Capture%20d%E2%80%99%C3%A9cran%202022-03-03%20151853.png?v=1649770263983')
}

// ------------------------------------------------------------------
// Draw / Boucle infinie
// Placer le code pour déssiner dans cette fonction
// ------------------------------------------------------------------
function draw() {

  background(couleurDuCanvas)

  // déssiner le rectangle
  rect(
      20,   // position x | par rapport a l'angle en haut à gauche
      20,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      200,  // height
  )
   circle(
     mouseX,
     mouseY,
     100,
     100,
  )
  
  image(
    image_1,
    20,
    500,
    865,
    865 / (image_1.width / image_1.height),)
  
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
