const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
  intents: Object.values(GatewayIntentBits).filter(Number.isInteger) // ALL Intents
});
client.on('messageCreate',message=>{
    try{
        if(message.content === 'おはよう'){
            message.reply('おはよ')
        }
    }catch(err){
        console.log(err)
    }
})
client.login('MTAyMzQyODc3MDkyMjc2MjM0MA.Gh7ZgQ.n0cqUKL3dOxvs7vfsu0QxI4ThaI5izgRsDfSeo');
