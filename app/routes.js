//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/mfa-configuration-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var mfaConfiguration = req.session.data['mfa-configuration']
  
    // Check whether the variable matches a condition
    if (mfaConfiguration == "Turn on"){
      // Send user to next page
      res.redirect('/manage-console/v1/mfa/turn-on-mfa')
    } else if (mfaConfiguration == "Turn off"){
      // Send user to ineligible page
      res.redirect('/manage-console/v1/mfa/turn-off-mfa')
    }
  })

  // Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/turn-on-mfa-answer-manage', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var turnOffMfa = req.session.data['turn-off-mfa']
  
    // Check whether the variable matches a condition
    if (turnOffMfa == "Yes"){
      // Send user to next page
      res.redirect('/manage-console/v1/mfa/dashboard-turn-on-banner')
    } else if (turnOffMfa == "No"){
      // Send user to ineligible page
      res.redirect('/manage-console/v1/manage-dashboard')
    }
  })

  // Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/turn-off-mfa-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var turnOffMfa = req.session.data['turn-off-mfa']
  
    // Check whether the variable matches a condition
    if (turnOffMfa == "Yes"){
      // Send user to next page
      res.redirect('/manage-console/v1/mfa/dashboard-turn-off-banner')
    } else if (turnOffMfa == "No"){
      // Send user to ineligible page
      res.redirect('/manage-console/v1/manage-dashboard')
    }
  })

  // Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/service-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var serviceType = req.session.data['service-type']

  // Check whether the variable matches a condition
  if (serviceType == "Standard"){
    // Send user to next page
    res.redirect('#')
  } else if (serviceType == "ID-only"){
    // Send user to ineligible page
    res.redirect('/manage-console/v1/create-new-service/name-description')
  }
})

  // Run this code when a form is submitted to 'juggling-balls-answer'
  router.post('/policy-type-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var policyType = req.session.data['policy-type']
  
    // Check whether the variable matches a condition
    if (policyType == "Organisation"){
      // Send user to next page
      res.redirect('/manage-console/v1/manage-policies/organisation-conditions/add-condition')
    } else if (policyType == "User"){
      // Send user to ineligible page
      res.redirect('/manage-console/v1/manage-policies/user-conditions/add-condition')
    }
  })

    // Run this code when a form is submitted to 'juggling-balls-answer'
    router.post('/org-condition-type-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var conditionType = req.session.data['org-condition-type']
    
      // Check whether the variable matches a condition
      if (conditionType == "Establishment"){
        // Send user to next page
        res.redirect('/manage-console/v1/manage-policies/organisation-conditions/establishment-type')
      } else if (conditionType == "Category"){
        // Send user to ineligible page
        res.redirect('#')
      } else if (conditionType == "Organisation"){
        // Send user to ineligible page
        res.redirect('#')
      }else if (conditionType == "Status"){
        // Send user to ineligible page
        res.redirect('#')
      }else if (conditionType == "No condition"){
        // Send user to ineligible page
        res.redirect('/manage-console/v1/manage-policies/organisation-conditions/policy-name')
      }
    })