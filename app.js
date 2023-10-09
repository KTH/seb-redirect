const express           = require('express')
const bodyParser        = require('body-parser')
const ejs               = require('ejs')

// Route links
const redirectRoutes  = require('./routes/redirectRoutes')
const rootRoutes    = require('./routes/rootRoutes')

const PROXY_PATH_PREFIX = process.env.PROXY_PATH_PREFIX || '/';

// Express
const app = express()

// App Config
app.use(bodyParser.urlencoded({ extended: true }))

app.use(PROXY_PATH_PREFIX, express.static(__dirname))
app.set('view engine', 'ejs')

// Application specific route handlers
app.use(PROXY_PATH_PREFIX, redirectRoutes)
// General app route handlers
app.use(PROXY_PATH_PREFIX, rootRoutes)

// server is listening.....
app.listen(process.env.PORT || 3000, function () {
  const port = this.address().port
  console.log('seb-redirect is listening on port ' + port + '!')
})
