const express = require('express');
const axios = require('axios');
const app = express();

const cors = require('cors');
app.use(cors());

const conversionsHistory = [];

app.get('/convert', async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const amount = req.query.amount;

  const rates = {
    USD: { BRL: 5.2, EUR: 0.91 },
    BRL: { USD: 0.19, EUR: 0.17 },
  };

  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Definir todos os parâmetros' })
  };

  try {
    const response = await axios.get('https://api.exchangerate.host/convert'
      , {
        params: {
          from,
          to,
          amount
        }
      });

    const conversionRate = rates[from] && rates[from][to];

    if (!conversionRate) {
      return res.status(400).json({ error: 'Conversão não permitida' })
    }
    const convertedValue = parseFloat(amount) * conversionRate;

    conversionsHistory.push(({
      from,
      to,
      original_amount: amount,
      converted_amount: convertedValue,
      date: new Date().toISOString()
    }));

    console.log(conversionsHistory)



    return res.status(200).json({
      message: 'Conversão realizada!',
      from,
      to,
      original_amount: amount,
      converted_amount: convertedValue
    });



  } catch (error) {
    return res.status(500).json({ error: 'Erro ao realizar a conversão!' })
  }


})

app.listen(3001, () => {
  console.log('http://localhost:3001/convert')
});