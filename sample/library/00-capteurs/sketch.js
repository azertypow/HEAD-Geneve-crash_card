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
  // AJOUTER LA VUE DE LA WEBCAM
  capteurs.drawCamera({
    x:      canvasWidth / 2,
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
  // -> fin COULEUR EN FONCTION DE LA WEBCAM
  // ------------------------------------------------------------------



  //multiplier des bouts
  // resultats.multiplier();

  //brouillard simple
  // resultats.brouillard(color(0,0,150));

  //plein de particules
  // resultats.pleinDeParticule(10);



  // ------------------------------------------------------------------
  //scrolling bug
  //resultats.bug();



  // ------------------------------------------------------------------
  //barbouillier avec la souris
  // resultats.barbouiller()



  // ------------------------------------------------------------------
  //only rgb
  // graphiques.onlyRGB()



  // ------------------------------------------------------------------
  //only GRAY
  // graphiques.onlyNB()



  // ------------------------------------------------------------------
  //pixeliser   (^< ⋅⋅⋅

  // sans options
  // graphiques.pixeliser()

  // avec options
  // graphiques.pixeliser({
  //   definition: 10,
  //   colorFilter: true,          // true | false
  //   colorFilterThreshold: 125,  // entre 0 et 255. 125 par défaut
  // })



  // ------------------------------------------------------------------
  //flouter

  // sans options
  // graphiques.flouter()

  // avec options
  // graphiques.flouter({
  //   intensity: 10, // 2 par défaut
  // })

}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
