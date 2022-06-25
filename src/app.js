const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;


const static_path = (path.join(__dirname, "../public"))
app.use(express.static(static_path));



app.get("/", (req, res)=>{
    res.send("welcome to mohit website")
} )
app.get("/about", (req, res)=>{
    res.send("welcome to about us website")
} )
app.get("/contact", (req, res)=>{
    res.send("welcome to contact us website")
} )
app.get("*", (req, res)=>{
    res.send("sorry 404 page not found")
} )

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})