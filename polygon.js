class Polygon {
    constructor(x,y,radius){
        var options = {
            restitution:0.4,
            friction:0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image=loadImage("polygon.png");
        this.radius = radius;
        World.add(world, this.body);
    }


    show(){
        var pos =this.body.position;
         imageMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
}