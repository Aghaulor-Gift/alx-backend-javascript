const express = require('express');

const app = express();


app.use(express.json());


app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});


app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});


app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});


app.post('/login', (req, res) => {
  const { userName } = req.body;
  
  if (!userName) {
    return res.status(400).json({ error: 'username required'});
  }

  return res.json({ message: `Welcome ${userName}` });
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
