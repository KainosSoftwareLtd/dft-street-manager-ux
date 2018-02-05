const express = require('express')
const router = express.Router()
const sessionUtil = require('./session-util')
const demoData = require('./demo-data')

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

router.get('/alpha/v3-0/ha-officer/assessment-decision', function (req, res) {
  res.render('alpha/v3-0/ha-officer/assessment-decision')
})

router.post('/alpha/v3-0/ha-officer/assessment-decision', function (req, res) {
  switch (req.body.options) {
    // case 'Grant' :
    //   res.redirect('/alpha/v3-0/ha-officer/grant-confirmation')
    //   break
    case 'Grant with changes' :
      res.redirect('/alpha/v3-0/ha-officer/grant-confirmation')
      break
    // case 'Revoke':
    //   res.redirect('/alpha/v3-0/ha-officer/revoke')
    //   break
    default:
      res.render('alpha/v3-0/ha-officer/assessment-decision.html', {validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  }
})

router.get('/alpha/v3-0/ha-officer/permit-application-screen4', function (req, res) {
  res.render('alpha/v3-0/ha-officer/permit-application-screen4')
})

router.post('/alpha/v3-0/ha-officer/screen1-check-answers', function (req, res) {
  req.session.data['TmDecisionChanged'] = true
  res.redirect('assessment-decision.html')
})

router.get('/alpha/v3-0/ha-officer/permit-application-screen3', function (req, res) {
  res.render('alpha/v3-0/ha-officer/permit-application-screen3')
})

router.post('/alpha/v3-0/ha-officer/permit-application-screen3', function (req, res) {
  req.session.data['PermitConditionsChanged'] = true
  res.redirect('assessment-decision.html')
})

router.post('/alpha/v3-0/promoter-planner/screen1-check-answers', function (req, res) {
  if (req.body.promotername === '') {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationPromoterNameError: 'Enter the Promoter name', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.usrn === '') {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationUsrnError: 'Enter the USRN', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.roadcategorygroup === undefined) {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationRoadCategoryError: 'Select the Road category', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.highwayauthority === '') {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationHighwayAuthorityError: 'Enter the Highway authority', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.workreferencenumber === '') {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationWorkReferenceError: 'Enter the Work reference number', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.startdateday === null) {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationStartDateError: 'Enter the Start date', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.duration === '') {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationDurationError: 'Enter the Duration', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.trafficmanagementtypegroup === undefined) {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationTMTypeError: 'Select the Traffic management type', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.workcategorygroup === undefined) {
    res.render('alpha/v3-0/promoter-planner/permit-application-screen1.html', {validationWorkCategoryError: 'Select the Work category', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else {
    req.session.data['Screen1Complete'] = true
    res.redirect('screen1-check-answers.html')
  }
})

router.post('/alpha/v3-0/promoter-planner/screen2-check-answers', function (req, res) {
  req.session.data['Screen2Complete'] = true
  res.render('alpha/v3-0/promoter-planner/screen2-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/screen3-check-answers', function (req, res) {
  req.session.data['Screen3Complete'] = true
  res.render('alpha/v3-0/promoter-planner/conditions-check-answers.html')
})

router.post('/alpha/v3-0/promoter-planner/screen4-check-answers', function (req, res) {
  req.session.data['Screen4Complete'] = true
  res.render('alpha/v3-0/promoter-planner/screen4-check-answers.html')
})

router.get('/alpha/v3-0/promoter-planner/permit-application-screen1', function (req, res) {
  var prefill = {'data': {
    'promotername': 'OpenReach',
    'highwayauthority': 'Westminster',
    'usrn': '34793825',
    'roadcategorygroup': '0'}}

  res.render('alpha/v3-0/promoter-planner/permit-application-screen1', prefill)
})

router.get('/alpha/v3-0/promoter-planner/permit-application-screen2', function (req, res) {
  var prefill = {'data': {
    'promoter-agent': 'Kier'}}

  res.render('alpha/v3-0/promoter-planner/permit-application-screen2', prefill)
})

router.post('/alpha/v3-0/promoter-planner/permit-application-assessment', function (req, res) {
  req.session.data['Screen5Complete'] = true
  res.render('alpha/v3-0/promoter-planner/grant-permit-application.html')
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

// V4 Routes

router.post('/alpha/v4-0/sign-in.html', function (req, res) {
  switch (req.body.email) {
    case 'promo@sm.com' :
      res.redirect('/alpha/v4-0/promoter-planner/dashboard.html')
      break
    case 'ha@sm.com' :
      res.redirect('/alpha/v4-0/ha-officer/dashboard.html')
      break
    default:
      res.render('alpha/v4-0/sign-in.html', {validationError: 'Invalid login credentials.'})
  }
})

router.post('/alpha/v4-0/promoter-planner/search.html', function (req, res) {
  switch (req.body.wrn_search) {
    case 'CT0224443466' :
      sessionUtil.setSessionData(req.session.data, demoData[0])
      res.redirect('/alpha/v4-0/task-list-page.html')
      break
    default:
      res.render('alpha/v4-0/promoter-planner/dashboard', {validationError: 'Not recognised, please check and retype.'})
  }
})

router.post('/alpha/v4-0/ha-officer/search.html', function (req, res) {
  switch (req.body.wrn_search) {
    case 'CT0938475839' :
      sessionUtil.setSessionData(req.session.data, demoData[1])
      res.redirect('/alpha/v4-0/ha-officer/task-list-page.html')
      break
    default:
      res.render('alpha/v4-0/ha-officer/dashboard', {validationError: 'Not recognised, please check and retype.'})
  }
})

router.post('/alpha/v4-0/promoter-planner/screen1-check-answers', function (req, res) {
  if (req.body.promotername === '') {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationPromoterNameError: 'Enter the Promoter name', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.usrn === '') {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationUsrnError: 'Enter the USRN', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.roadcategorygroup === undefined) {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationRoadCategoryError: 'Select the Road category', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.highwayauthority === '') {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationHighwayAuthorityError: 'Enter the Highway authority', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.workreferencenumber === '') {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationWorkReferenceError: 'Enter the Work reference number', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.startdateday === null) {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationStartDateError: 'Enter the Start date', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.duration === '') {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationDurationError: 'Enter the Duration', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.trafficmanagementtypegroup === undefined) {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationTMTypeError: 'Select the Traffic management type', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else if (req.body.workcategorygroup === undefined) {
    res.render('alpha/v4-0/promoter-planner/permit-application-screen1.html', {validationWorkCategoryError: 'Select the Work category', validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  } else {
    req.session.data['Screen1Complete'] = true
    res.redirect('screen1-check-answers.html')
  }
})

router.post('/alpha/v4-0/promoter-planner/screen2-check-answers', function (req, res) {
  req.session.data['Screen2Complete'] = true
  res.render('alpha/v4-0/promoter-planner/screen2-check-answers.html')
})

router.post('/alpha/v4-0/promoter-planner/screen3-check-answers', function (req, res) {
  req.session.data['Screen3Complete'] = true
  res.render('alpha/v4-0/promoter-planner/conditions-check-answers.html')
})

router.post('/alpha/v4-0/promoter-planner/screen4-check-answers', function (req, res) {
  req.session.data['Screen4Complete'] = true
  res.render('alpha/v4-0/promoter-planner/screen4-check-answers.html')
})

router.post('/alpha/v4-0/ha-officer/screen3-check-answers', function (req, res) {
  req.session.data['Screen3Complete'] = true
  res.render('alpha/v4-0/ha-officer/conditions-check-answers.html')
})

router.post('/alpha/v4-0/promoter-planner/permit-application-on-site', function (req, res) {
  req.session.data['Screen6Complete'] = true
  res.render('alpha/v4-0/promoter-planner/confirm-on-site.html')
})

router.post('/alpha/v4-0/promoter-planner/permit-application-assessment', function (req, res) {
  req.session.data['Screen5Complete'] = true
  res.render('alpha/v4-0/promoter-planner/grant-permit-application.html')
})

router.get('/alpha/v4-0/ha-officer/assessment-decision', function (req, res) {
  res.render('alpha/v4-0/ha-officer/assessment-decision')
})

router.post('/alpha/v4-0/ha-officer/assessment-decision', function (req, res) {
  switch (req.body.options) {
    // case 'Grant' :
    //   res.redirect('/alpha/v4-0/ha-officer/grant-confirmation')
    //   break
    case 'Grant with changes' :
      res.redirect('/alpha/v4-0/ha-officer/grant-confirmation')
      break
    // case 'Revoke':
    //   res.redirect('/alpha/v4-0/ha-officer/revoke')
    //   break
    default:
      res.render('alpha/v4-0/ha-officer/assessment-decision.html', {validationError: 'There was an error on your page. Correct any required fields and submit again.'})
  }
})

// Add your routes here - above the module.exports line

module.exports = router
