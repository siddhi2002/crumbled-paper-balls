class Paper{
    constructor(X,Y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.7

        }
        this.bodies = Body.circle(X,Y,radius,options);
        this.radius = radius
    }
    worldadd(world,thisbody);
}
display() 

ellipseMode[radius]

 fill("yellow");

 circle(this.body.position.X , this.body.position.Y , this.radius);