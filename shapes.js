// two separate things that matter needs 
// first thing is an engine for computation and math
// secondly, need a renderer to draw all the engine 


// alias is a way to make our code cleaner 
// const Engine = Matter.Engine
// const Render = Matter.Render

// using one line of code instead of multi-line aliases 
const {Engine, Render, Bodies, World, MouseConstraint, Composites} = Matter


// where matter is being deployed
const sectionTag = document.querySelector("section.shapes")

// what is the width x height of the page 
const w = window.innerWidth
const h = window.innerHeight


const engine = Engine.create()
const renderer = Render.create({
    element: sectionTag,
    engine: engine,
    options: {
        height: h,
        width: w,
        background: "#000000",
        wireframes: false,
        pixelRatio: window.devicePixelRatio
    }
})

// create a shape on the page 
const createShape = function(x, y) {
    return Bodies.circle(x, y, 25, {
        render: {
            sprite: {
                texture: "/assets/meatball.png",
                xScale: 0.5,
                yScale: 0.5
            }
        }
    })
}


// create a shape in the middle of the page 
const bigBall = Bodies.circle(w / 2, h / 2, 100, {
    isStatic: true,
    render: {
        sprite: {
            texture: "assets/earth.png"
        }
    }
})

const wallOptions = {
    isStatic: true,
    render: {
        visible: false
    }
}

// create the ground - width, height etc is positioning to get it into the right spot
const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
const ceiling = Bodies.rectangle(w / 2,  -50, w + 100, 100, wallOptions)
const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)


const mouseControl = MouseConstraint.create(engine, {
    element: sectionTag,
    constraint: {
        render: {
            visible: false
        }
    }
    })

// stack takes in location xx, yy, columns & rows, column and row gaps, & callback - which basically means what's being added - eg, a function
const initalShapes = Composites.stack(50, 50, 15, 5, 40, 40, function(x, y) {
    return createShape(x, y)
})    


World.add(engine.world, [
    bigBall, 
    ground,
    ceiling,
    leftWall,
    rightWall,
    mouseControl,
    initalShapes
])



// when we click page add a new shape 
document.addEventListener("click", function(event) {
    const shape = createShape(event.pageX, event.pageY)
    World.add(engine.world, shape)

})



// run the engine and the renderer before anything happens
Engine.run(engine)
Render.run(renderer)