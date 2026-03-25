console.log("Hello world!");

const express = require("express")
const app = express()


app.use(express.static("public")) //Necessario per gli assets statici (css, js, immagini)


app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/bacheca", (req, res) => {
    res.send("Bacheca")
})

app.listen(3000, () => {
  console.log("Server attivo su porta 3000")
})