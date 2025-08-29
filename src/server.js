import http from 'http'

// - HTTP (REQ)
// - Método
// - URL

// instagram.com/messi
// https://www.instagram.com/accounts/professional_account_settings/

// GET POST PUT PATCH DELETE
// GET -> Recupera informações do back end
// POST -> Criar um recurso la no back end
// PUT -> Atualizar um recurso do back end
// PATCH -> Atualizar uma informação específica
// DELETE -> DEletar algum recurso

const usuarios = []

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    if (req.url == "/"){
        res.end("<h1>Página Principal</h1>")
        return
    }

    if (req.url == "/usuario" && req.method == "GET"){
        res.end(JSON.stringify(usuarios))
        return
    }

    if (req.url == "/usuario" && req.method == "POST"){
        usuarios.push({
            id: 1,
            nome: "João",
            idade: 13
        })
        res.end("Usuário criado")
        return
    }
    res.end("<h1>Olá Mundo</h1>")
})
//node --watch .\src\server.js
server.listen(3333)