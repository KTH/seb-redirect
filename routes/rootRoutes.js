const express = require('express')
const router = express.Router({ mergeParams: true })

router.get('/', function (req, res) {
  res.render('index')
})

// Tell monitoring system that application is up and running
router.get('/_monitor', (req, res) => {
  res.send("APPLICATION_STATUS: OK\n");
})

// universal404
router.get('/404', function (req, res) {
  res.render('fourOhFour')
})

// catchall for 404
router.get('*', function (req, res) {
  const PROXY_PATH_PREFIX = process.env.PROXY_PATH_PREFIX || '';
  res.redirect(`${PROXY_PATH_PREFIX}/404`);
})

module.exports = router
