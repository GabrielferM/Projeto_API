import express from 'express'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post("/usuarios", async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.nome,
      age: req.body.idade
    }
  })

  res.send(201).json(users)
})

app.get("/usuarios", async (req, res) => {
  let users = []

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.nome,
        email: req.query.email,
        age: req.query.idade
      }
    })

  } else {
    users = await prisma.user.findMany()
  }

})

app.put('/usuarios/:id', async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {
      email: req.body.email,
      name: req.body.nome,
      age: req.body.idade
    }
  })

  res.status(201).json(res.body)
})

app.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(200).json({ message: "Usuário deletado com sucesso!" })
})


app.listen(3000)


/*
 temos que espificar o tipo de roda
 e o endereço do servidor
  request: é o que o usuário está pedindo = req
  response: é o que o servidor vai responde = res
  ferreiramarragabriel
*/

/*
  Criar nosso API de Usuários
  - Criar um usuário
  - Listar usuários
  - Atualizar usuário
  - Deletar usuário
*/
