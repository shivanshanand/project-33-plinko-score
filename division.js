class Divisions{
    constructor(x,y,w,h){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,op);
        this.width=w;
        this.height=h;

        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height)
        pop();

    }
}