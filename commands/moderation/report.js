const db = require('quick.db');
const config = require('../../config.json');
const Discord = require('discord.js');


module.exports = {


    commands: ['r', 'report'],
    expectedArgs: '<@Uzytkownik> <Powód>',
    minArgs: 2,
    callback: (message, arguments, text, client) => {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        
        let chx = message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
        let channelr = db.get(`channelr${message.guild.id}`)
        if(channelr === null) chx.send(`Ustaw ID Kanału Używając Komendy: ${config.prefix}options notifyc <ID>`)



        const color = '#181215'
        let target = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]);
        if(!target) return message.reply('Podaj Nazwe Użytkownika!').then(m => m.delete({timeout: 15000}));
        let reason = arguments.slice(1).join(" ");
        if(!reason) return message.reply(`Podaj Powód Zgłoszenia **${target.user.username}**`).then(m => m.delete({timeout: 15000}));
        let reportChannel = message.guild.channels.cache.get(channelr);

        const embedr = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`Zgłoszenie Od **${message.author.username}**!`)
        .setDescription(`**${message.author.username}** Zgłosił **${target.user.username}** Za **${reason}**.`)
        const embedr2 = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`Dziękujemy Za Zgłoszenie.`)
        .setDescription(`Moderatorzy Szybko Przeczytają co ty tam nabazgrałeś.`)
        //client.users.cache.get('682918734402158594').send(message.author.tag + ` Zgłosił ` + reportc); 
      try {

      
        reportChannel.send(embedr)
      }
      catch (err) {
          const user = message.author;
        //  message.author.send('Coś Poszło Nie Tak....  ' + err);
        //  try {
       //   client.users.cache.get(`633313654283960330`).send(`${user} Catched An Error! ${err}`);
       //   }
      //    catch (err) {
       //       message.reply(`No Teraz To Już Jest Poważna Usterka...  ${err}`)
//}
          return;
      } 
        
        message.reply(embedr2)
        
    }
}