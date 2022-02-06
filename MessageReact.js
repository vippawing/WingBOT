const { RoleId } = require("./Constant")
const { giveMemberRole, removeMemberRole } = require("./DiscordFunction")

const MessageReactAdd = (reaction, user) => {
  Guild = reaction.message.guild
  switch (reaction._emoji.name) {
    case "APEX":
      giveMemberRole(Guild, user.id, RoleId.Apex)
      break
    case "DST":
      giveMemberRole(Guild, user.id, RoleId.DST)
      break
    case "LOL":
      giveMemberRole(Guild, user.id, RoleId.LOL)
      break
    case "Minecraft":
      giveMemberRole(Guild, user.id, RoleId.Minecraft)
      break
    case "Overwatch":
      giveMemberRole(Guild, user.id, RoleId.Overwatch)
      break
    case "R6":
      giveMemberRole(Guild, user.id, RoleId.R6)
      break
    case "TFT":
      giveMemberRole(Guild, user.id, RoleId.TFT)
      break
    default:
      break
  }
}

const MessageReactRemove = (reaction, user) => {
  Guild = reaction.message.guild
  switch (reaction._emoji.name) {
    case "APEX":
      removeMemberRole(Guild, user.id, RoleId.Apex)
      break
    case "DST":
      removeMemberRole(Guild, user.id, RoleId.DST)
      break
    case "LOL":
      removeMemberRole(Guild, user.id, RoleId.LOL)
      break
    case "Minecraft":
      removeMemberRole(Guild, user.id, RoleId.Minecraft)
      break
    case "Overwatch":
      removeMemberRole(Guild, user.id, RoleId.Overwatch)
      break
    case "R6":
      removeMemberRole(Guild, user.id, RoleId.R6)
      break
    case "TFT":
      removeMemberRole(Guild, user.id, RoleId.TFT)
      break
    default:
      break
  }
}

module.exports = { MessageReactAdd, MessageReactRemove }