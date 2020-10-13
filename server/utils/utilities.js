let Poke = require("../models/poke")

const fetch = require('node-fetch');


const getAllPokes = (req) => {
	//return allPokes
	return Poke.find()
}
const getPokeById = function(req) {
	//let poke = allPokes[req.params.id]
	let poke = Poke.findById(req.params.id)
	if (poke) return poke
	else req.error = "Poke not found"
}

//works
const createPoke = async function(req) {
	let results = await getPokemon();
	const date = Date.now()
	let poke = {
		name: results.name,
		type: results.types[0].type.name,
		image:  results.sprites.front_default ,
		create_date: date,
		modified_date: date}

	return new Poke(poke).save
}

// deletePoke
function deletePoke(id) {
	return Poke.findByIdAndRemove(id)
}
//works
async function getPokemon() {
    const num = Math.floor(Math.random() * 808) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    try {
	const res = await fetch(url);
	const pokemon = await res.json();
	return pokemon;
    } catch (error) {
    console.log(error);
    }
}

module.exports = {
    createPoke,
    getAllPokes,
	getPokeById,
	deletePoke
}