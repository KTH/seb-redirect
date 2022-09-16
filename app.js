const express           = require('express')
const bodyParser        = require('body-parser')
const { proxyPath } = require('./routes/utils');
const ejs               = require('ejs')

// Route links
const redirectRoutes  = require('./routes/redirectRoutes')
const rootRoutes    = require('./routes/rootRoutes')

// Express
const app = express()

// App Config
app.use(bodyParser.urlencoded({ extended: true }))

// Tell monitoring system that application is up and running
app.get(proxyPath('_monitor'), (req, res) => {
  res.send("APPLICATION_STATUS: OK\n");
})

app.use(proxyPath(''), express.static(__dirname))
app.set('view engine', 'ejs')

// Use Routes
app.use(proxyPath(''), redirectRoutes)
app.use(rootRoutes)

// server is listening.....
app.listen(process.env.PORT || 3000, function () {
  const port = this.address().port
  console.log('seb-redirect is listening on port ' + port + '!')
})
