const Discord = require('discord.js');
const client = new Discord.Client();
var memoire = 0
var compteur = 0
var auteur = 0
var memoireblague = 0
var variable_test = 0
var dernierMess = 0
var auteurmute = 0
var test = 0
var delai = 0
var i = 0
var lastmessage =  0
var taille = 0
var historique = [] 
client.on('ready', () => {
    console.log('pret a casser des culs');
})


client.on('message', message =>{
    auteur = message.author.tag
    historique.push(message);
    taille = historique.length
    if(historique.length > 50){
        historique.shift();
    }
    if(message.content.match(/!test/i)) {
          message.channel.send(taille);
          
    }
    if(message.content.match(/clear/i)) {
       if(auteur === 'Alex1412002#9761') {
           message.delete();
           historique.pop();
           historique[taille-2].delete();
           historique.pop();
       }
    }       
    
    if(message.content.match(/ /i) && auteur != 'ISN bot#5674'){
        dernierMess = 0;
    }
    
    
    if(message.content.match(/!emoji/i)){
       message.channel.send(client.emojis.get("693209803123589160").toString());
       message.channel.send("sinon on a :heart: ou :quasper:");
    }
    if(message.content.match(/a/i)){
       var randomnumber = Math.floor(Math.random()*101)
       if(randomnumber === 5 ) {
            message.channel.send("mais quel est le rapport avec la choucroute ?");
       }
    }
      
    if(message.content.match(/donne moi les commandes/i)){
       message.channel.send(":small_blue_diamond: pour une bonne boutade il faut ecrire *raconte moi une blague* \n:small_blue_diamond: pour avoir mon avis sur l'invasion du luxembourg : *!envahisleluxembourg* \n:small_blue_diamond: Et puis jsuis pas a tes ordres donc je l'ouvre quand je veux");
    }
    if(message.content.match(/<@&689041074538283008>/i)){
       if(auteur != 'ISN bot#5674' && auteur != 'if(auteur === 'Alex1412002#9761') {
           message.delete();
           historique.pop();
           historique[taille-2].delete();
           historique.pop();'){
           message.channel.send("T'as bien réfléchi avant de t'adresser au Dieu ?");
       }
    }

    if(message.content.match(/647166866329960462> !/i)){
       if(message.author.tag === 'Sayday1#5908' ) { 
          message.channel.send("De quoi avez vous besoin notre <@&689041074538283008> ?");
           
       }
       if(message.author.tag === 'Alex1412002#9761' ) {
          message.channel.send("Que veut mon petit assistant ?");
       }
       if(auteur != 'Alex1412002#9761' && auteur != 'Sayday1#5908'){
           message.channel.send("Je ne suis pas sûr que tu mérites de m'appeler :thinking:");
       }
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if(auteurmute!= 0){
       if(message.author.tag === auteurmute){
           message.delete();
           message.channel.send("*message supprimé*\nAucun interet de lire cette chose ");
           auteurmute = 0
       }
    }
    if(message.content.match(/bot/i)){
            message.channel.send("bon le prochain qui parle de moi je lui casse la gueule");
            auteurmute = message.author.tag;
    }
    if(message.content.match(/647166866329960462> raconte moi une blague/i)){
        var blague = Math.floor(Math.random()*30)
        switch(blague){
            case 0:
                message.channel.send("Quel est le point commun entre le Viagra et l'enfer ? \nSatan l'habite");
                break;
            case 1:
                message.channel.send("Quel est le point commun entre un gynécologue myope et un chien en bonne santé ? \nIls ont tous les deux le nez mouillé.")
                break;
            case 2:
                message.channel.send("Pourquoi les femmes se maquillent et se parfument ? \nParce qu’elles sont moches et qu’elles puent.")
                break;
            case 3:
                message.channel.send("Quel est le meilleur site pour un homme qui cherche un lave-vaisselle ? \nUn site de rencontres")
                break;
            case 4:
                message.channel.send("Pourquoi les Ch'tis aiment les fins de vacances au camping ?\nC’est le moment où ils peuvent démonter leur tente.")
                break;
            case 5:
                message.channel.send("Quelle différence y a t il entre une prostituée et une panthère ?\nVous avez déjà vu une panthère avec un string en peau de prostituée ?")
                break;
            case 6:
                message.channel.send("Quel est le point commun entre un homme qui vient de se réveiller et un élastique ?\nLes deux s’étirent, s’étirent, s’étirent, et pètent.")
                break;
            case 7:
                message.channel.send("Mais pourquoi t'es si gros ?\nParce qu’à chaque fois que je baise ta mère elle me donne des gâteaux.")
                break;
            case 8:
                message.channel.send("Quelle est la différence entre les bières et les chasseurs ?\nLes bières, on arrive à en faire des sans alcool.")
                break;
            case 9:
                message.channel.send("Pour un chasseur, qu'elle est la différence entre son chien et sa femme ?\nLe prix du collier.")
                break;
            case 10:
                message.channel.send("Qu'est-ce qu'une blonde avec de l'eau dans la bouche ?\nUne cruche")
                break;
            case 11:
                message.channel.send("Quelle est la partie de la voiture la plus dangereuse ?\nLa conductrice")
                break;
            case 12:
                message.channel.send("Quelle est la différence entre avant et après faire l'amour ?\nAvant, on a le sang qui bout et après on a le bout qui sent.")
                break;
            case 13:
                message.channel.send("Quelle est la différence entre un chalet en Suisse et mon cul ?\nLa vue.")
                break;
            case 14:
                message.channel.send("Qu'est-ce que les hommes apprécient plus que le sexe ?\nQue leurs amis les croient quand ils en parlent.")
                break;
            case 15:
                message.channel.send("Que demande un Chinois dans un café à Marseille ?\nUn jaune.")
                break;
            case 16:
                message.channel.send("Pourquoi les chasseurs tirent-ils sur les panneaux routiers ?\nPour que les aveugles puissent les lire.")
                break;
            case 17:
                message.channel.send("Quel est le point commun entre la poitrine d'une femme et un train électrique ?\nC’est fait pour les enfants mais c’est papa qui joue avec.")
                break;
            case 18:
                message.channel.send("Un couple de randonneurs sont à la campagne :\nLa femme : « Chéri, ce paysage me laisse sans voix ! »\nL’homme : « Parfait, campons ici ! »")
                break;
            case 19:
                message.channel.send("Savez-vous pourquoi il n’y a pas de femmes au paradis ?\nParce que ça serait l’enfer !")
                break;
            case 20:
                message.channel.send("Comment on différencie un homme et une femme nus ?\nL’homme c’est celui qui a gardé ses chaussettes.")
                break;
            case 21:
                message.channel.send("Comment reconnait-on une moto anglaise ?\nLe guidon est à droite")
                break;
            case 22:
                message.channel.send("Pourquoi les hommes s'assoient toujours avec les jambes écartées ?\nPour que leur cerveau respire.")
                break;
            case 23:
                message.channel.send("Quelle est l'année préférée des beaufs ?\n1664")
                break;
            case 24:
                message.channel.send("Que dit une bière quand elle tombe dans l'eau ?\nJe sais panaché")
                break;
            case 25:
                message.channel.send("Quelle est la différence entre la bière et la pisse ?\nEnviron un quart d’heure.")
                break;
            case 26:
                message.channel.send("Quelle est la différence entre une bière et un livreur ?\nLa Kronenbourg est à la poste et Chronopost à la bourre")
                break;
            case 27:
                message.channel.send("Quelle est la différence entre un Ricard et un 69 ?\nLe Ricard, c’est le nez dans l’anis, le 69, c’est le nez dans l’anus.")
                break;
            case 28:
                message.channel.send("Quel est le point commun entre un motard célibataire et sa moto ?\nIls dorment tous les deux sur la béquille.")
                break;
            case 29:
                message.channel.send("Quelle est la différence entre un zèbre et un barman ?\nLe zèbre à des barres autour de son trou du cul. Le barman à des trous du cul autour de son bar.")
                break;
            case 30:
                message.channel.send(" A quoi reconnaît-on le slip de Dark Vador ?\nA son côté obscur !")
                break;
            default:
                message.channel.send("Y a pas de blague la")
                break;
        }
        
    }
    if(message.content.match(/!rep/i) && memoireblague === 1 && message.author.tag != 'ISN bot#5674'){
       message.channel.send("Ils sortent du corps enseignant");
        memoireblague = 0;
    }
    if(message.content.match(/https:\/\/tenor.com/i) && message.author.tag === "Sishoas#5408"){
         message.delete();
    }
    if(message.content.match(/647166866329960462> on fait un vote/i)){
        message.react('🌑');
        message.react('🌕');
        message.channel.send("Vote créé, allez-y");
        dernierMess = dernierMess + 1;
    }
    
});

client.on('messageReactionAdd', (reaction, user) =>{
    var randomnumber = Math.floor(Math.random()*4)
    if(user.tag != 'ISN bot#5674' && randomnumber === 1 && reaction.emoji.name != '❤️'){
        reaction.message.channel.send(`${user} d'où tu réagis avec un ` + client.emojis.get(reaction.emoji.id.toString()).toString());
    }
    if(user.tag != 'ISN bot#5674' && reaction.emoji.name === '❤️' && dernierMess === 0){
        reaction.message.channel.send("j'aime les coeurs 😊");
        reaction.message.react('❤️');
        dernierMess = dernierMess + 1;
    }
    if(reaction.emoji.name != '❤️' && dernierMess === 0){
        reaction.message.react('🌍');
    }
});

client.on('emojiCreate', lemoji =>{
    client.channels.get("689039870915903554").send("Y a un nouvel emoji les enfants");
});

client.on('typingStart', (channel, user) =>{
    if(channel.id === "689788626418401308" && dernierMess === 0){
        channel.send("Il va m'écrire quoi lui");
        dernierMess = dernierMess + 1;
    }
});

client.on('message', message  => {
     if(message.author.tag === 'Aurora#9826' ) {
        if(message.content.match(/bot/i) || message.content.match(/assistant/i)){
            message.channel.send("tu oses parler de moi, petite plebeienne ?");
        }     
     }
});

client.on('message', message  => {
     if(message.author.tag === '' ) {
        message.channel.send('Mais tais toi !');     
     }
    
});

client.on('voiceStateUpdate', (ancien, nouveau)  => {
});

client.on('message', message  => {
     if(message.author.tag === 'Nine-Eagle#7414' ) {
        if(message.content.match(/https:\/\/tenor.com/i)){
            message.delete();
        }     
     }
});
client.login(process.env.BOT_TOKEN);
