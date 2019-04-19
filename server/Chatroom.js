module.exports = function ({name, image, messages}, users) {
  const members = new Map();
  let chatHistory = messages.map(chatEntry =>
    Object.assign({}, chatEntry,
      {user: users.filter(user => user.name === chatEntry.user)[0]}));

  function broadcastMessage(message) {
    members.forEach(m => m.emit('message', message))
  }

  function addEntry(entry) {
    chatHistory = chatHistory.concat(entry)
  }

  function getChatHistory() {
    return chatHistory.slice()
  }

  function addUser(client) {
    members.set(client.id, client)
  }

  function removeUser(client) {
    members.delete(client.id)
  }

  function serialize() {
    return {
      name,
      image,
      numMembers: members.size
    }
  }

  return {
    broadcastMessage,
    addEntry,
    getChatHistory,
    addUser,
    removeUser,
    serialize
  }
};
