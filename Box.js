class Box{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        
        this.bodies = Bodies.rectangle(x,y,w,h,options);

        this.width = w;
        this.height = h;
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}