class Gestes {
  #mousewheelValue = 0

  //----------------------------------
  //  CONSTRUCTEUR
  //----------------------------------
  constructor() {
    window.addEventListener("wheel", event => {
      this.#mousewheelValue = Math.sign(event.deltaY);
    })
    window.setInterval(()=>{
      this.#mousewheelValue = 0
    }, 500)
  }
  //----------------------------------
  /** get only boolean value */
  caresser(){

    return false;
  }
  //----------------------------------
  scroller(){
    if(this.#mousewheelValue > 0) return "scroll vers le bas"
    else if(this.#mousewheelValue < 0) return "scroll vers le haut"
    return "ne scroll pas";
  }
  //----------------------------------
  pianoter(){

    return false;
  }
  //----------------------------------
  clinDOeil(){

    return false;
  }
  //----------------------------------
  bailler(){

    return false;
  }
  //----------------------------------
  deleteDeleteDelete(){

    return false;
  }
  //----------------------------------
  ecrire(){

    return false;
  }
  //----------------------------------
  fermerLesYeux(){

    return false;
  }

  //----------------------------------
  transferer() {
    return false;
  }

  ecouter () {
    return false;
  }

}
