class Dustbin {
    constructor(x,y,width,height){
        var options= {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");

    World.add(world,this.body);
    }
   display(){
   var pos = this.body.position
    rectMode(CENTER);
    fill("skyblue");
    rect(pos.x,pos.y,this.width,this.height);
    image(this.image,540,570,140,110);
 }
};