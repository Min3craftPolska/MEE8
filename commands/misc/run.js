const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const uudn = require('../../config.json');

module.exports = {
    commands: ['run'],
    minArgs: 1,
    expectedArgs: '<KOD>',
    callback: (message, arguments, text) => {
        const args334 = arguments.slice(0).join(' ');
       // if(message.guild.id !== config.serverID && message.author.id !== config.ownerID) return;
       if(message.author.id !== config.ownerID && message.author.id !== config.ownerID2) return;
        try {
            
           // message.author.send(args334)
           setTimeout(function(){
            let evaled = eval(args334)
            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
         }, 1500);

            message.channel.send(`${args334}`, {code:"xl"});
            message.channel.send(`\`Wyjście:\``);
  //  message.channel.send(clean(evaled), {code:"xl"});
            
        }

        catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
        console.log(args334)

        function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
        
    },
    permissions: []
}