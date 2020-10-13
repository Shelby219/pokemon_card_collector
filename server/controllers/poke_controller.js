const { getAllPokes, createPoke, getPokeById, deletePoke } = require("../utils/utilities")
const fetch = require('node-fetch');


const getPokes = (req,res) => {
                //res.send(getAllPokes(req))
            // let printingAllPokes = getAllPokes(req)
            //     console.log(printingAllPokes)
            //     //res.send(printingAllPokes)
            //     let pokemons = []

            //     Object.keys(printingAllPokes).map(function(key, index) {
            //         printingAllPokes[key] != null ?  pokemons.push(printingAllPokes[key]) : res.send("no pokes")
            //       });
            
            //     res.render('index', { title: 'Pokemon', 
            //     pokemon: JSON.stringify(pokemons)
        // })
        getAllPokes(req)
        .exec((err,pokes)=>{
            if(err){
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            //res.send(pokes)
           // let pokemon = 
            res.render('index', { 
                title: 'Pokemon', 
                pokemon: pokes,
                })
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


const makePoke = function(req,res) {
    createPoke(req)
    .then(p => 
        //console.log(p)
        //res.status(201)
        res.send(p))
    .catch(err => 
        res.send(err))
    
}

//makePoke()

//makePoke()
    module.exports = {
        makePoke,
        getPokes,
        getPoke,
        removePoke
    }