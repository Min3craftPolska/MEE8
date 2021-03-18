const config = require('../../config.json');
const db = require(`quick.db`);
const Discord = require(`discord.js`)

module.exports = {
    commands: ['ban'],
    expectedArgs: '<@Użytkownik> <Powód>',
    permissionError: 'Potrzebujesz Permisji Do Użycia Tej Komendy!',
    minArgs: 2,

    callback: (message, arguments, text) => {
        let chx = message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
        let channelr = db.get(`channelr${message.guild.id}`)
        if(channelr === null) chx.send(`Ustaw ID Kanału Używając Komendy: ${config.prefix}options notifyc <ID>`)
        const color = '#181215'
        let target = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]);
        if(!target) return message.reply('Podaj Nazwe Użytkownika!').then(m => m.delete({timeout: 15000}));
        let reason = arguments.slice(1).join(" ");
        if(!reason) return message.reply(`Podaj Powód Zbanowania **${target.user.username}**`).then(m => m.delete({timeout: 15000}));
        let Channel = message.guild.channels.cache.get(channelr);

        const embedr = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`Ban Od **${message.author.username}**!`)
        .setDescription(`**${message.author.username}** (\`${message.author.id}\`) Zbanował **${target.user.username}** (\`${target.user.id}\`) Za \`\`\`${reason}\`\`\``)
        const embedr2 = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`Zbanowano **${target.user.username}**.`)
        .setDescription(`Zbanowano \`${target.user.id}\` za ${reason}`)
        if(target){
            const member = message.guild.member(target);

            if(member){
                member.ban({ression: reason}).then(() =>{
                    message.reply(embedr2);
                    try {

      
                        Channel.send(embedr)
                      }
                      catch (err) {
                          Channel.send(`Błąd przy Banowaniu: ` + err)
                          return;
                      } 
                    console.log(arguments)
                }).catch(err =>{
                    message.reply('Nie Moge Zbanować Użytkownika!! ' + err);
                    console.log(err);
                });
            } else{
                message.reply("Ten Użytkownik Nie Jest Na Kanale!!")

            }
            } else {
                message.reply('Musisz Podać Nazwe Użytkownika!')
        }


    
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],

}