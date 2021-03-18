const Discord = require('discord.js');

let shortcuts = new Map([
    ['lenny', '( ͡° ͜ʖ ͡°)'],
    ['magic', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'],
    ['yay', '( ﾟヮﾟ)'],
    ['smile', '{◕ ◡ ◕}'],
    ['wizard', '(∩´• . •`)⊃━☆ﾟ.*'],
    ['happy', '╰( ◕ ᗜ ◕ )╯'],
    ['party', '(つ°ヮ°)つ'],
    ['dance', '└╏ ･ ᗜ ･ ╏┐'],
    ['disco', '（〜^∇^)〜'],
    ['woahmagic', '(∩｡･ｏ･｡)っ.ﾟ☆`｡'],
    ['rage', '(┛ಠДಠ)┛彡┻━┻'],
    ['excited', '☆*:. o(≧▽≦)o .:*☆'],
    ['music', '(✿ ◕ᗜ◕)━♫.*･｡ﾟ'],
    ['woah', '【 º □ º 】'],
    ['flipparty', '༼ノ◕ヮ◕༽ノ︵┻━┻'],
    ['sad', '(;﹏;)'],
    ['wink', '(^_-)']
])

const embed = new Discord.MessageEmbed() 
.setTitle('nie zrobione');


module.exports = {
    commands: ['lemoji'],
    expectedArgs: '<emoji name>',
    callback: (message, arguments, text) => {
        console.log(arguments)
        if(!arguments[0]) {
            return message.channel.send(embed);
        }

        if(shortcuts.has(arguments[0])) {
            setTimeout(() => { message.channel.send(shortcuts.get(arguments[0])) }, 50);
            return;
        }
    }
}