import express from 'express'
import routes from './Routes/batalha.js'

const port = 3000

const app = express()

app.use(express.json())
app.use('/game',routes)


app.listen(port,() => {
    console.log("Tou ligado pai")
})