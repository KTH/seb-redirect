const express   = require('express')      
const router    = express.Router({mergeParams: true});

//redirect route
router.get('/redirect', function(req, res){
  res.render('redirect', { redirectURL: 'https://canvas.kth.se/courses/'+req.query.cid });
});

module.exports = router