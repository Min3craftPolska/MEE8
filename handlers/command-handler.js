const config = require('../config.json');
const { Attachment, Client } = require('discord.js')
const client = new Client();
const db = require(`quick.db`);

const validatePermissions = (permissions) => {
    const validPermissions = [
      'CREATE_INSTANT_INVITE',
      'KICK_MEMBERS',
      'BAN_MEMBERS',
      'ADMINISTRATOR',
      'MANAGE_CHANNELS',
      'MANAGE_GUILD',
      'ADD_REACTIONS',
      'VIEW_AUDIT_LOG',
      'PRIORITY_SPEAKER',
      'STREAM',
      'VIEW_CHANNEL',
      'SEND_MESSAGES',
      'SEND_TTS_MESSAGES',
      'MANAGE_MESSAGES',
      'EMBED_LINKS',
      'ATTACH_FILES',
      'READ_MESSAGE_HISTORY',
      'MENTION_EVERYONE',
      'USE_EXTERNAL_EMOJIS',
      'VIEW_GUILD_INSIGHTS',
      'CONNECT',
      'SPEAK',
      'MUTE_MEMBERS',
      'DEAFEN_MEMBERS',
      'MOVE_MEMBERS',
      'USE_VAD',
      'CHANGE_NICKNAME',
      'MANAGE_NICKNAMES',
      'MANAGE_ROLES',
      'MANAGE_WEBHOOKS',
      'MANAGE_EMOJIS',
    ]
  
    for (const permission of permissions) {
      if (!validPermissions.includes(permission)) {
        throw new Error(`Unknown permission node "${permission}"`)
      }
    }
  }

module.exports = (client, commandOptions) => {
    let {
        commands,
        expectedArgs = '',
        permissionError = 'Nie Masz Permisji Do Użycia Tej Komendy!',
        minArgs = 0,
        maxArgs = null,
        permissions = [],
        requiredRoles = [],
        callback
    } = commandOptions

    if (typeof commands === 'string') {
        commands = [commands]

    }
    console.log(`Rejstruje: "${commands[0]}"`)


  if (permissions.length) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    validatePermissions(permissions)
  }


  client.on('message', (message) => {
    if(message.channel.type === "dm") return;
    const { member, content, guild } = message
    let prefixdb = db.get(`prefix${message.guild.id}`);
    if (prefixdb === null) prefixdb = config.prefix
    for (const alias of commands) {
      const command = `${prefixdb}${alias.toLowerCase()}`
      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {

        for (const permission of permissions) {
          if (!member.hasPermission(permission) || !member.id === config.ownerID) {
            message.reply(permissionError)
            return
          }
        }

        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            message.reply(
              `Musisz Mieć Role "${requiredRole}" Do Użycia Tej Komendy.`
            )
            return
          }
        }


        const arguments = content.split(/[ ]+/)
        const arguments2 = content.split(' ')


        arguments.shift()


        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          message.reply(
            `Użyj: ${prefixdb}${alias} ${expectedArgs}`
          )
          return
        }


        const { Attachment, Client } = require('discord.js')
const client = new Client();
        callback(message, arguments, arguments.join(' '), client)

        return
      }
    }
  })
}