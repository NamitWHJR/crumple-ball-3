class Ground2{
  constructor(x,y,width,height){
var optionGround = {
isStatic : true
}
this.body = Bodies.rectangle(x,y,width,height,optionGround)
this.width = width
this.height = height
World.add(world,this.body)

  }
  display(){
var pos = this.body.position
fill ("red")
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)
  }
}