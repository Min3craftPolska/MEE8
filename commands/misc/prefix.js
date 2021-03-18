const config = require('../../config.json');
const fs = require('fs');
const db = require(`quick.db`);


module.exports = {
    commands: ['prefix', 'p'],
    expectedArgs: '<prefix>',
    maxArgs: '1',
    minArgs: '1',
    callback: (message, arguments, text) => {
        db.set(`prefix${message.guild.id}`, arguments[0]);

        message.channel.send(`Zmieniono Prefix na ${arguments[0]}`)

    },
    permissions: 'ADMINISTRATOR'
}