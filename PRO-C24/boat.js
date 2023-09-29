class Boat {
    constructor(x,y,w,h,boatPosition) {
 var options = { restitution:0.8,friction:1.0,density:1.0}
        
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w = w 
        this.h= h 
        this.image=loadImage("./assets/boat.png")
        this.boatPosition=boatPosition
        World.add(world,this.body)





}
display() {
var Pos=this.body.position
push()
translate(Pos.x,Pos.y)
imageMode(CENTER)
image(this.image,0,this.boatPosition,this.w,this.h)
pop()

}
  


}