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
    if(message.content === '.gregoire') {
        message.channel.send("Au secours ! Nous sommes Envahis. 3 créatures de type gregoire, peut ergonomique par dessus le marché sont ici. Fuyez !!!");
    }
});
client.on(‘message’, (receivedMessage) => {
    If (receivedMessage.author === ‘alex’) {
        message.channel.send(‘ta gueule’);
    }
});
client.login(process.env.BOT_TOKEN);
