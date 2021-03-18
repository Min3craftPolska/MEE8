module.exports = {
    commands: ['czkjco', 'waitwhat'],
    maxArgs: 1,
    minArgs: 1,
    expectedArgs: `<@Użytkownik / @TWOJA NAZWA>`,
    callback: (message) => {
        
        let user = message.mentions.members.first()
        message.reply(` ${user}`, {files: ["https://i.imgur.com/2ZGpulV.png"]})
        message.delete();
    }
}