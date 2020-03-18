const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});
client.on('message', message =>{
    if(message.content.match(/ pute/i)){
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
