const config = require('../../config.json');
module.exports = {
    commands: ['ac'],
    expectedArgs: '<id> <żółty tekst> <biały tekst>',
    minArgs: 3,
    callback: (message, arguments, text) => {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
       // message.channel.send(' ', {files: [`https://minecraftskinstealer.com/achievement/${args[0]}/${args[1]}/${args[2]}`], name: 'ac.png'}, );
        message.channel.send({
            files: [{
              attachment: `https://minecraftskinstealer.com/achievement/${args[1]}/${args[2]}/${args[3]}`,
              name: 'ac.png'
            }]});
            console.log(args)
    }
}