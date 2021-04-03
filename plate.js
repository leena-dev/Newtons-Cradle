class Plate {
    constructor(x,y,w,h) {
        this.w=w;
        this.h=h;
        this.body=Matter.Bodies.rectangle(x,y,w,h, {isStatic:true});
        World.add(world,this.body)
    } 

    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("GRAY");
        rect(0,0, this.w,this.h);
        pop()
    }
}