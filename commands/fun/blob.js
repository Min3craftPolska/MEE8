const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    commands: ['blob'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {
        //const emoji = client.guilds.get('804619851527618570').emojis.cache.get("805510453114437682");
        //const emoji = client.guild.id.get('804619851527618570').emojis.cache.get("805510453114437682");

        message.react(`805510453114437682`);
        //message.reply(`${emoji}`);
    }
}             