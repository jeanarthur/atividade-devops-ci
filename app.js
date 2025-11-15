// Separamos a lógica do app da inicialização do servidor
// para que os testes possam carregar o app sem iniciar o servidor.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Deu tudo certo Rafa, Muito Obrigado. Deus é bom");
});

module.exports = app; // Exportamos o app
