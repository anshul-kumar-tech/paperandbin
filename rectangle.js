class Box {
    constructor(x,y){
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;
        this.b = Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true});
        this.l = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true});
        this.r = Bodies.rectanlge(x+this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.l,this.angle);
        Matter.Body.setAngle(this.r,this.angle);
        this.image.loadImage("dustbingreen.png");
        World.add(world,this.b);
        World.add(world,this.r);
        World.add(world,this.l);
    }
    display(){
        push();
        translate(this.b.position.x,this.b.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0,0,this.width,this.thickness);
        pop();

        push();
        translate(this.l.position.x,this.l.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(this.r.position.x,this.r.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0,0,this.thickness,this.height);
        pop();
    }

}