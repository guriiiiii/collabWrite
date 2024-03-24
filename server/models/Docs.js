const mongoose  = require('mongoose');

const DocsSchema = new mongoose.Schema({
    name:{type: String},
    _id:{type: String},
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports=mongoose.model("Docs", DocsSchema);