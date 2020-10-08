const { getAllPokes, createPoke, getPokeById } = require("../utils/utilities")
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



//getPokes("hello", "hello")

async function getPokemon() {
    let num = Math.floor(Math.random() * 808) + 1;
    let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    try {
    let res = await fetch(url);
    return  await res.json();
    //console.log(res.json())
    } catch (error) {
    console.log(error);
    }
}

const makePoke = async (req, res) =>{
    let results = await getPokemon();
    let poke = createPoke(results);
    if (poke) {
        res.status(201);
        res.send(poke);
        console.log(poke)
    } else {
        res.status(500);
        res.send(req.error);
    }
}
//makePoke()
    module.exports = {
        makePoke,
        getPokes,
        getPoke
    }