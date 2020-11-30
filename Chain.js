class Chain {
    constructor(b1, b2) {
        var options = {
            bodyA: b1,
            bodyB: b2,
            length: 20,
            stiffness: 1.0
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

    }
}