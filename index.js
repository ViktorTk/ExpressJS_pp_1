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
  res.send(products)
})

app.put
app.post
app.delete

// запуск сервера; 1 аргумент - номер порта, 2 аргумент - callback-функция при запуске сервера;
app.listen(5000, () => {
  console.log('Its started', new Date())
})

// закончил урок 2.3
