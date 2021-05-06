class Slingshot {
     constructor(bodyA,pointB){
      var options ={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:1,
      }

      this.sling = Constraint.create(options);
      World.add(world,this.sling);
      this.bodyA=bodyA;
      this.pointB= pointB;

     }

     fly(){
         this.sling.bodyA=null;
     }
     display(){
         if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            //line(x1,y1,x2,y2)
            strokeWeight(2);
            stroke("yellow");
            line(pointA.x,pointA.y,pointB.x, pointB.y);
   
         }
        
     }
} 