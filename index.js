const express = require('express')
const app = express()
const port = 3600

app.get('/', (res, req) => req.send("Hello world!"))

app.listen(port, () => console.log(`Example listening on port ${port}`))