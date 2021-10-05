class dustbin{
    constructor(X,Y,width,height){
        var ball_options = {
            isStatic : false,
            restitution : 0.3,
            friction :0,
            density :1.2
       
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);


    }
    
    display(){
        rectMode(CENTER);
        fill(255);
        rect[this.body.position.X , this.body.positionY , this.width , this,this.height];
    }
}