const express = require('express')
const router = express.Router()

var data = {'data': {
  'workreferencenumber': 'CT0224443466',
  'promotername': 'JOHN CARRINGTON',
  'promoteragent': 'FM CONWAY LTD',
  'highway-authority': 'Highway Authority',
  'usrn': '08400189',
  'start-day': '28',
  'start-month': '03',
  'start-year': '2017',
  'end-day': '30',
  'end-month': '03',
  'end-year': '2017',
  'date-flexible-group': 'Yes',
  'description-of-work': 'Digging up the road',
  'description-of-work-group': 'Carriageway resurfacing',
  'contact-details': '004455500000',
  'commercially-sensitive-group': 'No'}
}

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

router.get('/alpha/v2-0/work-record', function (req, res) {
  res.render('alpha/v2-0/work-record.html', data)
})

router.get('/alpha/v2-0/edit-work-record', function (req, res) {
  res.render('alpha/v2-0/edit-work-record.html', data)
})

router.post('/alpha/v2-0/edit-work-record.html', function (req, res) {
  if (req.body.workreferencenumber === '') {
    res.render('alpha/v2-0/edit-work-record.html', {validationWorkReferenceError: 'Enter the Work reference number', validationError: 'There was a problem'})
  } else if (req.body.promotername === '') {
    res.render('alpha/v2-0/edit-work-record.html', {validationPromoterNameError: 'Enter the Promoter name', validationError: 'There was a problem'})
  } else if (req.body.promoteragent === '') {
    res.render('alpha/v2-0/edit-work-record.html', {validationPromoterAgentError: 'Enter the Promoter agent', validationError: 'There was a problem'})
  } else {
    res.redirect('/alpha/v2-0/edit-success.html')
  }
})

router.get('/hello-world', function (req, res) {
  res.render('hello-world.html', {'message': 'Hello world'})
})

router.post('/alpha/v2-0/map-search', function (req, res) {
  res.render('alpha/v2-0/map-search-results.html', {searchDetails: req.body.search[0]})
})

// Add your routes here - above the module.exports line

module.exports = router
