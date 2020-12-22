const express = require('express')
// import person from './routes/personRoute.js'
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//routes
 app.use('/tinder/person',require('./routes/personRoute'));


const port = process.env.PORT || 4001;

app.listen(port, ()=> console.log(`server run on http://localhost:${port}`));