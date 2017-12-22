const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/alpha/v1-0/sign-in.html', function (req, res) {
  switch (req.body.email) {
    case 'promo@sm.com' :
      res.redirect('/alpha/v1-0/promoter-planner-home.html')
      break
    case 'ha@sm.com' :
      res.redirect('/alpha/v1-0/ha-officer-home.html')
      break
    default:
      res.render('alpha/v1-0/sign-in.html', {validationError: 'Invalid login credentials.'})
  }
})

router.post('/alpha/v2-0/create-new-work.html', function (req, res) {
  res.redirect('/alpha/v2-0/success.html')
})

router.get('/alpha/v2-0/edit-work-record', function (req, res) {
  var data = {'data' :{
      'work-reference-number' : 'CT0224443466',
      'promoter-name' : 'JOHN CARRINGTON',
      'promoter-agent' : 'FM CONWAY LTD',
      'highway-authority' : 'Highway Authority',
      'usrn' : '08400189',
      'description-of-work' : 'Digging up the road' }
    }
  res.render('alpha/v2-0/edit-work-record.html', data)
})

router.post('/alpha/v2-0/edit-work-record.html', function (req, res) {
  res.redirect('/alpha/v2-0/edit-success.html')
})

router.get('/hello-world', function (req, res) {
  res.render('hello-world.html', {'message' : 'Hello world'});
});

// Add your routes here - above the module.exports line

module.exports = router
