var client = null

const clientHandler = (Client) => {
  client = Client

  const { giveMemberRoleIdByMsg } = require("./Constant")
  const { MessageReactAdd, MessageReactRemove } = require("./MessageReact")
  const Image = require("./Img")
  const Birthday = require('./Birthday')
  
  Birthday(client)

  client.on('messageCreate', (msg)  => {
    Image(msg)
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

}

module.exports = clientHandler