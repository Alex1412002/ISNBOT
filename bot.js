const Discord = require('discord.js'); /* importation de la bibliotheque*/  
const client = new Discord.Client(); /*creation du compte discord du bot*/     
var auteur = 0 /*variable de simplification*/
var extension = [] 
var nom = ""
var i = 0


/*Check de la connexion*/
client.on('ready', () => {
    console.log('pret a casser des culs'); /*affichage dans la console*/
    
})
/*quand un message est envoyé dans un chat*/
client.on('message', message =>{ 
    auteur = message.author.tag /*ligne pour simplifier et epurer le code*/
    if(auteur !== 'ISN bot#5674'){ 
/*--------------------------------------------------------*/
    
/*                      text reaction                     */
    
/*--------------------------------------------------------*/
        if(message.content.match(/!!statut/i)) {
            message.channel.send("je suis en ligne");
        }
        if(message.content.match(/!!test/i)) {
            message.channel.send(message.content.slice(7,message.content.length));
        }
        if(message.content.match(/!!help/i)) {
        message.channel.send("__Liste des commandes :__\n\n - `!!statut` : pour check si je suis la\n - `!!blague` : pour une bonne boutade\n - `!!hsaddcard {nom} {lien vers imgur}` *desactivé* : ajoute une carte a la librairie de vote\n - `!!hsvote {nom de la carte}` *coming soon* : permet de voter pour une carte\n - `!!hsvotesee {nom de carte}` *coming soon* : voir la moyenne du vote d'une carte"  );
        }
        /*detecte la commande de la blague et en raconte une aleatoirement*/
        if(message.content.match(/!!blague/i)){
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
 /*--------------------------------------------------------*/
    
/*                  sondage hearthstone                    */
    
/*---------------------------------------------------------*/
        if(message.content.match(/!!hsaddcard/i)) {
            extension.push([message.content.slice(12,37),message.content.slice(38,message.content.length)]);
            message.delete();
            message.channel.send(extension);
        }

        if(message.content.match(/!!hsvotesee/i)) {
            message.channel.send("cette commande est bientot dispo");
        }
        if(message.content.match(/!!hscardsee/i)) {
            message.delete();
            for (i = 0; i < extension.lenght; i++) {
                infos = extension[i]
                if(message.content.slice(12,message.content.length) === infos[0]){ 
                    message.channel.send(infos[1]);
                }
                else {
                    message.channel.send("cette carte est inconnue. est ce le nom exact ?");
                }
                    
            }
            
        }
        
    }
    


});


/*zone 51*/
    
/*client.on('voiceStateUpdate', (ancien, nouveau)  => {
});
    client.on('emojiCreate', lemoji =>{
    client.channels.get("689039870915903554").send("Y a un nouvel emoji les enfants");
});
}*/
 
client.login(process.env.BOT_TOKEN);
