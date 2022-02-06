require('dotenv').config()
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGES
], partials: [
  'CHANNEL', 'MESSAGE', 'REACTION'
]})
client.login(process.env.Token)

const { giveMemberRoleId } = require("./Constant")
const { MessageReactAdd, MessageReactRemove } = require("./MessageReact")
const Image = require("./Img")

client.on('ready', () => {
  console.log(`${client.user.tag} 現在已經上線！`)
})

client.on('messageCreate', (msg)  => {
  Image(msg)
})

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.message.id == giveMemberRoleId)  {
    MessageReactAdd(reaction, user)
  }
})

client.on('messageReactionRemove', (reaction, user) => {
  if (reaction.message.id == giveMemberMessageReactId)  {
    MessageReactRemove(reaction, user)
  }
})