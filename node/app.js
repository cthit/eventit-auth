const express = require("express")
var bodyParser = require('body-parser')
const app = express();

const port = 3040;

app.use(bodyParser.json({
    extended: false
}))


app.listen(port, () => console.log(`listening on ${port}`))

app.get('/', (req, res) => {
    res.send("danks memes")
})


app.post('/auth', (req, res) => {
    console.log(req.body.token)

    if (req.body.token == 'digit') {
        let data = {
            data: true
        }
        res.send(data)
    }else{
        let data = {
            data: false
        }
        res.send(data)
    }
    

})