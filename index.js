require('dotenv').config();
const {PORT} = process.env;

const app = require("./app")

app.get("/", (req, res) => {
    res.send("<h1>Server is working.</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`)
})