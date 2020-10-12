const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const Poke = new Schema({
    name: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date, 
        required: true
    },
    modified_date: {
        type: Date, 
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
      
    },
})



module.exports = mongoose.model("Poke", Poke)