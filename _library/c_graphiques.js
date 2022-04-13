class Graphiques {


  #arrayOfMousePosition = []


  //----------------------------------
  //Constructeur
  //----------------------------------
  constructor(parent) {
    this.parent=parent
  }

  //----------------------------------
  onlyRGB(){
    filter(POSTERIZE,2)
  }

  //----------------------------------
  onlyNB(){
    filter(GRAY)
  }

  //----------------------------------
  dessinerAvecUneTrace(draw = (x, y) => {

  }) {
    if(mouseIsPressed) this.#arrayOfMousePosition.push({x: mouseX, y: mouseY})
    for(const position of this.#arrayOfMousePosition) {
      draw(position.x, position.y)
    }
  }

  //----------------------------------
  flouter(
      {
        intensity = 2,
      } = {
        intensity: 2,
      },
  ) {
    filter(BLUR, intensity)
  }

  //----------------------------------
  inverser() {
    filter(INVERT)
  }

  //----------------------------------
  pixeliser(
      {
        definition = 20,
        colorFilter = false,
        colorFilterThreshold = 125,
        colorSelection = "vert",
      } = {
        definition: 20,
        colorFilter: false,
        colorFilterThreshold: 125,
        colorSelection: null,
      },
  ) {
    for (let i = 0; i < width; i += definition) {
      for (let j = 0; j < height; j += definition) {
        let c = this.parent.get(i, j)

        if (colorFilter) {
          let r = 0
          let g = 0
          let b = 0

          if (red(c) > colorFilterThreshold) r = 255
          if (green(c) > colorFilterThreshold) g = 255
          if (blue(c) > colorFilterThreshold) b = 255

          fill(r, g, b)

        } else {
          fill(c)
        }

        noStroke()
        rect(i, j, definition, definition)
      }
    }
  }

}
