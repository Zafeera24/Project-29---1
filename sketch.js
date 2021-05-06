const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonimage, polygon;
var b1,b2,b3, b4, b5,b6, b7, b8, b9,b10, b11, b12, b13,b14, b14, b15, b16;



/*function preload(){
    polygonimage= loadImage("polygon.png");
}*/


function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world
ground = new Ground(390,300,250,20);
ground1 = new Ground(750,150,200,20);

//polygon = addimage("polygon.png" ,polygonimage);
polygon = new Polygon(30,200,40);

// Tri 1, level 1 
b1 = new Box (300,275,30,40);
b2 = new Box (330,275,30,40);
b3 = new Box (360,275,30,40);
b4 = new Box (390,275,30,40);
b5 = new Box (420,275,30,40);
b6 = new Box (450,275,30,40);
b7 = new Box (480,275,30,40);

// Tri 1, level 2
b8 = new Box (330,235,30,40);
b9 = new Box (360,235,30,40);
b10 = new Box (390,235,30,40);
b11 = new Box (420,235,30,40);
b12 = new Box (450,235,30,40);

// Tri 1, level 3
b13 = new Box (360,195,30,40);
b14 = new Box (390,195,30,40);
b15 = new Box (420,195,30,40);

// Tri 1, level 4
b16 =new Box(390,150,30,40);


// Tri 2, level 1
b17 = new Box(809,125,30,40);
b18 = new Box(784,125,30,40);
b19 = new Box(703,125,30,40);
b20 = new Box(727,125,30,40);
b21 = new Box(753,125,30,40);

// Tri 2, level 2
b22 = new Box(730,81,30,40);
b23 = new Box(760,81,30,40);
b24 = new Box(790,81,30,40);

// Tri 2, level 3
b25 = new Box(759,45,30,40)



sling= new Slingshot(polygon.body,{x: 100, y:100})



}

function draw(){
Engine.update(engine);
background ("brown");

ground.display();
ground1.display();

fill("yellow")
polygon.show();

 fill("blue")
 textSize(20);
 text(mouseX+ "," +mouseY,mouseX,mouseY);

strokeWeight(2);
stroke("black");
fill("skyblue")
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();


strokeWeight(2);
stroke("black");
fill("pink");
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();

strokeWeight(2);
stroke("black");
fill("palegreen");
b13.display();
b14.display();
b15.display();

strokeWeight(2);
stroke("black");
fill("grey");
b16.display();

strokeWeight(2);
stroke("black");
fill("skyblue");
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();

strokeWeight(2);
stroke("black");
fill("palegreen");
b22.display();
b23.display();
b24.display();

strokeWeight(2);
stroke("black");
fill("pink");
b25.display();


sling.display();
}

function mouseDragged(){
 Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly();

}