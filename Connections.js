class Connections{
    constructor(a, b){
        this.connections = Matter.Constraint.create({
            bodyA: a,
            bodyB: b,
            length: 10,
            stiffness: 0.1
        });
        World.add(world, this.connections);
    }
    display(){
        line(this.connections.bodyA.position.x, this.connections.bodyA.position.y,
            this.connections.bodyB.position.x, this.connections.bodyB.position.y);
    }
}