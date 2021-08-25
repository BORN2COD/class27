class Slingshot{
    constructor(b1,b2){ var op = {
        bodyA:b1,bodyB:b2,stiffness:0.04,length:4
    }
        this.chain = Matter.Constraint.create(op)
        Matter.World.add(world,this.chain)
}
display(){
    strokeWeight(4)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}
}