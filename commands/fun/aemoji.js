const { MessageAttachment } = require("discord.js");

module.exports = {
    commands: ['aemoji'],
    expectedArgs: '<emojiname> <emojid>',
    maxArgs: 2,
    minArgs: 1,
    callback: (message, arguments, text) => {
        message.reply(`<a:${arguments[0]}:${arguments[1]}>`);
        message.delete();
    }
}