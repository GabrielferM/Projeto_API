import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post("/usuarios", (req, res) => {
  
  users.push(req.body)

  res.send(201).json(users)
})

app.get("/usuarios", (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)


/*
 temos que espificar o tipo de roda
 e o endereço do servidor
  request: é o que o usuário está pedindo = req
  response: é o que o servidor vai responde = res
  ferreiramarragabriel
  y29ZM57iiGTajPep
*/

/*
  Criar nosso API de Usuários
  - Criar um usuário
  - Listar usuários
  - Atualizar usuário
  - Deletar usuário
*/
