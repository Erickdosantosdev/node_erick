const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../data/users');

// Função de login
function login(req, res) {
  const { email, password } = req.body;

  // Simulação de verificação de usuário no banco de dados
  const user = users.find(user => user.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Email ou senha incorretos.' });
  }

  // Gerar token de autenticação
  const token = jwt.sign({ email: user.email }, 'secretpassword', { expiresIn: '1h' });

  res.json({ token });
}

// Função para verificar se o usuário está autenticado
function checkLogin(req, res) {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, 'secretpassword');
    res.json({ success: true, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Token inválido.' });
  }
}

module.exports = { login, checkLogin };
