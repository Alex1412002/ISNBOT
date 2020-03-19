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
    if(message.author.tag != 'ISN bot#5674' ) {    
        if(message.content.match(/dieu/i)){
             if(message.author.tag === 'Sayday1#5908' ) {
                  message.channel.send("Il parle de lui a la 3 eme personne ...");
             }
             else {
                  message.channel.send("Je suis athée et ne reconnait aucune personne comme étant dieu... mais je ne suis pas contre l'idée d'etre venerée");
             }
            
        }
    }
    if(message.content.match(/assistant !/i)){
       if(message.author.tag === 'Sayday1#5908' ) { 
          message.channel.send("Votre assistant est là seigneur "+message.author+" ?");
       }
       else {
           message.channel.send("Que puis je faire pour vous ?"+message.author+" ?");
       }
    }
    if(message.content.match(/pute/i)){
       message.channel.send("Vocabulaire !!!");
    }
    if(message.content.match(/!blague/i)){
        var blague = Math.floor(Math.random()*10)
        if(blague === 0){
            message.channel.send("c'est l'histoire de toto au toilette mais personne ne la connait car il avait fermé la porte");
        }
        if(blague === 1){
            message.channel.send("c'est l'histoire d' un type qui rentre dans un café et ... plouf");
        }
        if(blague === 2){
            message.channel.send("c'était une blague sur les magasins ... mais elle a pas supermarché");
        }
        if(blague === 3){
            message.channel.send("le passé le present et le futur entre dans un bar ... il etait temps");
        }
        if(blague === 4){
            message.channel.send("c'est l'histoire d'un poil qui allait bien mais maintenant il va pubien");
        }
        if(blague === 5){
            message.channel.send("Le Viagra c'est comme l'enfer , satan l'habite");
        }
        if(blague === 6){
            message.channel.send("c'est un schtroumf qui tombe et qui se fait un bleu");
        }
        if(blague === 7){
            message.channel.send("les girafes n'existent pas , c'est un coup monté");
        }
        if(blague === 8){
            message.channel.send("Quand 2 poissons s'enervent le thon monte");
        }
        if(blague === 9){
            message.channel.send("je ne suis pas moche , je suis une boT");
        }
        
        
    }
    if(message.content.match(/efface stp/i)){
       message.delete();
       message.delete();
    }
    
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
