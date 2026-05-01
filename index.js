const express = require('express')
const booksRouter = express.Router()

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

// загрузка файла с сервера
app.get('/downloadBooks', (req, res, next) => {
  res.download('./public/books.html', 'anotherBooksName', (err) => {
    console.log('File sent')
  }) // 1 параметр - ссылка на скачиваемый файл, 2 параметр - имя для файла при скачивании,  3 параметр - коллбек при успешной отправки файла на клиент;
})

app.put
app.post
app.delete

booksRouter.get('/', (req, res) => {
  res.send('Books')
})

booksRouter.get('/about', (req, res) => {
  res.send('About books')
})

// выставляем основной маршрут для роутера
app.use('/books', booksRouter)

// запуск сервера; 1 аргумент - номер порта, 2 аргумент - callback-функция при запуске сервера;
app.listen(5000, () => {
  console.log('Its started', new Date())
})
