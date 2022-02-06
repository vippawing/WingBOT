const giveMemberRole = (Guild, memberId, roleId) => {
  Guild.members.cache.get(memberId).roles.add(roleId)
}

const removeMemberRole = (Guild, memberId, roleId) => {
  Guild.members.cache.get(memberId).roles.remove(roleId)
}

module.exports = { giveMemberRole, removeMemberRole }