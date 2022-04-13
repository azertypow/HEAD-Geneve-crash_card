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
  couleurDuCanvas = color(120, 70, 100)

  // creer le canvas
  createCanvas(canvasWidth, canvasHeight, P2D)
  pixelDensity(.5)

  // instance, pour initialiser les outils importer plus haut.
  // là aussi, éviter de toucher
  capteurs    = new Capteurs()
  gestes      = new Gestes()
  resultats   = new Resultats(this)
  graphiques  = new Graphiques(this)
  image_1 = loadImage('https://cdn.glitch.global/5e11a20b-1654-432e-8fc5-d6959f247371/eggplant_1f346.png?v=1649764365422')
  image_2 = loadImage('https://cdn.glitch.global/5e11a20b-1654-432e-8fc5-d6959f247371/eggplant_1f346.png?v=1649764365422')
  image_3=loadImage ('https://cdn.glitch.global/5e11a20b-1654-432e-8fc5-d6959f247371/billy-huynh-v9bnfMCyKbg-unsplash.jpg?v=1649765897544')
}

// ------------------------------------------------------------------
// Draw / Boucle infinie
// Placer le code pour déssiner dans cette fonction
// ------------------------------------------------------------------
function draw() {

  background(couleurDuCanvas)

  // déssiner le rectangle
  ellipse(
      width/2,   // position x | par rapport a l'angle en haut à gauche
      height/2,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      400,  // height
  )
  
 image(
      image_1,
      mouseX,
      mouseY,
      300,
      300 / (image_1.width / image_1.height),
  )
  
  
  image(
      image_3,
      0,
      0,
      300,
     300 / (image_1.width / image_1.height),
    
  )
  
   ellipse(
      width/2,   // position x | par rapport a l'angle en haut à gauche
      height/2,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      400,  // height
  )
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
