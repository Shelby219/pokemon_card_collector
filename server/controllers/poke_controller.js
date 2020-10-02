const { getAllPokes, createPoke } = require("../utils/utilities")
const fetch = require('node-fetch');


const getPokes = (req,res) => {
    res.send(getAllPokes(req))
}


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
        getPokes
    }