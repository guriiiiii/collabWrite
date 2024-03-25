const router = require("express").Router();
const Doc = require("../models/Docs");
const cors = require('cors')

router.use(cors());
router.post("/new", async(req,res)=>{
    const newDoc = new Doc({
        name:req.body.name,
        _id:req.body.documentId,
    })

    try{
        const doc = await newDoc.save();
        res.status(201).json(doc)
    }catch(err){
        res.status(500).json(err);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Send response
    res.json({ message: 'Data response' });
})

router.get("/get/:id", async(req,res)=>{
    try{
        const doc = await Doc.findById(req.params.id)
        res.status(201).json(doc);
    }catch(err){
        res.status(500).json(err);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Send response
    res.json({ message: 'Data response' });
})

router.get("/get/", async(req,res)=>{
    try{
        const docs = await Doc.find();
        res.status(201).json(docs.reverse());

    }catch(err){
        res.status(500).json(err);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Send response
    res.json({ message: 'Data response' });
})
module.exports = router;