// two separate things that matter needs 
// first thing is an engine for computation and math
// secondly, need a renderer to draw all the engine 


//alias is a way to make our code cleaner 
// const Engine = Matter.Engine
// const Render = Matter.Render

// using one line of code instead of multi-line aliases 
const {Engine, Render} = Matter


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


// run the engine and the renderer before anything happens
Engine.run(engine)
Render.run(renderer)