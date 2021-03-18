const config = require(`../../config.json`);
const Discord = require(`discord.js`);
const crypto = require(`crypto`);
require(`dotenv`).config();


module.exports = { 
    
    commands: ['accs', 'accounts'],
    minArgs: 1,
    callback: (message, arguments) => {
     /*   const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};*/

        if(message.author.id !== config.ownerID && message.author.id !== config.ownerID2) return;
        if(arguments[0] === '6618832612993') {
            if(arguments[1] === 'microsoft') {
                

                const acc = 'Konto Microsoft';
                const mail = process.env.mailmin3wp;
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Konto: \`${acc}\`\nMail: \`${mail}\`\nHasło: ||\`${process.env.passmin32}\`||`);
                    message.delete();
                    message.author.send(embed)
                    return;
            }
            return;
        }
    }

}