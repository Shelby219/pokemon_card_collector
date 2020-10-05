const express = require("express")
const router = express.Router()
const {getPokes, makePoke} = require("../controllers/poke_controller")


// get all poke
router.get("/", getPokes)


// create a poke
router.post("/create", makePoke)


// // get a particular poke
// router.get("/:id", getPoke )

// // delete a poke
// router.delete("/:id", removePoke)

// // update a poke
// router.put("/:id", changePoke)


module.exports = router