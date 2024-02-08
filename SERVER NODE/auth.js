const express = require('express');
const auth = express();

auth.use((req, res, next) => {
    res.status(200).send({
        mensagem:'ok deu certo'
    });
});

module.exports = auth;
