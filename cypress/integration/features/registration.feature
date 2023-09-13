Feature: Verification of Bloomenty Registration page

Scenario: Verify Placeholders on Registration page
    When I navigate to "Registration" page
    And I wait for "3" seconds
    And I press "Accept" button on the 'Cookies' page
    Then I should see that Placeholders are correct for Four input fields on the 'Registration' page

Scenario: Verify registration with valid credentials
    When I navigate to "Registration" page
    And I fill in six registration input fields
    # And I wait for "3" seconds
    # And I press "Accept" button on the 'Cookies' page
    # And I fill in the "First Name" field on the 'Registration' page with Correct data
    # And I fill in the "Last Name" field on the 'Registration' page with Correct data
    # And I fill in the "Nick Name" field on the 'Registration' page with Correct data
    And I accept all registration rules