console.log("Hello world!");

const express = require("express")
const app = express()


app.use(express.static("public")) //Necessario per gli assets statici (css, js, immagini)

const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "Dolce soffice perfetto per la colazione",
    immagine: "/images/ciambellone.jpeg",
    tags: ["dolce", "colazione"]
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto: "Snack croccante e alternativo",
    immagine: "/images/cracker-barbabietola.jpeg",
    tags: ["snack", "salato"]
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Ricetta semplice e golosa",
    immagine: "/images/pane-fritto-dolce.jpeg",
    tags: ["dolce", "tradizione"]
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto: "Primo piatto colorato e saporito",
    immagine: "/images/pasta-barbabietola.jpeg",
    tags: ["primo", "vegetariano"]
  },
  {
    titolo: "Pasta paesana",
    contenuto: "Piatto rustico e ricco di sapore",
    immagine: "/images/pasta-paesana.jpeg",
    tags: ["primo", "tradizione"]
  }
]

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

app.listen(3000, () => {
  console.log("Server attivo su porta 3000")
})