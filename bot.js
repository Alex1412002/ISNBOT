const Discord = require('discord.js');
const bot = new Discord.Client();
var prefixe = (".");
bot.on("ready", function() {
    console.log("pret a casser des culs");
    bot.user.setActivity("à se faire programmer").catch(console.error);
});
bot.on('message', msg =>{
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

})// le bot dit bonjour quand qq dit bonjour/
bot.on('message', msg =>{
    if(msg.content === ".gregoire"){
        msg.channel.send("Au secours ! Nous sommes Envahis. 3 créatures de type gregoire, peut ergonomique par dessus le marché sont ici. Fuyez !!!")
    }
})
bot.login(process.env.BOT_TOKEN);
