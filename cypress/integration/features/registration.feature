Feature: Verification of Bloomenty Registration page

Scenario: Verify registration with valid credentials
    When I navigate to "Registration" page
    And I wait for "3" seconds
    And I press "Accept" button on the 'Cookies' page
    And I fill in the "First Name" field on the 'Registration' page with Correct data
    And I fill in the "Last Name" field on the 'Registration' page with Correct data
    And I fill in the "Nick Name" field on the 'Registration' page with Correct data
 
