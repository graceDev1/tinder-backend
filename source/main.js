import express from 'express';


const app = express()

app.use(express.json())

const port = process.env.PORT || 4001;

app.listen(port, ()=> console.log(`server run on http://localhost:${port}`));