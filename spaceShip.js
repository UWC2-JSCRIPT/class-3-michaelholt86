// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed}!`)
    }
}

const lexx = new SpaceShip('Lexx', 12000)
const tums = new SpaceShip('Tums', 19000)
const jose = new SpaceShip('Jose', 22200)

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

lexx.accelerate()
tums.accelerate()
jose.accelerate()