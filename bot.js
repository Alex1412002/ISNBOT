const Discord = require('discord.js');
const client = new Discord.Client();
var memoire = 0
var compteur = 0
var auteur = 0
var memoireblague = 0
var variable_test = 0
client.on('ready', () => {
    console.log('pret a casser des culs');
})


client.on('message', message =>{
    auteur = message.author.tag
    
    if(message.content.match(/un test/i)){
        variable_test = Math.floor(Math.random()*3)
        switch(variable_test){
            case 0:
                message.channel.send("j'ai 0 ici");
                break;
            case 1:
                message.channel.send("la plutot 1");
                break;
            case 2:
                message.channel.send("et ici 2");
                break;
        }
    }
    if (auteur != 'ISN bot#5674'){
        if(memoire === auteur) { 
            compteur +=1;
        }
        else {
            compteur = 0
        }
        if (compteur >= 4){
            message.channel.send("tu es une pipelette toi ");
            compteur = 0
        }
        memoire = auteur
    }
        
    
    if(message.content.match(/a/i)){
       var randomnumber = Math.floor(Math.random()*101)
       if(randomnumber === 5 ) {
            message.channel.send("mais quel est le rapport avec la choucroute ?");
       }
    }
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send("pour une bonne boutade il faut ecrire !blague et regardez ce que je dis apres");
    }
    if(message.content.match(/!envahisleluxembourg/i)){
       message.channel.send("je suis pacifique en revanche je frappe vite");
    }

    if((message.content.match(/<@!647166866329960462> !/i))||(message.content.match(/<@647166866329960462> !/i))){
       if(message.author.tag === 'Sayday1#5908' ) { 
          message.channel.send("De quoi avez vous besoin notre <@&689041074538283008> ?");
       }
       else {
           message.channel.send("Je ne suis pas sûr que tu mérites de m'appeler :thinking:");
       }
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if((message.content.match(/<@!647166866329960462> raconte moi une blague/i))||(message.content.match(/<@!647166866329960462> raconte moi une blague/i))){
        var blague = Math.floor(Math.random()*3)
        switch(blague){
            case 0:
                message.channel.send("Quel est le point commun entre le Viagra et l'enfer ? Satan l'habite");
                break;
            case 1:
                message.channel.send("Quel est le point commun entre un gynécologue myope et un chien en bonne santé ? Ils ont tous les deux le nez mouillé.")
                break;
            case 2:
                message.channel.send("Pourquoi les femmes se maquillent et se parfument ? \nParce qu’elles sont moches et qu’elles puent.")
        }
        
    }
    if(message.content.match(/!rep/i) && memoireblague === 1 && message.author.tag != 'ISN bot#5674'){
       message.channel.send("Ils sortent du corps enseignant");
        memoireblague = 0;
    }
    if(message.content.match(/efface stp/i)){
       message.delete();
       message.delete();
    }
    
});

client.on('message', message  => {
     if(message.author.tag === '' ) {
        message.channel.send('Mais tais toi !')     
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
