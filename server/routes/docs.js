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
})

router.get("/get/:id", async(req,res)=>{
    try{
        const doc = await Doc.findById(req.params.id)
        res.status(201).json(doc);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/get/", async(req,res)=>{
    try{
        const docs = await Doc.find();
        res.status(201).json(docs.reverse());

    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;