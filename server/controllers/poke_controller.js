const { getAllPokes, createPoke, getPokeById, deletePoke } = require("../utils/utilities")
const fetch = require('node-fetch');


const getPokes = (req,res) => {
    //res.send(getAllPokes(req))
    let printingAllPokes = getAllPokes(req)
    let pokemons = []

    Object.keys(printingAllPokes).map(function(key, index) {
        printingAllPokes[key] != null ?  pokemons.push(printingAllPokes[key]) : res.send("no pokes")
      });
   
    res.render('index', { title: 'Pokemon', 
    pokemon: JSON.stringify(pokemons)
})
}

const getPoke = (req, res) => {
    let poke = getPokeById(req)
    if (poke) res.send(poke)
    else{
        res.status(404)
        res.send(req.error)
    }
}

// removePoke
const removePoke = function (req, res) {
    // execute the query from deletePoke
    deletePoke(req.params.id).exec((err) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.sendStatus(204);
    });
};

const makePoke = (req, res) =>{
    createPoke(req).then((err,poke)=>{
		if(err){
			res.status(500)
			return res.json({
				error: err.message
			})
        }
        return "Abc"
		//res.status(201)
		//res.send(poke)
	})
}

//makePoke()
    module.exports = {
        makePoke,
        getPokes,
        getPoke,
        removePoke
    }