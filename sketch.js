const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32;
var ground1,ground2,ground3;
var slingshot;
var polygon_img;
var polygon;

function preload()
{
    polygon_img=loadImage("polygon.png");
}

function setup() 
{
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
    block17 = new Block(600,275,30,40);
    block18 = new Block(630,275,30,40);
    block19 = new Block(660,275,30,40);
    block20 = new Block(690,275,30,40);
    block21 = new Block(720,275,30,40);
    block22 = new Block(750,275,30,40);
    block23 = new Block(780,275,30,40);
    block24 = new Block(630,235,30,40);
    block25 = new Block(660,235,30,40);
    block26 = new Block(690,235,30,40);
    block27 = new Block(720,235,30,40);
    block28 = new Block(750,235,30,40);
    block29 = new Block(660,195,30,40);
    block30 = new Block(690,195,30,40);
    block31 = new Block(720,195,30,40);
    block32 = new Block(690,155,30,40);
    ground1 = new Ground(390,305,230,10);
    ground2 = new Ground(690,305,230,10);
    ground3 = new Ground(600,600,1500,20);

   
    slingshot = new SlingShot(this.polygon,{x :100,y :200});
    
}

function draw()
{

    background("blue");
    Engine.update(engine);

    textSize(25);
    text("Drag the Hexagonal Stone and release it, to launch it towards the block!!",50,50)

    slingshot.display();
   
   fill("lightBlue");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    

    fill("lightPink");

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

   fill("lightGreen");

    block13.display();
    block14.display();
    block15.display();
    block29.display();
    block30.display();
    block31.display();

    fill("grey")

    block16.display();
    block32.display();
    ground1.display();
    ground2.display();
    ground3.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(this.polygon,{x : 100,y : 200});
        slingshot.attach(this.polygon);
    }
}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x : mouseX,y : mouseY});
}
function mouseReleased()
{
    slingshot.fly();
}

