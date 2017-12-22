const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/alpha/v1-0/dashboard.html', function (req, res) {
  var testData = {
    first: 'Bob',
    second: 'Hope',
    third: 'John'
  }
  res.render('dashboard.html', {'data': testData})
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
  if (req.body.workreferencenumber === '') {
    res.render('alpha/v2-0/create-new-work.html', {validationWorkReferenceError: 'Enter the Work reference number', validationError: 'There was a problem'})
  } else if (req.body.promotername === '') {
    res.render('alpha/v2-0/create-new-work.html', {validationPromoterNameError: 'Enter the Promoter name', validationError: 'There was a problem'})
  } else if (req.body.promoteragent === '') {
    res.render('alpha/v2-0/create-new-work.html', {validationPromoterAgentError: 'Enter the Promoter agent', validationError: 'There was a problem'})
  } else {
    res.redirect('/alpha/v2-0/success.html')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
