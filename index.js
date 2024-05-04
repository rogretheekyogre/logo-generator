const inquirer=require("inquirer")
const fs=require("fs")
const{Circle,Triangle,Square}=require("./lib/shapes")
const SVG=require("./lib/svg")

inquirer.prompt([

    { type:"input",name:"text",message:"which text?",validate:text=>text.length<=3||"text must not exceed 3 characters"



    },{  type:"input",name:"textColor",message:"which text color?"




    },  {type:"input",name:"shapeColor",message:"what background for this shape?"},
    {type:"list",name:"shape",message:"choose a shape for your logo.",choices:["circle","square","triangle"]
    
    }

])
.then(({text,textColor,shapeColor,shape})=>{
let userShape;
if (shape==="circle")userShape=new Circle()
else if(shape==="square")userShape=new Square()
else userShape=new Triangle()
userShape.setColor(shapeColor)
const svg=new SVG()
svg.setText(text,textColor)
svg.setShape(userShape)
fs.writeFile("dist/logo.svg",svg.render(),err=>{
if(err)console.log(err)
else console.log("your svg was successfully created")

})
})