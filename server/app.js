const express = require("express")
const bodyParser= require("body-parser")
const cors = require("cors")
const app = express()
const pokeRouter = require("./routes/poke_routes")
const mongoose = require("mongoose")


const port =  process.env.PORT || 3000

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// use cors middleware
app.use(cors())
// use bodyparser.json
app.use(bodyParser.json())

const dbConn = process.env.MONGODB_URI || 'mongodb://localhost/pokemon_app'

mongoose.connect(
	dbConn,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	err => {
		if (err) {
			console.log("Error connecting to database", err)
		} else {
			console.log("Connected to database!")
		}
	}
)


const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');


//app.use is middleware- runs before other code
//its a redirect to the routes file when a post request comes through
app.use("/pokemon", pokeRouter)

app.listen(port, () =>  console.log(`server started on port ${port}`))

