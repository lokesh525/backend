const express = require("express")
const connectToDb = require("./views/database/databaseConnection")
const Blog = require("./model/blogModel")
//const Blog = require("./model/blogModel")
const app = express()
connectToDb()
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/createBlog',(req,res)=>{
    const name = "Lokesh"
    res.render("about.ejs",{name})

})
app.get('/',(req,res)=>{
    res.render("about.ejs")
})
app.post("/createBlog",async (req,res)=>{
    //console.log(req.body)
    // const title = req.body.title
    // const subtitle = req.body.subtitle
    // const description = req.body.description
    const{title,subtitle,description} = req.body
    console.log(title,subtitle,description)
   await Blog.create({
        title,
        subtitle,
        description
    })

    res.send("Blog Created Sucessfully")
})

app.listen(3000,()=>{
    console.log("Node js project started at port "+3000)
})


