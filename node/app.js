const express = require("express")

const app = express();

const port = 3040;

app.listen(port, () => console.log(`listening on ${port}`))

app.get('/', (req, res) => {
    res.send("danks memes")
})

app.get('/auth', (req, res) => {
    console.log(req.query.token)

    let data = {data: false}

    res.send(data)
})