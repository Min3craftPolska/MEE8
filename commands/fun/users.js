module.exports = {
    commands: ['users'],
    callback: (message) => {
        message.channel.send('Ilość Użytkowników: ' + message.guild.members.cache.size)
    }
}