const { getAllPokes, createPoke, getPokeById, deletePoke } = require("../utils/utilities")
const fetch = require('node-fetch');


const getPokes = (req,res) => {
            
        getAllPokes(req)
        .exec((err,pokes)=>{
            if(err){
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            res.render('all_pokemon', { 
                title: 'Card Collector', 
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
        console.log("DONE")
        //res.redirect("/pokemon")
        //res.sendStatus(204);
        //req.flash('success', 'Poke Deleted')
        res.send('Success');
    });
};





const makePoke = function(req,res) {
    createPoke(req)
    .then(p => 
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