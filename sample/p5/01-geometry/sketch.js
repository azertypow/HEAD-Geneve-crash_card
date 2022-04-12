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
  // DESSINER DANS P5


  // 1. DEFFINIR LE STYLE

  //choisir la couleur de FOND
  // de l'élément graphique que l'on va déssiner
  fill(
      200,  // rouge  (0 - 255)
      0,    // vert   (0-  255)
      100,  // bleu   (0 - 255)
  )

  //choisir la couleur de CONTOUR
  stroke(
      0,    // rouge  (0 - 255)
      180,  // vert   (0-  255)
      180,  // bleu   (0 - 255)
  )

  // choisir l'épaisseur du contour
  strokeWeight(10)


  // 2. DESSINNER LE OU LES ÉLÉMENTS GRAPHIQUES
  // déssiner le rectangle
  rect(
      20,   // position x | par rapport a l'angle en haut à gauche
      20,   // position y | par rapport a l'angle en haut à gauche
      400,  // width
      200,  // height
  )

  // -> fin DESSINER DANS P5
  // ------------------------------------------------------------------





  // // ------------------------------------------------------------------
  // // DESSINER UNE ÉLIPSE
  //
  // // FOND
  // fill(
  //     200,    // rouge  (0 - 255)
  //     0,      // vert   (0-  255)
  //     100,    // bleu   (0 - 255)
  // )
  //
  // // CONTOUR
  // stroke(
  //     250,    // rouge  (0 - 255)
  //     200,    // vert   (0-  255)
  //     0,      // bleu   (0 - 255)
  // )
  //
  // // ÉPAISSEUR DE CONTOUR
  // strokeWeight(10)
  //
  // // ELLEMENT
  // ellipse(
  //     680, // position x | par rapport au centre
  //     120, // position y | par rapport au centre
  //     400, // width
  //     200, // height
  // )
  // // -> fin DESSINER UNE ÉLIPSE
  // // ------------------------------------------------------------------
  //
  //
  //
  //
  //
  // // ------------------------------------------------------------------
  // // DESSINER UNE LIGNE
  //
  // // FOND
  // fill(
  //     200,    // rouge  (0 - 255)
  //     0,      // vert   (0-  255)
  //     100,    // bleu   (0 - 255)
  // )
  //
  // // CONTOUR
  // stroke(
  //     250,    // rouge  (0 - 255)
  //     200,    // vert   (0-  255)
  //     0,      // bleu   (0 - 255)
  // )
  //
  // // ÉPAISSEUR DE CONTOUR
  // strokeWeight(10)
  //
  // // TERMINAISON
  // // strokeCap(ROUND)
  // strokeCap(SQUARE)
  // // strokeCap(PROJECT)
  //
  // // ELLEMENT
  // line(
  //     20, //x1
  //     240, //y1
  //     905 - 20, //x2
  //     480,  //y2
  // )
  // // -> fin DESSINER UNE LIGNE
  // // ------------------------------------------------------------------
  //
  //
  //
  //
  //
  // // ------------------------------------------------------------------
  // // DESSINER UN TRIANGLE
  //
  // // FOND
  // noFill()
  //
  // // CONTOUR
  // stroke(
  //     0,    // rouge  (0 - 255)
  //     180,  // vert   (0-  255)
  //     180,  // bleu   (0 - 255)
  // )
  //
  // // ÉPAISSEUR DE CONTOUR
  // strokeWeight(10)
  //
  // // ELLEMENT
  // triangle(
  //     452,  // x1
  //     200,  // y1
  //     0,    // x2
  //     1280, // y2
  //     905,  // x3
  //     1280, // y3
  // )
  //
  //
  // // -> fin DESSINER UN TRIANGLE
  // // ------------------------------------------------------------------
  //
  //
  //
  //
  //
  // // ------------------------------------------------------------------
  // // AJOUTER UNE IMAGE
  // image(
  //     image_1,
  //     20,
  //     500,
  //     865,
  //     865 / (image_1.width / image_1.height),
  // )
  // // -> fin AJOUTER UNE IMAGE
  // // ------------------------------------------------------------------
}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
