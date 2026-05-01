const express = require('express')

const app = express() // its working

const products = ['Apple', 'Pen', 'Computer']

app.get(
  '/',
  (
    req, // request
    res, // response
    next, // функция промежуточной обработки
  ) => {
    res.send('its working')
  },
)
app.get('/products', (req, res, next) => {
  console.log('Page', req.query.page)
  res.json({ products })
})

app.get('/products/:id', (req, res, next) => {
  if (products[req.params.id]) {
    res.json(products[req.params.id])
  } else {
    res.status(403).send('Product not found')
  }
})

app.put
app.post
app.delete

// запуск сервера; 1 аргумент - номер порта, 2 аргумент - callback-функция при запуске сервера;
app.listen(5000, () => {
  console.log('Its started', new Date())
})
