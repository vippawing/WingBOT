const fs = require('fs')
const { isChangeDay, formatDate } = require('./Function')
const { Channel, birthdayData, RoleId } = require('./Constant')
const DiscordAPI = require('./DiscordAPI')

const birthdayList = JSON.parse(fs.readFileSync('./Birthday.json')).Data

var Birth = {
  channelId: null,
  hasChannel: false,
  Date: null,
  Status: 0
}

var client = null

const Birthday = (Client) => {
  client = Client
  Timing()
}

const Timing = () => {
  let Today = formatDate()
  if (Birth.Status > 0) if (isChangeDay(Birth.Date)) Birth.Status += 1
  if (Birth.Status == 2) endBirthday()
  else if (Birth.Status == 3) closeBirthdayChannel()
  let Index = 0
  birthdayList.forEach(e => {
    if (e.Date == Today && e.isBirthday == false) startBirthday(Today, Index)
    Index++
  })
  setTimeout(() => { Timing() }, 1000)
}

const startBirthday = (Today, Index) => {
  Birth.Date = Today, Birth.Status = 1
  birthdayList[Index].isBirthday = true
  DiscordAPI.addRole(birthdayData.guildId, birthdayList[Index].id, birthdayData.roleId)
  if (Birth.hasChannel == false) {
    Birth.hasChannel = true
    DiscordAPI.createChannel(birthdayData.guildId, birthdayData.textChannelName, Channel.text, birthdayData.channeParentId)
    .then((channelId) => { 
      Birth.channelId = channelId
      DiscordAPI.getChannel(Birth.channelId).send(`<@&${RoleId.Birthday}> 猜猜今天是誰生日！`)
    })
  }
}

const endBirthday = () => {
  let Index = 0
  birthdayList.forEach(e => {
    if (e.isBirthday == true) {
      e.isBirthday = null
      DiscordAPI.getChannel(Birth.channelId).send(`<@${birthdayData.roleId}> 看看多少人為你慶生吧！`)
      DiscordAPI.removeRole(birthdayData.guildId, birthdayList[Index].id, birthdayData.roleId)
    }
    Index++
  })
  DiscordAPI.editChannelPermission(Birth.channelId)
}

const closeBirthdayChannel = () => {
  DiscordAPI.removeChannel(Birth.channelId)
  Birth = { channelId: null, Date: null, Status: 0 }
}

module.exports = Birthday 