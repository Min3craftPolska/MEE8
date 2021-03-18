module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'Potrzebujesz Permisji Do Użycia Tej Komendy!',
    minArgs: 2,
   // maxArgs: 2,
    callback: (message, arguments, text) => {
message.reply(arguments)
message.reply(text)
    },
    permissions: [],
    requiredRoles: [],
}