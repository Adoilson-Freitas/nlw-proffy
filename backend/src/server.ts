import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  return res.json({
    nome: "Adoilson",
    idade: "24"
  })
})

app.listen(3333);


