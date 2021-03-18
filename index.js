const Discord = require('discord.js');
const nm = require('nm')
const client = new Discord.Client();
const config = require('./config.json');
const path = require('path');
const figlet = require('figlet');
const ytdl = require('ytdl-core');
const fs = require("fs");
const db = require('quick.db');
const mongo = require(`mongodb`);
require(`dotenv`).config();
const wok = require(`wokcommands`);

client.commands = new Discord.Collection();


client.once('ready', () => {
    client.user.setStatus('idle')
    client.setMaxListeners(0)

        client.user.setActivity('Prefix: ' + config.prefix + ' | Dla  ' + client.users.cache.size + ' Użytkowników', {type: config.activity.type, url: config.activity.streamlink});
        const baseFile = 'command-handler.js'
        const commandBase = require(`./handlers/${baseFile}`)
        const readCommands = dir => {
            const files = fs.readdirSync(path.join(__dirname, dir))
            for (const file of files) {
                const stat = fs.lstatSync(path.join(__dirname, dir, file))
                if (stat.isDirectory()) {
                    readCommands(path.join(dir, file))
                } else if (file !== baseFile) {
                    const option = require(path.join(__dirname, dir, file))
                    commandBase(client, option)
                }
            }
        }

        readCommands('commands')
        console.log('=--------------------------------------------------------=');
        console.log('Discord Bot');
        console.log('Username: ' + client.user.tag);
        console.log('ID: ' + client.user.id);
        console.log('Owner ID: ' + config.ownerID);
        console.log('Prefix: ' + config.prefix)
        console.log('Servers: ' + client.guilds.cache.size)  
        console.log('Users: ' + client.users.cache.size) 
        console.log('Server names: ' + client.guilds.cache.array())
        console.log('=--------------------------------------------------------=');
});




/*client.on("guildMemberAdd", (member) => {
    var user = `${member.user}`
    var chx = member.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
    console.log(`${member} joined`);
    let mess = db.get(`welcome${member.guild.id}`)
    const ch = db.get(`wchannel${member.guild.id}`)
    if(mess === null) mess = `Witamy na ${member.guild.name} ${member.user}`
    if(ch === null) chx.send(`nie ustawiłeś/aś ID kanału do wiadomości powitalnych a zrób to komendą **${config.prefix}options wchannel <ID KANAŁU>**.`)
    try {
    member.send(`Witamy na ${member.guild.name}!`);
    let ch2 = member.guild.channels.cache.get(ch);
    ch2.send(`${user}`)
    }
    catch (err) {
        chx.send(`Jest Problem ${err}`)
    }
});*/



client.login(process.env.token)
