

module.exports = {
    commands: ['clear'],
    expectedArgs: '<Ilość Wiadomości (Max: 100)>',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        message.delete();
        console.log(arguments)
        if(message.author.bot || message.channel.type === "dm") return;
        if (isNaN(arguments[0]) || parseInt(arguments[0]) <= 0) {
            return message.reply("To Nie Jest Numer!").then(m => m.delete({ timeout: 5000 }));
        }

        let deleteAmount;
        if (parseInt(arguments[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(arguments[0]);
        }

        message.channel.bulkDelete(deleteAmount, true).catch(err => message.reply(`Coś Poszło Nie Tak... ${err}`));
        message.channel.send(`Wyczyszczono ${deleteAmount} Wiadomości!`).then(m => m.delete({ timeout: 5000 }));
        console.log(deleteAmount)

    },
    permissions: ['MANAGE_MESSAGES']
}