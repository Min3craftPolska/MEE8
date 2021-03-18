const db = require(`quick.db`);
const Discord = require(`discord.js`);

module.exports = {
    commands: ['kick'],
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
    if(!reason) return message.reply(`Podaj Powód Wyrzucenia **${target.user.username}**`).then(m => m.delete({timeout: 15000}));
    let Channel = message.guild.channels.cache.get(channelr);

    const embedr = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(`Kick Od **${message.author.username}**!`)
    .setDescription(`**${message.author.username}** (\`${message.author.id}\`) Wyrzucił **${target.user.username}** (\`${target.user.id}\`) Za \`\`\`${reason}\`\`\``)
    const embedr2 = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(`Wyrzucono **${target.user.username}**.`)
    .setDescription(`Wyrzucono \`${target.user.id}\` za ${reason}`)
       


    const user2 = message.member.createDM();
    const user = message.mentions.users.first();

    if(target){
        const member = message.guild.member(target);

        if(member){
            member.kick(reason).then(() =>{
                message.reply(embedr2);
                try {

  
                    Channel.send(embedr)
                  }
                  catch (err) {
                      Channel.send(`Błąd przy Wyrzucaniu: ` + err)
                      return;
                  } 
                console.log(arguments)
            }).catch(err =>{
                message.reply('Nie Moge Wyrzucić Użytkownika z Serwera!');
                console.log(err);
            });
        } else{
            message.reply("Ten Użytkownik Nie Jest Na Kanale!!")

        }
        } else {
            message.reply('Musisz Podać Nazwe Użytkownika!')
    }
    message.delete();
   },
    permissions: ['KICK_MEMBERS'],
    requiredRoles: [],

}