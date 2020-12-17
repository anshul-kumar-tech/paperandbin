class Paper{
    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        this.trajectory=[];
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius);
    }
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Mattter.body.applyFroce(paperObject.body,paperObject,body.position,{x:85,y:-85})
    }
}