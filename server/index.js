const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server started on port ${port}`))
