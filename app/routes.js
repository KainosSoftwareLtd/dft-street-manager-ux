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
  'description-of-work-group': 'Minor',
  'contact-details': '004455500000',
  'commercially-sensitive-group': 'No'}
}

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// V1 Routes

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

// V2 Routes

router.post('/alpha/v2-0/sign-in.html', function (req, res) {
  switch (req.body.email) {
    case 'promo@sm.com' :
      res.redirect('/alpha/v2-0/dashboard.html')
      break
    case 'ha@sm.com' :
      res.redirect('/alpha/v2-0/dashboard-ha.html')
      break
    default:
      res.render('alpha/v2-0/sign-in.html', {validationError: 'Invalid login credentials.'})
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
    res.redirect('/alpha/v2-0/work-record-check-answers.html')
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
    res.redirect('/alpha/v2-0/edit-check-answers.html')
  }
})

router.post('/alpha/v2-0/map-search', function (req, res) {
  res.render('alpha/v2-0/map-search-results.html', {searchDetails: req.body.search[0]})
})

router.post('/alpha/v2-0/map-search-ha', function (req, res) {
  res.render('alpha/v2-0/map-view-works-ha.html', {searchDetails: req.body.search[0]})
})

// V3 Routes

router.post('/alpha/v3-0/sign-in.html', function (req, res) {
  switch (req.body.email) {
    case 'promo@sm.com' :
      res.redirect('/alpha/v3-0/promoter-planner/dashboard.html')
      break
    case 'ha@sm.com' :
      res.redirect('/alpha/v3-0/ha-officer/dashboard.html')
      break
    default:
      res.render('alpha/v2-0/sign-in.html', {validationError: 'Invalid login credentials.'})
  }
})

router.post('/alpha/v3-0/ha-officer/assessment-decision.html', function (req, res) {
  switch (req.body.options) {
    case 'Accept' :
      res.redirect('/alpha/v3-0/ha-officer/accept-confirmation.html')
      break
    case 'Accept with conditions' :
      res.redirect('/alpha/v3-0/ha-officer/accept-with-conditions.html')
      break
    case 'Reject':
      res.redirect('/alpha/v3-0/ha-officer/reject.html')
      break
    case 'Add comment':
      res.redirect('/alpha/v3-0/ha-officer/comments.html')
      break
    default:
      res.render('alpha/v3-0/ha-officer/assessment-decision.html', {validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  }
})

router.post('/alpha/v3-0/promoter-planner/screen1-check-answers', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/screen1-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/screen2-check-answers', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/screen2-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/screen3-check-answers', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/conditions-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/screen4-check-answers', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/screen4-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/permit-application-assessment', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/grant-permit-application.html')
})

router.post('/alpha/v3-0/promoter-planner/attach-to-record.html', function (req, res) {
  res.redirect('/alpha/v3-0/promoter-planner/attach-to-record-check.html')
})

router.post('/alpha/v3-0/promoter-planer/map-search-results', function (req, res) {
  res.render('/alpha/v3-0/promoter-planner/map-search-results.html', {searchDetails: req.body.search[0]})
})

router.get('/alpha/v3-0/promoter-planner/work-record', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/work-record.html', data)
})

router.get('/alpha/v3-0/promoter-planner/withdraw-work-record', function (req, res) {
  res.render('alpha/v3-0/promoter-planner/withdraw-work-record.html', data)
})
// Add your routes here - above the module.exports line

module.exports = router
