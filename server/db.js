const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');

const adapter = new FileSync('db.json');
const db = low(adapter);

const chatrooms = require('../config/chatrooms');
const users = require('../config/users');

db.defaults({
  chatrooms,
  users,
  log: []
}).write();

console.log('Loading database');

module.exports = {
  getChatroomList: () => db.get('chatrooms'),
  getUserList: () => db.get('users'),
  log: msg => db.get('log').push({id: shortid.generate(), msg}).write()
};
