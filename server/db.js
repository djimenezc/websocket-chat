const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const chatrooms = require('../config/chatrooms');
const users = require('../config/users');

db.defaults({
  chatrooms,
  users
}).write();

console.log('Loading database');

module.exports = {
  getChatroomList: () => db.get('chatrooms'),
  getUserList: () => db.get('users')
};
