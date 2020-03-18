const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('pret a casser des culs');
})


client.on('message', message =>{
    if(message.content.match(/a/i)){
       var randomnumber = Math.floor(Math.random()*31)
       if(randomnumber === 5 ) {
            message.channel.send("mais quel est le rapport avec la choucroute ?");
       }
    }
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send("pour une bonne boutade il faut ecrire !blague et regardez ce que je dis apres");
    }
    if(message.content.match(/assistant !/i)){
       message.channel.send("Oui "+message.author+" ?");
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if(message.content.match(/!blague/i)){
        var blague = Math.floor(Math.random()*2)
        if(blague = 0){
            message.channel.send("c'est l'histoire de toto au toilette mais personne ne la connait car il avait fermé la porte");
        }
        if(blague = 1){
            message.channel.send("c'est l'histoire d' un type qui rentre dans un café et ... plouf");
        }
        
    }
    if(message.content.match(/efface stp/i)){
       message.delete();
       message.delete();
    }
    
});

client.on('messageReactionAdd', (reaction, user)  => {
     const channel = reaction.guild.channels.find('name', 'blabla');
     if (!channel) return;
     channel.send("oui");
    
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
