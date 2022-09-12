const express   = require('express')      
const router    = express.Router({mergeParams: true});

//index route
router.get('/', function(req, res){
  res.render('index');
});

//redirect route
router.get('/redirect', function(req, res){
  // console.log(req.query.cid)
  // res.render('redirect', { courseID: 'https://canvas.kth.se/courses/'+'req.query.cid' });
  res.render('redirect', { urlStem: 'https://canvas.kth.se/courses/'+req.query.cid });
});

// router.post('/redirect',function (req, res) {
//   if (Object.keys(req.query).length === 0) {
//     var courseID = req.sanitize(req.body.cid);
//     console.log(req.body.courseID)
//   } else {
//     var courseID = req.query.cid
//     // .split(",")
//     // console.log('arr'+Array.isArray(courseID))
//   }
//   var patt = /^[0-9]*$/
//   if (patt.test(courseID)) {
//     console.info(`Generating SEB Config for CourseID: ${courseID}.`);

//     // res.set({'Content-Disposition': 'attachment; filename='+filename,'Content-type': 'text/seb'});
//   } else {
//     res.status(400).send('Bad Request')
//   } 
// });

module.exports = router