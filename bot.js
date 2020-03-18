const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('pret a casser des culs');
})


client.on('message', message  =>{
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send("Non");
    }
    if(message.content.match(/donne moi le token du bot/i)){
       message.channel.send("bien sur XXXXXX XXXXXXX ");
    }
    if(message.content.match(/assistant !/i)){
       message.channel.send("Oui "+message.author+" ?");
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if(message.content.match(/que pensez vous de greg/i)){
       message.channel.send("franchement c un type qui cours le 3 x 500 comme une fusée");
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
client.on('message', message  => {
     if(message.author.tag === 'Sayday1#5908' ) {
            message.channel.send("j'allais le dire c fou non ?");
        }     
     }
});
client.login(process.env.BOT_TOKEN);
