const { RoleId } = require("./Constant")
const DiscordAPI = require("./DiscordAPI")

const MessageReactAdd = (reaction, user) => {
  guildId = reaction.message.guild.id
  switch (reaction._emoji.name) {
    case "APEX":
      DiscordAPI.addRole(guildId, user.id, RoleId.Apex)
      break
    case "DST":
      DiscordAPI.addRole(guildId, user.id, RoleId.DST)
      break
    case "LOL":
      DiscordAPI.addRole(guildId, user.id, RoleId.LOL)
      break
    case "Minecraft":
      DiscordAPI.addRole(guildId, user.id, RoleId.Minecraft)
      break
    case "Overwatch":
      DiscordAPI.addRole(guildId, user.id, RoleId.Overwatch)
      break
    case "R6":
      DiscordAPI.addRole(guildId, user.id, RoleId.R6)
      break
    case "TFT":
      DiscordAPI.addRole(guildId, user.id, RoleId.TFT)
      break
    case "Birthday":
      DiscordAPI.addRole(guildId, user.id, RoleId.Birthday)
    default:
      break
  }
}

const MessageReactRemove = (reaction, user) => {
  guildId = reaction.message.guild.id
  switch (reaction._emoji.name) {
    case "APEX":
      DiscordAPI.removeRole(guildId, user.id, RoleId.Apex)
      break
    case "DST":
      DiscordAPI.removeRole(guildId, user.id, RoleId.DST)
      break
    case "LOL":
      DiscordAPI.removeRole(guildId, user.id, RoleId.LOL)
      break
    case "Minecraft":
      DiscordAPI.removeRole(guildId, user.id, RoleId.Minecraft)
      break
    case "Overwatch":
      DiscordAPI.removeRole(guildId, user.id, RoleId.Overwatch)
      break
    case "R6":
      DiscordAPI.removeRole(guildId, user.id, RoleId.R6)
      break
    case "TFT":
      DiscordAPI.removeRole(guildId, user.id, RoleId.TFT)
      break
    case "Birthday":
      DiscordAPI.removeRole(guildId, user.id, RoleId.Birthday)
      break
    default:
      break
  }
}

module.exports = { MessageReactAdd, MessageReactRemove }