const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    commands: ['emoji'],
    expectedArgs: '<emojid>',
    maxArgs: 1,
    minArgs: 1,
    callback: (message, arguments, text) => {
        const emojih = client.emojis.cache.get('821113235646316575');
        console.log(arguments)
        console.log(text)
        message.reply(emojih);
        message.delete();
    }
}