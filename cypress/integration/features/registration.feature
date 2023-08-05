Feature: Verification of Bloomenty Registration page

Scenario: Verify '' field the Registration page
    When I navigate to "Registration" page
    And I press 'Accept' button on the 'Cookies' page
    Then I fill in the 'Nick Name' field on the 'Registration' page with Correct data
 
