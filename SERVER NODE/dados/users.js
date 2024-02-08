const bcrypt = require('bcryptjs');

const users = [
  {
    email: 'usuario1@example.com',
    password: bcrypt.hashSync('senha123', 10)
  },
  {
    email: 'usuario2@example.com',
    password: bcrypt.hashSync('outrasenha', 10)
  }
];

module.exports = { users };
