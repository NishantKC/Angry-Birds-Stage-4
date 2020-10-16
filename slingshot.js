class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .05,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
fly()
{
    this.sling.pointB = null
}
    display(){
        if(this.sling.pointB){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}