const Discord = require('discord.js'); /* importation de la bibliotheque*/
const client = new Discord.Client(); /*creation du compte discord du bot*/
var compteur = 0 /* variable de la piplette*/
var auteur = 0 /*variable de simplification*/
var variable_test = 0 /*jsp */
var dernierMess = 0 /*jsp c ton truc chelou avec les reactions*/
var auteurmute = 0 /*utilisateur dont le prochain message sera delete*/
var test = 0 /* jsp*/
var memoire = 0
var pardon = 0 /*memoire de l'users qui a utilisé .clear*/
/*init des tailles des historiques*/
var tailleblabla = 0
var taillelaboratoire = 0
var tailledetresse = 0
var taillemusiques = 0
var tailletravail = 0
var tailletestpourlebot = 0
var taillereve = 0
var vote = 0
var votenoir = 0
var voteclair = 0
var candidat1 = 0
var candidat2 = 0

/*init des historiques de chaque salon*/
var historiquelaboratoire = [] 
var historiqueblabla = [] 
var historiquedetresse = []
var historiquemusiques = []
var historiquetravail = []
var historiquetestpourlebot = []
var historiquereve = []

/*Check de la connexion*/
client.on('ready', () => {
    console.log('pret a casser des culs'); /*affichage dans la console*/
})

/*quand un message est envoyé dans un chat*/
client.on('message', message =>{ 
    auteur = message.author.tag /*ligne pour simplifier et epurer le code*/
/*--------------------------------------------------------*/
    
/*                  commandes de clear                    */
    
/*--------------------------------------------------------*/
    if(auteur === pardon){
        if(message.content.match(/pardon/i)) {
            pardon = 0 
            message.channel.send("bon toutou")
        }
        else {
            message.channel.send(".clear")
            message.channel.send("j'attends toujours le mot magique")
            
        }
    }
    /*ajout du message dans la bonne liste*/
    if (message.channel.name === "laboratoire"){ 
       historiquelaboratoire.push(message);   
    }
    if (message.channel.name === "blabla"){ 
       historiqueblabla.push(message)
    }
    if (message.channel.name === "detresse"){ 
       historiquedetresse.push(message)
    }
    if (message.channel.name === "musiques"){ 
       historiquemusiques.push(message)
    }
    if (message.channel.name === "travail"){ 
       historiquetravail.push(message)
    }
    if (message.channel.name === "test-pour-le-bot"){ 
       historiquetestpourlebot.push(message)
    }
    if (message.channel.name === "salon-du-rêve"){ 
       historiquereve.push(message)
    }
   
    
    /*mesure des tailles des historiques*/    
    tailleblabla = historiqueblabla.length
    taillelaboratoire = historiquelaboratoire.length
    tailledetresse = historiquedetresse.length
    taillemusiques = historiquemusiques.length
    tailletravail = historiquetravail.length
    tailletestpourlebot = historiquetestpourlebot.length
    taillereve = historiquereve.length
    
    /*controle de la taille des historiques*/
    if(historiquelaboratoire.length > 50){
        historiquelaboratoire.shift();
    }
    if(historiqueblabla.length > 50){
        historiqueblabla.shift();
    }
    if(historiquedetresse.length > 50){
        historiquedetresse.shift();
    }
    if(historiquemusiques.length > 50){
        historiquemusiques.shift();
    }
    if(historiquetravail.length > 50){
        historiquetravail.shift();
    }
    if(historiquetestpourlebot.length > 50){
        historiquetestpourlebot.shift();
    }
    if(historiquereve.length > 50){
        historiquereve.shift();
    }
        
    if(message.content.match(/.clear/i)) {
       if(auteur === 'Alex1412002#9761' || auteur === 'Sayday1#5908' || auteur === 'ISN bot#5674'){
           message.delete();
           if (message.channel.name === "laboratoire"){  
               historiquelaboratoire.pop();
               historiquelaboratoire[taillelaboratoire-2].delete();
               historiquelaboratoire.pop();
           } 
           if (message.channel.name === "blabla"){  
               historiqueblabla.pop();
               historiqueblabla[tailleblabla-2].delete();
               historiqueblabla.pop();
           }
           if (message.channel.name === "detresse"){  
               historiquedetresse.pop();
               historiquedetresse[tailledetresse-2].delete();
               historiquedetresse.pop();
           }
           if (message.channel.name === "musiques"){  
               historiquemusiques.pop();
               historiquemusiques[taillemusiques-2].delete();
               historiquemusiques.pop(); 
           }
           if (message.channel.name === "travail"){  
               historiquetravail.pop();
               historiquetravail[tailletravail-2].delete();
               historiquetravail.pop(); 
           }
           if (message.channel.name === "test-pour-le-bot"){  
               historiquetestpourlebot.pop();
               historiquetestpourlebot[tailletestpourlebot-2].delete();
               historiquetestpourlebot.pop(); 
           }
           if (message.channel.name === "salon-du-rêve"){  
               historiquereve.pop();
               historiquereve[taillereve-2].delete();
               historiquereve.pop(); 
           }
        }
        else {
            message.channel.send("Par contre je suis pas ton chien alors dit pardon !")
            pardon = auteur
        }
    }
    
/*--------------------------------------------------------*/
    
/*                      text reaction                     */
    
/*--------------------------------------------------------*/
    if(auteur != 'ISN bot#5674'){ 
        if(message.content.match(/!DJadd/i)) {
            message.delete();
        }
        /*presentation du bot*/
        if(message.content.match(/!presentation/i)) {
              message.channel.send("Bonjour, Je suis l'assistant ! j'ai été concu par **dieu** et par l'**Aassistant de l'Assistant**. Bienvenue sur l'**autoroute du rire**. \nPour me presenter or to introduce myself (sa fait stylé en anglais vous trouvez pas ? :thinking:) voici mes differentes qualités:\nPour avoir un rappel des commandes : `!presentation`\nPour une bonne boutade : `@assistant raconte moi une blague`\nPour verifier que je suis present : `!statut`\nSans compter mes nombreuses interventions qui animeront vivement les discussions.\nVoila on rigole on rigole mais on voit pas le fond du bol. N'oubliez pas : RESTEZ CHEZ VOUS");
        } 
        
        /*commande pour test le bon fonctionnement du code*/
        if(message.content.match(/!statut/i)) { 
          message.channel.send("je suis connecté");
        }
        
        /*!assistant*/
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
        
        /*detecte si il y a le mot pute dans un message*/
        if(message.content.match(/pute/i)){
            message.channel.send("Vocabulaire !!!");
        } 
        
        /*detecte si Sayday1 est tag dans un message et qui l'a tag*/
        if(message.content.match(/<@&689041074538283008>/i)){
            if(auteur != 'ISN bot#5674' && auteur != 'Alex1412002#9761') {
                message.channel.send("T'as bien réfléchi avant de t'adresser au Dieu ?");
            }
        }
        
        /*detecte si le message contient le mot bot*/
        if(auteurmute!= 0){
           if(message.author.tag === auteurmute){
               message.channel.send(".clear");
               message.channel.send("*message supprimé*\nAucun interet de lire cette chose ");
               auteurmute = 0
           }
        }
        if(message.content.match(/bot/i)){
            message.channel.send("bon le prochain qui parle de moi je lui casse la gueule");
            auteurmute = message.author.tag;
        }
        
        /*detecte la commande de la blague et en raconte une aleatoirement*/
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
    }
/*--------------------------------------------------------*/
    
/*                 intervention du bot                    */
    
/*--------------------------------------------------------*/
    /*pipelette*/
    if(auteur != 'ISN bot#5674'){
        if(memoire === auteur) { 
            compteur +=1;
            }
            else {
                compteur = 0
            }

            if (compteur >= 5){
                message.channel.send("tu es une pipelette toi ");
                compteur = 0
            }
            memoire = auteur
    
    }
    var randomnumber = Math.floor(Math.random()*101)
    if(randomnumber === 5 ) {
        message.channel.send("mais quel est le rapport avec la choucroute ?");
    }
    
    
/*--------------------------------------------------------*/
    
/*            progra du vote (partie detection)           */
    
/*--------------------------------------------------------*/

    if(message.content.match(/!end/i)){
        message.channel.send("vote terminé vote noir = "+ votenoir+",voteclair = "+voteclair);
        if(votenoir < voteclair){
            message.channel.send("du coup je m'acharne sur "+candidat1);
        }
        else{
            message.channel.send("du coup je m'acharne sur "+candidat2);
            
        }
        if( votenoir === voteclair){
            message.channel.send("les bancs doivent aussi avoir des penalités non ?");
        }    
        votenoir = 0
        voteclair = 0
        candidat1 = 0
        candidat2 = 0
            
    }
    randomnumber = Math.floor(Math.random()*301)
    if(vote === 1){
        vote = 0
        message.react('🌑');
        message.react('🌕');
    }    
    if(message.content.match(/!vote/i)){
        var candidat1 = Math.floor(Math.random()*11)
        var candidat2 = Math.floor(Math.random()*11)
        if(candidat1 === candidat2){
            candidat2 = candidat2 + Math.floor(Math.random()*10)
            if(candidat2 > 10){
                candidat2 = candidat2 - 10
            }
        }
        if(candidat1 === 0){
            candidat1 = "<@684457257374711838>" /*victor*/
        }
        if(candidat1 === 1){
            candidat1 = "<@404351302429310987>"/*eloi*/
        }
        if(candidat1 === 2){
            candidat1 = "<@409305476141154305>" /*maia*/
        }
        if(candidat1 === 3){
            candidat1 = "<@308655929195364364>" /*greg*/
        }
        if(candidat1 === 4){
            candidat1 = "<@689041099905302541>" /*lina*/
        }
        if(candidat1 === 5){
            candidat1 = "@665667561605693440>" /*lea*/
        }
        if(candidat1 === 6){
            candidat1 = "<@644194823300972544>" /*armelle*/
        }
        if(candidat1 === 7){
            candidat1 = "<@689039643378843770>" /*juliette*/
        }
        if(candidat1 === 8){
            candidat1 = "<@375319082200858634>" /*arthur*/
        }
        if(candidat1 === 9){
            candidat1 = "<@336496003987537920>" /*alex*/
        }
            
            
       
        if(candidat2 === 0){
            candidat2 = "<@684457257374711838>" /*victor*/
        }
        if(candidat2 === 1){
            candidat2 = "<@404351302429310987>" /*eloi*/
        }
        if(candidat2 === 2){
            candidat2 = "<@409305476141154305>" /*maia*/
        }
        if(candidat2 === 3){
            candidat2 = "<@308655929195364364>" /*greg*/
        }
        if(candidat2 === 4){
            candidat2 = "<@689041099905302541>" /*lina*/
        }
        if(candidat2=== 5){
            candidat2 = "<@665667561605693440>" /*lea*/
        }
        if(candidat2 === 6){
            candidat2 = "<@644194823300972544>" /*armelle*/
        }
        if(candidat2 === 7){
            candidat2 = "<@689039643378843770>"/*juliette*/
        }
        if(candidat2 === 8){
            candidat2 = "<@375319082200858634>" /*arthur*/
        }
        if(candidat2 === 9){
            candidat2 = "<@336496003987537920>" /*alex*/
        }
        message.channel.send("bon je m'acharne sur qui ? 🌑 pour"+candidat1+"🌕 pour"+candidat2+"(plus tard car l'option n'est pas terminé)celui qui vote 🌍 jle defonce egalement");
        vote = 1
        
    }
    if(message.content.match(/!end/i)){
        message.channel.send("vote terminé vote noir = "+ votenoir+",voteclair = "+voteclair);
        if(votenoir < voteclair){
            message.channel.send("du coup je m'acharne sur "+candidat1);
        }
        else{
            message.channel.send("du coup je m'acharne sur "+candidat2);
            
        }
        if( votenoir === voteclair){
            message.channel.send("les bancs doivent aussi avoir des penalités non ?");
        }    
        votenoir = 0
        voteclair = 0
        candidat1 = 0
        candidat2 = 0
            
    }
/*--------------------------------------------------------*/
    
/*                      truc chelou                       */
    
/*--------------------------------------------------------*/        
        
        
    if(message.content.match(/ /i) && auteur != 'ISN bot#5674'){
        dernierMess = 0;
    }
    if(message.content.match(/!emoji/i)){
       message.channel.send(client.emojis.get("693209803123589160").toString());
       message.channel.send("sinon on a :heart: ou :quasper:");
    }
    if(message.content.match(/647166866329960462> on fait un vote/i)){
        message.react('🌑');
        message.react('🌕');
        message.channel.send("Vote créé, allez-y");
        dernierMess = dernierMess + 1;
    }
    
});

client.on('messageReactionAdd', (reaction, user) =>{
    if(user.tag != 'ISN bot#5674' && reaction.emoji.name === '❤️' && dernierMess === 0){
        reaction.message.channel.send("j'aime les coeurs 😊");
        reaction.message.react('❤️');
        dernierMess = dernierMess + 1;
    }
    if(user.tag != 'ISN bot#5674' && reaction.emoji.name === '🌑'){
        reaction.message.channel.send("vote noir");
        votenoir = votenoir + 1
    }
    if(user.tag != 'ISN bot#5674' && reaction.emoji.name === '🌕'){
        reaction.message.channel.send("vote clair");
        voteclair = voteclair + 1
    }

});



client.on('typingStart', (channel, user) =>{
    randomnumber =  Math.floor(Math.random()*101)
    if(randomnumber === 1){
        channel.send("je sens une connerie arriver");
    }
    
});

client.on('message', message  => {
     if(message.author.tag === 'Aurora#9826' ) {
        if(message.content.match(/bot/i) || message.content.match(/assistant/i)){
            message.channel.send("tu oses parler de moi, petite plebeienne ?");
        }     
     }
});

    
/*zone 51*/
    
client.on('voiceStateUpdate', (ancien, nouveau)  => {
});
    client.on('emojiCreate', lemoji =>{
    client.channels.get("689039870915903554").send("Y a un nouvel emoji les enfants");
});

 
client.login(process.env.BOT_TOKEN);
