class Bird extends BaseClass{
    constructor(x, y) {
      //to transfer the constructor() commands
     super(x, y, 50, 50);
   
      this.image = loadImage("sprites/bird.png");
     
    };

    display(){
            this.body.position.y= mouseY;
            this.body.position.x= mouseX;
            super.display();
    }
  };
  