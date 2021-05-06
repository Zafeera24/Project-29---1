class Box{
    constructor(x,y,width,height){
     var options = {
       restitution:0.4,
       friction:0.4,
       isStatic: false
       // this.Visiblity = 255;
     }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World. add(world, this.body);
        this.width= width;
        this.height= height;

    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push ();
        translate(pos.x, pos.y);
        rotate (angle);
        // this.Visiblity = this.Visiblity -5;
        rectMode(CENTER);
        // tint(255 ,this.Visiblity)
        rect(0,0,this.width, this.height);
        pop ();

    }
}