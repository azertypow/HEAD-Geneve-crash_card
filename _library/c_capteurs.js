class Capteurs {
  // valeur privé (marquée avec un "#" devant)
  // éviter de toucher
  #capture          = createCapture(VIDEO)
  #somePickedColor  = []
  #cameraWidth     = 640 / 2
  #cameraHeight    = 480 / 2

  constructor() {
    this.#capture.size(this.#cameraWidth, this.#cameraHeight)
    this.#capture.style('opacity', '0')
  }

  get cameraWidth()   {return this.#cameraWidth}
  get cameraHeight()  {return this.#cameraHeight}
  get cameraRatio()   {return this.#cameraWidth / this.#cameraHeight}

  drawCamera({
               x      = 0,
               y      = 0,
               width  = 100,
               height = 100,
             }) {
    image(
        this.#capture,
        x,
        y,
        width,
        height,
    )
  }

  //--------------
  webcamCouleur() {
    this.#capture.loadPixels()

    const floorColorValue = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    }

    for(let x = this.#capture.width / 2 - 10; x < this.#capture.width / 2 + 10; x++) {
      for(let y = this.#capture.height / 2 - 10; y < this.#capture.height / 2 + 10; y++) {
        const index = (x + y * this.#capture.width) * 4;
        floorColorValue.r += this.#capture.pixels[index + 0]
        floorColorValue.g += this.#capture.pixels[index + 1]
        floorColorValue.b += this.#capture.pixels[index + 2]
        floorColorValue.a += this.#capture.pixels[index + 3]

      }
    }

    floorColorValue.r = floorColorValue.r / (20 * 20)
    floorColorValue.g = floorColorValue.g / (20 * 20)
    floorColorValue.b = floorColorValue.b / (20 * 20)
    floorColorValue.a = floorColorValue.a / (20 * 20)

    return floorColorValue
  }

  webcamLuminosite() {
    const {r, g, b, a} = this.webcamCouleur()
    return Math.round( (r + g + b + a) / 255 )
  }

  //-------------- return keypress value
  clavier() {
    if(keyIsPressed){
      return key;
    }else{
      return false;
    }
  }

  // return boolean
  touche(letter){
    return false;
  }

  toucheEnfonce(letter) {
    return false;
  }

  toucheRelache(letter) {
    return false;
  }

  //--------------
  micro() {
    return false;
  }

  /**
  click droit
  */
  clickDroit() {
    return false;
  }

  clickDroitEnfonce() {
    return false;
  }

  clickDroitRelache() {
    return false;
  }

  /**
  click gauche
  */
  clickGauche() {
    return false;
  }
  clickGaucheEnfonce() {
    return false;
  }

  clickGaucheRelache() {
    return false;
  }
}
