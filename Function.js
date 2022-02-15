const fillZero = (num) => {
  return num < 10 ? "0" + num : num
}

const isChangeDay = (Day) => {
  let Today = formatDate(new Date())
  return Day != Today ? true : false
}

const formatDate = (Day = new Date()) => {
  return fillZero(Day.getMonth() + 1).toString() + fillZero(Day.getDate()).toString()
}

module.exports = { fillZero, isChangeDay, formatDate }