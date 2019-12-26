const express = require('express')
const app = express()
const port = 3600

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Example listening on port ${port}`));