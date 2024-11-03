// two separate things that matter needs 
// first thing is an engine for computation and math
// secondly, need a renderer to draw all the engine 


// where matter is being deployed
const sectionTag = document.querySelector("section.shapes")



const engine = Matter.Engine.create()
const renderer = Matter.Render.create({
    element: sectionTag,
    engine: engine
})


// run the engine and the renderer before anything happens
Matter.Engine.run(engine)
Matter.Render.run(renderer)