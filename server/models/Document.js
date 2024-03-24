const mongoose  = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    name:{type: String},
    _id:{type: String},
    data:{type: Object},
})

module.exports=mongoose.model("Document", DocumentSchema);