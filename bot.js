const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('pret a casser des culs');
})

client.on('message', message  =>{
    if(message.content.match(/assistant !/i)){
       message.channel.send("A votre service" + message.author.tag);
    }
});

client.on('message', message  =>{
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send("Non");
    }
});

client.on('message', message  =>{
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
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
