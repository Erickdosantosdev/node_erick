const express = require('express');
const router = express.Router();
const { login, checkLogin } = require('../controllers/auth');

// Login route
router.post('/login', login);

// Check login route
router.post('/checklogin', checkLogin);

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    
    // Aqui você pode chamar a função createUser que você definiu anteriormente
    // createUser(name, email, password);
    
    // Retorne uma resposta adequada para o cliente
    res.json({ message: 'Usuário registrado com sucesso!' });
});

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
