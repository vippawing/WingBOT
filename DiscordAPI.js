const { Permissions } = require('discord.js');
const { RoleId } = require('./Constant')
const client = require('./WingBOT')

class DiscordAPIClass {

  getGuild = (guildId) => {
    const Guild = client.guilds.cache.get(guildId)
    return Guild
  }
  
  getChannel = (channelId) => {
    const Channel = client.channels.cache.get(channelId)
    return Channel
  }
  
  getMember = (guildId, memberId) => {
    const Guild = this.getGuild(guildId)
    const Member = Guild.members.cache.get(memberId)
    return Member
  }
  
  createChannel = async (guildId, channelName, channelType, parentId) => {
    const Guild = this.getGuild(guildId)
    const channel = await Guild.channels
    .create(channelName, {
      type: channelType, parent: parentId
    })
    return channel.id
  }
  
  removeChannel = (channelId) => {
    const Channel = this.getChannel(channelId)
    Channel.delete()
  }
  
  editChannelPermission = (channelId) => {
    const Channel = client.channels.cache.get(channelId)
    Channel.permissionOverwrites.set([{
      id: RoleId.Everyone,
      deny: [Permissions.FLAGS.SEND_MESSAGES]
    }])
  }
  
  addRole = (guildId, memberId, roleId) => {
    const Member = this.getMember(guildId, memberId)
    Member.roles.add(roleId)
  }
  
  removeRole = (guildId, memberId, roleId) => {
    const Member = this.getMember(guildId, memberId)
    Member.roles.remove(roleId)
  }

}

const DiscordAPI = new DiscordAPIClass()

module.exports = DiscordAPI