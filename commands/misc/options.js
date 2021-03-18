const Discord = require(`discord.js`);
const config = require(`../../config.json`);
const db = require(`quick.db`);

module.exports = {
    commands: ['options', 'option'],
    callback: (message, arguments) => {
        const embedo = new Discord.MessageEmbed()
        .setColor(config.options.color)
                .setTitle(`Pomoc Opcji`)
                .setDescription(`jeszcze nie`)
                
                if(!arguments[0]) {
                    return message.reply(embedo)
                }
               if(arguments[0] === 'notifyc') {
                       db.set(`channelr${message.guild.id}`, arguments[1])
    
                       message.channel.send(`Ustawiono ID Kanału na ${arguments[1]}!`)
               }
              // if(args[0] === 'welcome') {
             //      db.set(`welcome${message.guild.id}`, welcomem)
    //
            //       message.channel.send(`Ustawiono Wiadomość Powitalną na ${welcomem}!`)
            //   }
               if(arguments[0] === 'wchannel') {
                   db.set(`wchannel${message.guild.id}`, arguments[1])
    
                   message.channel.send(`Ustawiono ID Kanału na ${arguments[1]}!`)
               }
    
    },
    permissions: 'ADMINISTRATOR'
}