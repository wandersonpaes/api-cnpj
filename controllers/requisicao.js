module.exports = app => {
    app.get('/requisicao', (req, res) => res.send('Você está na rota de requisição e está realizando um GET'))

    app.post('/requisicao', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de requisição e está realizando um POST')
    })
}