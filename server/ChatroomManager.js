const Chatroom = require('./Chatroom');
const {getChatroomList, getUserList} = require('./db.js');

module.exports = function () {
  // mapping of all available chatrooms
  const chatrooms = new Map(
    getChatroomList().map(c => [
      c.name,
      Chatroom(c, getUserList().value())
    ])
  );

  function removeClient(client) {
    chatrooms.forEach(c => c.removeUser(client))
  }

  function getChatroomByName(chatroomName) {
    return chatrooms.get(chatroomName)
  }

  function serializeChatrooms() {
    return Array.from(chatrooms.values()).map(c => c.serialize())
  }

  return {
    removeClient,
    getChatroomByName,
    serializeChatrooms
  }
};
