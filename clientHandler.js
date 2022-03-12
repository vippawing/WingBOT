const { MessageActionRow, MessageButton } = require('discord.js');

const clientHandler = (client) => {

  const { giveMemberRoleIdByMsg } = require("./Constant")
  const { MessageReactAdd, MessageReactRemove } = require("./MessageReact")
  const { Image, showImage} = require("./Img")
  const Birthday = require('./Birthday')
  
  Birthday(client)

  client.on('messageCreate', (msg)  => {
    Image(client, msg)
  })
  
  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id == giveMemberRoleIdByMsg)  {
      MessageReactAdd(reaction, user)
    }
  })
  
  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.id == giveMemberRoleIdByMsg)  {
      MessageReactRemove(reaction, user)
    }
  })

  client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    switch (interaction.customId) {
      case 'BeeCar':
        showImage(interaction)
        break
    }
    interaction.deferUpdate()
  })
}

module.exports = clientHandler