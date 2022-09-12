const express           = require('express')
const bodyParser        = require('body-parser')
const ejs               = require('ejs')

// Route links
const redirectRoutes  = require('./routes/redirectRoutes')
const rootRoutes    = require('./routes/rootRoutes')

// Express
const app = express()

// App Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSanitizer())
app.use('/', express.static(__dirname))
app.set('view engine', 'ejs')

// Use Routes
app.use('/', redirectRoutes)
app.use(rootRoutes)

// server is listening.....
app.listen(process.env.PORT || 3000, function () {
  const port = this.address().port
  console.log('SEB-RD is listening on port ' + port + '!')
})
