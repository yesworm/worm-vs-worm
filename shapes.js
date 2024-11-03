// two separate things that matter needs 
// first thing is an engine for computation and math
// secondly, need a renderer to draw all the engine 


//alias is a way to make our code cleaner 
// const Engine = Matter.Engine
// const Render = Matter.Render

// using one line of code instead of multi-line aliases 
const {Engine, Render, Bodies, World} = Matter


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
    return Bodies.circle(x, y, 20 + 20 * Math.random(), {
        render: {
            fillStyle: "red"
        }
    })
}


// create a shape in the middle of the page 
const bigBall = Bodies.circle(w / 2, h / 2, 250, {
    isStatic: true,
    render: {
        fillStyle: "#ffffff"
    }
})

// create the ground - width, height etc is positioning to get it into the right spot
const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, {
    isStatic: true,
    render: {
        visible: false
    }
})

World.add(engine.world, [
    bigBall, 
    ground
])




// when we click page add a new shape 
document.addEventListener("click", function(event) {
    const shape = createShape(event.pageX, event.pageY)
    World.add(engine.world, shape)

})




// run the engine and the renderer before anything happens
Engine.run(engine)
Render.run(renderer)