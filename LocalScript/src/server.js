const {client} = require('./rpcClient')
const express = require('express')
var cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())

const PORT = 14234

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})

server.post('/', (req, res)=>{
    let lastBody = null;

    if(req.body != null){



        if(!lastBody || req.body != lastBody){
        lastBody = req.body;
      
       
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity : {
                details : req.body.musicTitle,
                state: `by ${req.body.musicAuthor}`,
                assets : {
                    large_image : req.body.musicThumbnail,
                    small_image : "logo",
                    large_text : `Vibing to: ${req.body.musicTitle}`,
                    small_text : "Eenstant"
                },
                buttons:[
                    {
                        label: "Play",
                        url: req.body.musicLink
                    }
                ]
            }
        })
        }
    }
    res.status(200).json({"received":true})
})

module.exports = {server}