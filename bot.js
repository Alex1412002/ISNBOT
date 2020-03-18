const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('pret a casser des culs');
})

var nb = 1;


client.on('message', function(message){
    if(message.content.match(/?/i)){
       message.channel.send("Mais quel est le rapport avec la choucroute");
    }
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send("Non");
    }
    if(message.content.match(/assistant !/i)){
       message.channel.send("Oui "+message.author+" ?");
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if(message.content.match(/efface stp/i)){
       message.delete();
       message.delete();
    }
    
});

client.on('messageReactionAdd', reaction  =>{
    reaction.message.react('🤔');
});

client.on('message', message  => {
     if(message.author.tag === '' ) {
        message.channel.send('tais toi stp !')     
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
