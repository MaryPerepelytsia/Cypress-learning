Feature: Verification of Bloomenty Registration page

Scenario: Verify '' field the Registration page
    When I navigate to "Registration" page
    And I press 'Accept' button on the 'Cookies' page
    And I fill in the 'First Name' field on the 'Registration' page with Correct data
    And I fill in the 'Last Name' field on the 'Registration' page with Correct data
    And I fill in the 'Nick Name' field on the 'Registration' page with Correct data
 
