import express from 'express'

const app = express();
const PORTA = 3000;
let itens = [1, 2, 3, 4];
app.get('/itens', (req, res) => {
  const itens = [
    {id: 1, nome: 'Joao'},
    {id: 2, nome: 'Ana' }
  ]
  res.json(itens);
});

app.post('/itens', (req, res)  => {
  const novoItem = req.body;
console.log('Novo item recebido:', novoItem);
res.status(201).json({mensagem: 'Item criado com sucesso!', item: novoItem

})
})



app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})




