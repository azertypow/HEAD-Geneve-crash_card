class Geometrie {

    #listOfImages = {}

    constructor() {

    }

    dessinnerUnCarre({
        x = 0,
        y = 0,
        largeur = 100,
        hauteur = 200,
        strokeWeightValue = 10,
        fillColor =  color(255, 0, 0),
        strokeColor = color(0, 0, 255),
        modeDePositionnement = CORNER
                     }) {
        rectMode(modeDePositionnement)
        fill(fillColor)
        stroke(strokeColor)
        strokeWeight(strokeWeightValue)

        rect(
            x,
            y,
            largeur,
            hauteur,
        )
    }

    dessinerUneElipse({
         x = 0,
         y = 0,
         largeur = 100,
         hauteur = 200,
         strokeWeightValue = 10,
         fillColor =  color(255, 0, 0),
         strokeColor = color(0, 0, 255),
                     }) {
        fill(fillColor)
        stroke(strokeColor)
        strokeWeight(strokeWeightValue)

        ellipse(
            x,
            y,
            largeur,
            hauteur,
        )
    }



    dessinerUneImage({
        imgUrl,
                         x = 0,
                         y = 0,
                         largeur = 100,
                         hauteur = null,
                         modeDePositionnement = CORNER,
                     }) {

        if(! (imgUrl in this.#listOfImages) ) this.#listOfImages[imgUrl] = loadImage(imgUrl)

        const imageRatio = this.#listOfImages[imgUrl].width /  this.#listOfImages[imgUrl].height
        imageMode(modeDePositionnement)

        image(
            this.#listOfImages[imgUrl],
            x,
            y,
            largeur,
            hauteur === null ? largeur / imageRatio : hauteur,
        )
    }

    grille({
               x = 0,
               y = 0,
               colonnes = 5,
               lignes = 2,
               largeur = width,
               hauteur = height,
               dessin = (numeroDeColonnes, numeroDeLigne, largeurDuneColonne, hauteurDuneLigne, xDansLaGrille, yDansLaGrille) => {},
           }) {
        const collWidth = Math.round(largeur / colonnes)
        const lineHeight = Math.round(hauteur / lignes)
        for (let xGrid = x; xGrid < largeur; xGrid+= collWidth) {
            for (let yGrid = y; yGrid < hauteur; yGrid+= lineHeight) {
                dessin(
                    xGrid / collWidth,
                    yGrid / lineHeight,
                    collWidth,
                    lineHeight,
                    xGrid,
                    yGrid,
                )
            }
        }
    }
}
