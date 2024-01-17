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
  if (mfaConfiguration == "Turn on") {
    // Send user to next page
    res.redirect('/manage-console/v1/mfa/turn-on-mfa')
  } else if (mfaConfiguration == "Turn off") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/mfa/turn-off-mfa')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/turn-on-mfa-answer-manage', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var turnOffMfa = req.session.data['turn-off-mfa']

  // Check whether the variable matches a condition
  if (turnOffMfa == "Yes") {
    // Send user to next page
    res.redirect('/manage-console/v1/mfa/dashboard-turn-on-banner')
  } else if (turnOffMfa == "No") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-dashboard')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/turn-off-mfa-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var turnOffMfa = req.session.data['turn-off-mfa']

  // Check whether the variable matches a condition
  if (turnOffMfa == "Yes") {
    // Send user to next page
    res.redirect('/manage-console/v1/mfa/dashboard-turn-off-banner')
  } else if (turnOffMfa == "No") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-dashboard')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/service-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var serviceType = req.session.data['service-type']

  // Check whether the variable matches a condition
  if (serviceType == "Standard") {
    // Send user to next page
    res.redirect('#')
  } else if (serviceType == "ID-only") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/create-new-service/name-description')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/policy-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var policyType = req.session.data['policy-type']

  // Check whether the variable matches a condition
  if (policyType == "Organisation") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/add-condition')
  } else if (policyType == "User") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/add-condition')
  }
})

// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/policy-type-answer-v2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var policyType = req.session.data['policy-type']

  // Check whether the variable matches a condition
  if (policyType == "Organisation") {
    // Send user to next page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/organisation')
  } else if (policyType == "User") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/email-address')
  }
})


// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/policy-type-answer-v6', function (req, res) {

  // Make a variable and give it a variable 
  var policyType = req.session.data['policy-type']

  // If a selection isn't made rerender the form with an error message
  if (!policyType) {
    res.render('/manage-console/v6/manage-service-access/create-policy/policy-type', {
      showError: true
    });

    // If the form submits with organsaition, redirect to the organisations screen
  } else if (policyType == "Organisation") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/organisations')

    // If the form submits with user redirect to the user screen
  } else if (policyType == "User") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/user-rules/email-address')
  }
});

// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/email-address-v6', function (req, res) {

    // If the user clicks on 'Continue' it wlll through an error
    res.render('/manage-console/v6/manage-service-access/create-policy/user-rules/email-address', {
      showError: true
    });

});

// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/organisations-v6', function (req, res) {

  // Make a variable and give it a variable 
  var organisations = req.session.data['selected-organisations']

  // If a selection isn't made rerender the form with an error message
  if (!organisations) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/organisations', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (organisations == "Organisation") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-organisations')

    // If the form submits with user redirect to the user screen
  }
});

// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/change-organisations-v6', function (req, res) {

  // Make a variable and give it a variable 
  var organisations = req.session.data['selected-organisations']

  // If a selection isn't made rerender the form with an error message
  if (!organisations) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/organisations', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (organisations == "Organisation") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-organisations')

    // If the form submits with user redirect to the user screen
  }
});

router.post('/organisation-roles-v6', function (req, res) {

  // Make a variable and give it a variable 
  var roles = req.session.data['selected-roles']

  // If a selection isn't made rerender the form with an error message
  if (!roles) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/roles', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (roles == "Roles") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-roles')

    // If the form submits with user redirect to the user screen
  }
});

router.post('/organisation-change-roles-v6', function (req, res) {

  // Make a variable and give it a variable 
  var roles = req.session.data['selected-roles']

  // If a selection isn't made rerender the form with an error message
  if (!roles) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/change-role', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (roles == "Roles") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-roles')

    // If the form submits with user redirect to the user screen
  }
});

router.post('/organisation-name-policy-v6', function (req, res) {

  // Make a variable and give it a variable 
  var name = req.session.data['name-policy']

  // If a selection isn't made rerender the form with an error message
  if (!name) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/policy-name', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (name == "Name") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/review-policy')

    // If the form submits with user redirect to the user screen
  }
});




// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/organisation-selected-roles-v6', function (req, res) {

  // Make a variable and give it a variable 
  var roles = req.session.data['selected-roles']

  // If a selection isn't made rerender the form with an error message
  if (!roles) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-roles', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (roles == "Roles") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/policy-name')

    // If the form submits with user redirect to the user screen
  }
});

// Run this code when a form is submitted to 'policy type answer for version 2'
router.post('/selected-organisations-v6', function (req, res) {

  // Make a variable and give it a variable 
  var organisations = req.session.data['selected-organisations']

  // If a selection isn't made rerender the form with an error message
  if (!organisations) {
    res.render('/manage-console/v6/manage-service-access/create-policy/organisation-rules/selected-organisations', {
      showError: true
    });

    // If the form submits with the id, redirect to the next screen
  } else if (organisations == "Organisation") {
    res.redirect('/manage-console/v6/manage-service-access/create-policy/organisation-rules/roles')

    // If the form submits with user redirect to the user screen
  }
});


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/org-condition-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['org-condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Establishment") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/establishment-type')
  } else if (conditionType == "Category") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/organisation-category')
  } else if (conditionType == "Organisation") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/organisation-id')
  } else if (conditionType == "Status") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/organisation-status')
  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/organisation-conditions/policy-name')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/org-condition-type-answer-v2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['org-condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Establishment") {
    // Send user to next page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/establishment-type')
  } else if (conditionType == "Category") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/organisation-category')
  } else if (conditionType == "Organisation") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/organisation-id')
  } else if (conditionType == "Status") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/organisation-status')

  } else if (conditionType == "Establishment", "Category", "Organisation", "Status") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/establishment-type')


  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/organisation-conditions/policy-name')
  }
})


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/user-condition-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Permission") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/permission-level')
  } else if (conditionType == "Email") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/email-address')
  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/policy-name')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/user-condition-type-answer-v2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Permission") {
    // Send user to next page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/permission-level')
  } else if (conditionType == "Email") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/email-address')
  } else if (conditionType == "Permission", "Email") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/permission-level')
  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/policy-name')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/permission-level-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var permissionLevel = req.session.data['permission-level']

  // Check whether the variable matches a condition
  if (permissionLevel == "End user") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/add-another-condition')
  } else if (permissionLevel == "Approver") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/create-policy/user-conditions/add-another-condition')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/permission-level-answer-v2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var permissionLevel = req.session.data['permission-level']

  // Check whether the variable matches a condition
  if (permissionLevel == "End user") {
    // Send user to next page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/email-address')
  } else if (permissionLevel == "Approver") {
    // Send user to ineligible page
    res.redirect('/manage-console/v2/manage-policies/create-policy/user-conditions/email-address')
  }
})


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/change-permission-level-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var permissionLevel = req.session.data['permission-level']

  // Check whether the variable matches a condition
  if (permissionLevel == "End user") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/change-policy/user-change-policy')
  } else if (permissionLevel == "Approver") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/user-change-policy')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/add-condition-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['add-org-condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Establishment") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/organisation-conditions/establishment-type')
  } else if (conditionType == "Category") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/organisation-conditions/organisation-category')
  } else if (conditionType == "Organisation") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/organisation-conditions/organisation-id')
  } else if (conditionType == "Status") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/organisation-conditions/organisation-status')
  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/organisation-conditions/org-change-policy')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/add-user-condition-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var conditionType = req.session.data['add-user-condition-type']

  // Check whether the variable matches a condition
  if (conditionType == "Permission") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/user-conditions/permission-level')
  } else if (conditionType == "Email") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/user-conditions/email-address')
  } else if (conditionType == "No condition") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/user-change-policy')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/add-permission-level-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var permissionLevel = req.session.data['permission-level']

  // Check whether the variable matches a condition
  if (permissionLevel == "End user") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/user-conditions/add-another-condition')
  } else if (permissionLevel == "Approver") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/change-policy/add-condition/user-conditions/add-another-condition')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/remove-policy-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var removePolicy = req.session.data['remove-policy']

  // Check whether the variable matches a condition
  if (removePolicy == "yes") {
    // Send user to next page
    res.redirect('/manage-console/v1/manage-policies/remove-policy/policies-banner')
  } else if (removePolicy == "no") {
    // Send user to ineligible page
    res.redirect('/manage-console/v1/manage-policies/view-policies/organisation-policy')
  }
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v6/review-policy', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addPolicy = req.session.data['add-policy']

  // Check whether the variable matches a condition
  if (addPolicy == "yes") {

    res.cookie("policy", "success-created", {
      maxAge: 5000,
    });
    // Send user to next page
    res.redirect('/manage-console/v6/manage-service-access/service-access-removed')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v6/remove-policy-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var removePolicy = req.session.data['remove-policy']
  
      // If the form submits with the id, redirect to the next screen
    if (removePolicy == "Yes") {

    res.cookie("policy", "success", {
      maxAge: 5000,
    });
    // Send user to next page
    res.redirect('/manage-console/v6/manage-service-access/service-access-removed')
  }  if (removePolicy == "no") {
    // Send user to ineligible page
    res.redirect('/manage-console/v6/manage-service-access/view-policies/organisation-policy')
  }  
   })

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v6/review-organisation-policy', function (req, res) {

  // No value is being passed 

  res.cookie("policy", "success", {
    maxAge: 5000,
  });
  // Send user to next page
  res.redirect('/manage-console/v6/manage-service-access/create-policy/new-organisation-created')
});

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v6/review-user-policy', function (req, res) {

  // No value is being passed 

  res.cookie("policy", "success", {
    maxAge: 5000,
  });
  // Send user to next page
  res.redirect('/manage-console/v6/manage-service-access/create-policy/new-user-created')
});