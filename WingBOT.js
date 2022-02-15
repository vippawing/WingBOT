require('dotenv').config()
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_PRESENCES,
	Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGES
], partials: [
  'CHANNEL', 'MESSAGE', 'REACTION'
]})
client.login(process.env.Token)

client.on('ready', () => {
  const clientHandler = require("./clientHandler")
  clientHandler(client)
  console.log(`${client.user.tag} 現在已經上線！`)
})

module.exports = client