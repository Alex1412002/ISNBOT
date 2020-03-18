const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('pret a casser des culs');
});
client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});
client.on('message', message =>{
    if(message.content.match(/salut/i)){
        message.channel.send("Cc");
    }
    if(message.content.match(/cc/i)){
        message.channel.send("comment allez vous aujourd'hui ?");
    }
    if(message.content.match(/wsh/i)){
        message.channel.send("Yo le frero");
    }
    if(message.content.match(/slt/i)){
        message.channel.send("Coucou chérie");
    }
    if(message.content.match(/bonjour/i)){
       message.channel.send("hey");
    }
    if(message.content.match(/bite/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content === '.gregoire') {
        message.channel.send("Au secours ! Nous sommes Envahis. 3 créatures de type gregoire, peut ergonomique par dessus le marché sont ici. Fuyez !!!");
    }
    if(message.content.match(/putin/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/merde/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/ chier/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/ nique/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/enfoiré/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/ couilles/i)){
       message.channel.send("vocabulaire !!!");
    }
    if(message.content.match(/ pute/i)){
       message.channel.send("vocabulaire !!!");
    }
    
    if(message.content.match(/sah/i)){
       message.channel.send("pouvais vous parler francais s'il vous plait ?");
    }
    if(message.content.match(/stephanie/i)){
       message.channel.send("la gentille steph pour les intime");
    }
});
client.on('message', message  => {
     if(message.author.tag === 'Aurora#9826' ) {
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
