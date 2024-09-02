const bcrypt = require('bcryptjs');

const users = [
  {
    username: 'Admin User',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    username: 'User 1',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
  {
    username: 'User 2',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
];

module.exports = users;
