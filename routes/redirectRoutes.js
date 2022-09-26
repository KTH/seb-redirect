const { proxyPath } = require('./utils');
const express   = require('express')      
const router    = express.Router({mergeParams: true});

//index route
router.get(proxyPath(''), function(req, res){
  res.render('index');
});

//redirect route
router.get(proxyPath('redirect'), function(req, res){
  res.render('redirect', { redirectURL: 'https://canvas.kth.se/courses/'+req.query.cid });
});

module.exports = router