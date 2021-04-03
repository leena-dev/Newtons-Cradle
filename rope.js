class Rope {
    constructor(bodyA,bodyB,X,Y) {
        this.X=X;
        this.Y=Y;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB
        }

        this.line=Matter.Constraint.create(options);
        World.add(world,this.line)
    } 

    display() {
        push()
        //translate(this.body.position.x, this.body.position.y)
        //rotate(this.body.angle)
        //rectMode(CENTER);
        fill("GRAY");
        line(this.line.bodyA.position.x,this.line.bodyA.position.y, this.line.bodyB.position.x+this.X,this.line.bodyB.position.y+this.Y);
        pop()
    }
}