const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/dist')))

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`))
