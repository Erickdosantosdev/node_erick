// Importando módulos
const express = require('express');
const { auth } = require('express-openid-connect');

//Obter as informações do perfil do usuário

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://web.whatsapp.com',
  clientID: 'JlZd4AlbcWhplvlOACj2FH0oKqpiDNge',
  issuerBaseURL: 'https://exte-ggtools.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


// Criando instância do aplicativo Express
const app = express();


// Configurações do Auth0
const auth0Config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a-long-random-string-here',
  baseURL: 'http://localhost:3000', // Atualize a URL base conforme necessário
  clientID: 'vyUPBKxZ0CGo83rNQ0R3OJQLYMJ977UK', // Substitua pelo Client ID do seu aplicativo Auth0
  issuerBaseURL: 'https://exte-ggtools.us.auth0.com' // Substitua pelo domínio do seu aplicativo Auth0
};

// Middleware de autenticação
app.use(auth(auth0Config));

// Rota protegida
app.get('/profile', (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Rota de verificação de login
app.post('/check-login', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



app.post('/register', (req, res) => {
  // Obtenha os dados do corpo da solicitação
  const { username, email, password } = req.body;

  // Aqui você deve adicionar a lógica para salvar o novo usuário no banco de dados ou onde você estiver armazenando os dados
  // Por exemplo, se você estiver usando um banco de dados MongoDB com Mongoose:
  const newUser = new User({
      username: username,
      email: email,
      password: password
  });

  newUser.save((err, user) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Erro ao registrar o usuário.' });
      }
      res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  });
});
