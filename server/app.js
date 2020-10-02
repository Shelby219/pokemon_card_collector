const express = require("express")
const app = express()
const pokeRouter = require("./routes/poke_routes")
const port = 3000


//app.use is middleware- runs before other code
//its a redirect to the routes file when a post request comes through
app.use("/pokemon", pokeRouter)

app.listen(port, () =>  console.log(`server started on port ${port}`))

