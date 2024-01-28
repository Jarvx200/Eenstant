const rpc = require("discord-rpc")
require('dotenv').config()


const client = new rpc.Client({ transport: 'ipc' })
const clientId = process.env.CLIENT_ID;


client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Song title",
            assets : {
                large_image : "Your Image",
                large_text : "Your Status"
            },
        }
    })
})

client.login({ clientId : clientId}).catch(error=>console.log(error));

module.exports={client}