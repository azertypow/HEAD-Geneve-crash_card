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

  // graphiques.dessinerAvecUneTrace((x, y) => {
  //   geometrie.dessinnerUnCarre({
  //     x: x,
  //     y: y,
  //     largeur: 50,
  //   })
  //
  //   geometrie.dessinerUneImage({
  //     imgUrl: "https://cdn.glitch.global/3597cb1f-c30b-47ea-b431-59f63007a799/img.jpg?v=1648644834020",
  //     x: x + 50,
  //     y: y + 50,
  //     largeur: 250,
  //   })
  // })











  // ----------------------------------------------------------------------

  // geometrie.grille({
  //   x: 0,
  //   y: 0,
  //   largeur: width,
  //   hauteur: height,
  //   colonnes: 10,
  //   lignes: 10,
  //   dessin: (numeroDeColonnes, numeroDeLigne, largeurDuneColonne, hauteurDuneLigne, xDansLaGrille, yDansLaGrille) => {
  //
  //     // dessiner ici
  //     geometrie.dessinnerUnCarre({
  //       x: xDansLaGrille + largeurDuneColonne / 2,
  //       y: yDansLaGrille + hauteurDuneLigne / 2,
  //       largeur: 10,
  //       hauteur: 10,
  //       modeDePositionnement: CENTER,
  //     })
  //
  //   },
  // })

  // ----------------------------------------------------------------------

  // geometrie.grille({
  //   x: 0,
  //   y: 0,
  //   largeur: width - gridMargin,
  //   hauteur: height - gridMargin,
  //   colonnes: grilleDivision,
  //   lignes:   grilleDivision,
  //   dessin: (numeroDeColonnes, numeroDeLigne, largeurDuneColonne, hauteurDuneLigne, xDansLaGrille, yDansLaGrille) => {
  //
  //     capteurs.drawCamera({
  //       x: xDansLaGrille + largeurDuneColonne / 2 + gridMargin / 2,
  //       y: yDansLaGrille + hauteurDuneLigne / 2 + gridMargin / 2,
  //       largeur: largeurDuneColonne - gridMargin,
  //       hauteur: hauteurDuneLigne - gridMargin,
  //       modeDePositionnement: CENTER,
  //     })
  //
  //     // dessiner ici
  //     geometrie.dessinnerUnCarre({
  //       x: xDansLaGrille + largeurDuneColonne / 2,
  //       y: yDansLaGrille + hauteurDuneLigne / 2,
  //       largeur: 10,
  //       hauteur: 10,
  //       modeDePositionnement: CENTER,
  //     })
  //
  //   },
  // })
  //
  // if(gestes.scroller() === "ne scroll pas") {
  //   // faire quelques chose si on scroll pas
  //   geometrie.dessinnerUnCarre({
  //     x: width / 2,
  //     y: height / 2,
  //     largeur: 50,
  //     hauteur: 50,
  //     modeDePositionnement: CENTER,
  //   })
  // }
  // else if (gestes.scroller() === "scroll vers le bas") {
  //   console.log("bas")
  //   grilleDivision--
  //   if(grilleDivision < 2) grilleDivision = 2
  // }
  // else if (gestes.scroller() === "scroll vers le haut") {
  //   console.log("haut")
  //   grilleDivision++
  // }

  // ----------------------------------------------------------------------
  // geometrie.dessinnerUnCarre({
  //   x: width / 2,
  //   y: height / 2,
  //   largeur: width / 3,
  //   hauteur: width / 3,
  //   modeDePositionnement: CENTER,
  //   strokeWeightValue: 0,
  //   fillColor: color(
  //       capteurs.webcamCouleur().r,
  //       capteurs.webcamCouleur().g,
  //       capteurs.webcamCouleur().b,
  //   ),
  // })
  // ----------------------------------------------------------------------

  // ----------------------------------------------------------------------
  // geometrie.dessinnerUnCarre({
  //   x: width / 2,
  //   y: height / 2,
  //   largeur: width / 3,
  //   hauteur: width / 3,
  //   modeDePositionnement: CENTER,
  //   strokeWeightValue: 0,
  //   fillColor: color(
  //       capteurs.webcamLuminosite(),
  //       255,
  //       255,
  //   ),
  // })
  // ----------------------------------------------------------------------

  // ----------------------------------------------------------------------

  capteurs.drawCamera({
    x: 0,
    y: 0,
    largeur: width,
    hauteur: height / 2,
  })

  // graphiques.pixeliser({
  //   definition: 20,
  //   colorFilter: true,          // true | false
  //   colorFilterThreshold: 150,  // entre 0 et 255. 125 par défaut
  // })

  // graphiques.flouter({
  //   intensity: 10,
  // })

  // graphiques.inverser()
  // graphiques.onlyNB()
  // graphiques.onlyRGB()

  // ----------------------------------------------------------------------

}

function keyPressed(e) {

  // enregistrer le canvas avec la touche ALT et S
  if(e.altKey && e.code === "KeyS") {
    saveCanvas("image_from_p5", "jpg")
  }
}
