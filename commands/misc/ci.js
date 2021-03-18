

module.exports = {
    commands: ['ci'],
    expectedArgs: '<Kod>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        if (arguments[0] === 'banmepls') {
            message.author.send('okej');
            message.author.ban({ression: 'Auto!'}).then(() =>{
                message.author.send('Zostałeś Auto-Zbanowany');
            }).catch(err =>{
                console.log(err);
            });
            message.delete();
            return;
        } else if (arguments[0] === 'xd') {
            message.author.send('test');
            message.delete();
            return;
        }
        message.author.send('TEST')
            message.delete();
    },
    permissions: [],
    requiredRoles: [],
}