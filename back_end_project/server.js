import express, { response } from 'express'

const app = express();

app.get("/usuarios", (req, res) => {
    res.send("Ok, deu certo!");
})

app.listen(3000)


/*
 temos que espificar o tipo de roda
 e o endereço do servidor
  request: é o que o usuário está pedindo = req
  response: é o que o servidor vai responde = res
*/