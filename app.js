const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos (ex: HTML, CSS, JS)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo! Seu site está rodando com Node.js e Express.');
});

// Inicia o servidor
app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 300');
  });
  
