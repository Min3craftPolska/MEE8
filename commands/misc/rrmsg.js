module.exports = {
    commands: ['rrmsg'],
    callback: async (message, arguments) => {
        const { guild, mentions } = message
        const { channels } = mentions
        const tC = channels.first() || message.channel 

        if (channels.first()) {
            arguments.shift()
        }

        const text = arguments.join(' ')
        const newMessage = await tC.send(text)

        
    },
    permissions: ['ADMINISTRATOR']
}