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
  canvasWidth = canvasHeight / 42 * 29.7 // 42 * 29.7 pour avoir le ratio d'un A3
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
  // début bloque exemple
  // pour dessiner une RECTANGLE
  // peut etre copié/collé

  // 1. DEFFINIR LE STYLE

  //choisir la couleur de FOND
  // de l'élément graphique que l'on va déssiner
  fill(
      200,  // rouge  (0 - 255)
      0,    // vert   (0-  255)
      100,     // bleu   (0 - 255)
  )
  // choisir l'épaisseur du contour
  strokeWeight(10)
  //choisir la couleur de CONTOUR
  stroke(
      0,    // rouge  (0 - 255)
      180,  // vert   (0-  255)
      180,    // bleu   (0 - 255)
  )

  // 2. DESSINNER LE OU LES ÉLÉMENTS GRAPHIQUES

  // déssiner le rectangle
  rect(
      10,   // position x | par rapport a l'angle en haut à gauche
      10,   // position y | par rapport a l'angle en haut à gauche
      300,  // width
      200,  // height
  )

  // -> fin bloque exemple pour dessiner une rectangle
  // ------------------------------------------------------------------



  // ------------------------------------------------------------------
  // dessiner une ÉLIPSE

  // 1. DEFFINIR LE STYLE

  // FOND
  fill(
      200,    // rouge  (0 - 255)
      0,      // vert   (0-  255)
      100,    // bleu   (0 - 255)
  )

  // ÉPAISSEUR DE CONTOUR
  strokeWeight(10)

  // CONTOUR
  stroke(
      250,    // rouge  (0 - 255)
      200,    // vert   (0-  255)
      0,      // bleu   (0 - 255)
  )

  ellipse(
      410, // position x | par rapport au centre
      60, // position y | par rapport au centre
      100, // width
      100, // height
  )

  // -> fin bloque exemple pour dessiner une élipse
  // ------------------------------------------------------------------


  // AJOUTER UNE IMAGE
  image(
      image_1,
      10,
      250,
      500 * (image_1.width / image_1.height),
      500,
  )

  // POSER DU TEXT
  noStroke()
  fill(0)

  textSize(100)     // taille de la typo
  textLeading(80)   // interligne

  textAlign('left')
  text(
      "text\na gauche",          // valeur
      10,                     // x
      canvasHeight / 4 * 2,    // y
  )

  textAlign('center')
  text(
      "text\ncentre dans\nla page",          // valeur
      10,                     // x
      canvasHeight / 4 * 3,    // y
      canvasWidth,
      canvasHeight,
  )




  // ------------------------------------------------------------------
  // AJOUTER LA VUE DE LA WEBCAM
  capteurs.drawCamera({
    x:      0,
    y:      canvasHeight / 2,
    height: capteurs.cameraHeight,
    width:  capteurs.cameraWidth,
  })
  // -> fin AJOUTER LA VUE DE LA WEBCAM
  // ------------------------------------------------------------------


  // ------------------------------------------------------------------
  // COULEUR EN FONCTION DE LA WEBCAM

  noStroke()
  fill(
      capteurs.webcamCouleur().r,
      capteurs.webcamCouleur().g,
      capteurs.webcamCouleur().b,
  )
  rect(
      height / 2,
      width / 2,
      50,
      50,
  )
  // ------------------------------------------------------------------

  //multiplier des bouts
  // resultats.multiplier();

  //brouillard simple
  // resultats.brouillard(color(0,0,150));

  //plein de particules
  // resultats.pleinDeParticule(10);

  //scrolling bug
  resultats.bug();

  //barbouillier avec la souris
  // resultats.barbouiller();

  //only rgb
  // graphiques.onlyRGB();

  //only GRAY
  // graphiques.onlyNB();

  //pixeliser   (^< ⋅⋅⋅
  // graphiques.pixeliser();

  //flouter
  // graphiques.flouter();
  //

}

function keyPressed() {

}
