const dataFile = "../../server/data/pokemon.json"
let allPokes = require(dataFile)
const fs = require('fs');


const getAllPokes = (req) => {
    return allPokes
}

const createPoke = function(results) {
	try {
		const date = Date.now()
		let newPoke = {
            name: results.name,
            types: results.types[0].type.name,
            image:  results.sprites.front_default ,
			create_date: date,
			modified_date: date,
        }
        //console.log(newPoke)
		allPokes[getNextId()] = newPoke
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(allPokes))
		return newPoke
	}
	catch(error) {
		console.error(error)
		req.error = error
		return null
	}
}

// Returns the next available id for a blog post
function getNextId() {
	let sortedIds = Object.keys(allPokes).sort()
	nextId = (sortedIds.length != 0) ? parseInt(sortedIds[sortedIds.length-1]) + 1 : 1
	return nextId
}


const getDataFileRelativeToApp = (file) => {
	return file.substring(file.lastIndexOf("../") + 3, file.length)
}

module.exports = {
    createPoke,
    getAllPokes,
    getDataFileRelativeToApp,
}