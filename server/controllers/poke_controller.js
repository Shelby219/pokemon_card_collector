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
            res.render('all_pokemon', { 
                title: 'Pokemon Card Collector', 
                pokes: pokes, // pokes[1]
                })
                
        })
}
const getPoke = (req, res) => {
    getPokeById(req).exec((err, poke) => {
        if (err) {
            res.status(400);
            return res.send("Poke not found");
        }
       // res.send(poke);   //5f85634ef53f4a0687ca9a44
        res.render('poke_card', { 
            title: 'Pokemon', 
            poke: poke, // pokes[1]
            })
    });
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
        //res.redirect("/pokemon")
        //res.sendStatus(204);
        req.flash('success', 'Poke Deleted')
        res.send('Success');
    });
};




const makePoke = function(req,res) {
    createPoke(req)
    .then(p => 
        //console.log(p)
        //res.status(201)
    
        //res.send(p)
        res.redirect("/pokemon")
        )
        
        
    .catch(err => 
        res.send(err))
    
}

    module.exports = {
        makePoke,
        getPokes,
        getPoke,
        removePoke
    }