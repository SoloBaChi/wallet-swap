const express = require("express")
const cors = require("cors")
const {json,urlencoded} = require("body-parser");
// const { createTronWallet } = require("./tron");
// console.log(createTronWallet)


require("dotenv").config()

const app = express();
app.use(cors({origin:"*"}));
app.use(urlencoded({ extended: true }));
app.use(json());


// create port
const port =  process.env.PORT || 8000

// create the server
const start = () => {
app.listen(port,()=>{
 console.log(`Server runs at localhost:${port}`)
})
}

// 
module.exports = start;




// listen the server
