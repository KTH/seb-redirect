import { proxyPath } from './utils';
const express = require('express')
const router = express.Router({ mergeParams: true })

router.get(proxyPath(''), function (req, res) {
  res.render('index')
})

//universal canvas route
router.get(proxyPath('redirect'), function (req, res) {
  res.render('redirect')
})

// universal404
router.get(proxyPath('404'), function (req, res) {
  res.render('fourOhFour')
})

// catchall for 404
router.get('*', function (req, res) {
  console.log('404ing, reason:')
  console.log(req.params)
  res.redirect(proxyPath('404'))
})

module.exports = router
