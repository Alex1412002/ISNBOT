const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function (){
    client.user.setGame("je test").catch(console.error)
}


client.on('message', function(message){
    if(message.content('pute')){
       message.channel.send("vocabulaire !!!");
    }
});
client.on('message', message  => {
     if(message.author.tag === '' ) {
        message.channel.send('chut, tais toi Maya')     
     }
    
});
client.on('message', message  => {
     if(message.author.tag === 'Nine-Eagle#7414' ) {
        if(message.content.match(/https:\/\/tenor.com/i)){
            message.channel.send("arrete de spam les gifs");
        }     
     }
});
client.login(process.env.BOT_TOKEN);
