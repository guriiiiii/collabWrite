const mongoose = require('mongoose');
const Document = require("./models/Document.js");
const docRoute = require("./routes/docs.js")
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const defaultValue = "";

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>console.log(`success`)).catch((err)=>console.log(err));
app.use("/api/docs", docRoute);
const io = require("socket.io")(8801,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET', 'POST'],
    },
})

io.on("connection", socket=>{
    socket.on('get-document', async documentId=>{
        const document = await findOrCreateDocument(documentId);
        socket.join(documentId);
        socket.emit("load-document", document.data);
        socket.on("send-changes", delta=>{
            socket.broadcast.to(documentId).emit("receive-changes", delta);
        })

        socket.on("save-document", async data=>{
            await Document.findByIdAndUpdate(documentId, {data})
        })
    })
    
})
async function findOrCreateDocument(id){
    if(id==null) return;

    const document = await Document.findById(id);
    if(document) return document
    return await Document.create({_id:id, data:defaultValue})
}
app.get('/', (req, res) => {
    // Send HTML response to client
    res.send('<h1>Hello World!</h1>');
});


app.listen(8800,(req, res)=>{
    console.log("running")
 })
