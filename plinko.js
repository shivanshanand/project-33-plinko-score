class Plinko{
    constructor(x,y,r){
        var op={
            isStatic:true,
            restitution:0.3
        }

        this.body=Bodies.circle(x,y,r/2,op);

        World.add(world, this.body);
        this.r=r;
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("red")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}