const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

const Image = (Client, msg) => {
  client = Client
  switch (msg.content) {
    case "/w img":
      const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('BeeCar')
          .setLabel('BeeCar')
          .setStyle('PRIMARY'),
      )
      msg.channel.send({ content: "**【貼圖列表】**", components: [row] })
      msg.delete()
      break
  }
}

function showImage(interaction) {
  switch (interaction.customId) {
    case 'BeeCar':
      BeeCar(interaction.channel)
      interaction.message.delete()
      break
  }
}

async function BeeCar(Channel) {
  Channel.send({ files: [{ attachment: './img/BeeCar.png' }] })
}

module.exports = { Image, showImage }