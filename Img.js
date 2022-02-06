const Image = (msg) => {
  switch (msg.content) {
      case "/w img":
          msg.channel.send("**【貼圖指令】\n/w img <名稱> \nBeeCar**")
          break
      case '/w img BeeCar':
          BeeCar(msg)
          break
  }
}

async function BeeCar(msg) {
  msg.channel.send({ files: [{ attachment: './img/BeeCar.png' }] })
}

module.exports = Image