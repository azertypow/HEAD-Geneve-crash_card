class Graphiques {
  //----------------------------------
  //Constructeur
  //----------------------------------
  constructor(parent) {
    this.parent=parent;
    console.log("init Graphiques class");
  }
  //----------------------------------
  onlyRGB(){
    filter(POSTERIZE,2);
  }
  //----------------------------------
  onlyNB(){
    filter(GRAY);
  }
  //----------------------------------
  flouter(){
    filter(BLUR,2);
  }
  //----------------------------------
  pixeliser(){
    for(let i=0;i<width;i+=20){
      for(let j=0;j<height;j+=20){
        let c = this.parent.get(i,j);
        let r=0;
        let g=0;
        let b=0;
        if(red(c)>125)r=255
        if(green(c)>125)g=255
        if(blue(c)>125)b=255
        fill(r,g,b);
        noStroke();
        rect(i,j,20,20)
      }  
    }
  }
  
}