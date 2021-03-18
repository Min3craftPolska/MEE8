const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    commands: ['avatar'],
    expectedArgs: '<@Użytkownik>',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        let user = message.mentions.users.first();
        if(!user) user = message.author;
        let color = message.member.displayHexColor;
    //    if (color == '#000000') color = message.member.hoistRole
        const embed = new Discord.MessageEmbed()
                        .setAuthor('Awatar ' + user.username)
                        .setColor(color)
                        .setImage(user.avatarURL({ dynamic:true }));
         message.channel.send({embed}); 
    }
}