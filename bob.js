class Bob {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            density: 0.8
        }
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, r, options);
        World.add(world, this.body)
    }

    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}