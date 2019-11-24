const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('pret a casser des culs');
});
client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});
client.on('message', msg =>{
    if(msg.content.match(/salut/i)){
        msg.channel.send("Cc")
    }
    if(msg.content.match(/cc/i)){
        msg.channel.send("comment allez vous aujourd'hui ?")
    }
    if(msg.content.match(/wsh/i)){
        msg.channel.send("Yo le frero")
    }
    if(msg.content.match(/slt/i)){
        msg.channel.send("Coucou chérie")
    }
    if(msg.content.match(/bonjour/i)){
        msg.channel.send("hey")
    }
});
client.login(process.env.BOT_TOKEN);
