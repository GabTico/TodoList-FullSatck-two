const mongoose = require("mongoose")

const TodoShema = new mongoose.Schema({
    title: String,
    completed: Boolean
})

module.exports = mongoose.model("Todo", TodoShema)