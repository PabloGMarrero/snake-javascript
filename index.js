const express = require('express')
const app = express()
const port = 3600

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(port, () => console.log(`Example listening on port ${port}`))