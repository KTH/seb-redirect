const express   = require('express')      
const router    = express.Router({mergeParams: true});

//index route
router.get('/', function(req, res){
  res.render('index');
});

//redirect route
router.get('/redirect', function(req, res){
  res.render('redirect', { redirectURL: 'https://canvas.kth.se/courses/'+req.query.cid });
});

module.exports = router