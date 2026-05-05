const express = require('express')
const booksRouter = express.Router()

const app = express()

const products = ['Apple', 'Pen', 'Computer']

// применение шаблонизатора "pug"
app.set('view engine', 'pug')
app.set('views', './views')

// промежуточная обработка на уровне приложения
app.use((req, res, next) => {
  console.log(
    'Date',
    new Date(),
    'Method',
    req.method,
    'URL',
    req.originalUrl,
    'IP',
    req.ip,
  )

  next()
})

app.use('/static', express.static(__dirname + '/public'))

app.get(
  '/',
  (
    req,
    res,
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

app.get('/blog', (req, res, next) => {
  res.redirect(301, '/')
})

// рендер шаблона "main.pug"
app.get('/main', (req, res, next) => {
  res.render('main', {
    title: 'Products',
    message: 'Products List',
    products: products,
  })
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

// промежуточная обработка для обработки ошибок
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send(err.stack)
})

// запуск сервера; 1 аргумент - номер порта, 2 аргумент - callback-функция при запуске сервера;
app.listen(5000, () => {
  console.log('Its started', new Date())
})
