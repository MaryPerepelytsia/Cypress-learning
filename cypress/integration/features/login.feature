Feature: Verification of Bloomenty Cookies page

Scenario: Verify 'Login' button from the Home page
    When I navigate to 'Home' page
    And I wait for 3 seconds
    And I press 'Cancel' button on the 'Cookies' page
    And I press 'Login' button on the 'Home' page
    Then I should see that 'Login' page is displayed
    And I should see that 'Login' page URL is correct
    And I should see that 'Email' field is displayed
    And I should see that 'Password' field is displayed

Scenario: Verify login with empty credentials
    When I press 'Login' button on the 'Login' page
    Then I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed

Scenario: Verify login with valid credentials
    When I fill in 'Login' field
    And I fill in 'Password' field
    And I press 'Login' button on the 'Login' page
    Then I should see that 'My profile' title is displayed

Scenario: Verify 'No symbols before At' input data for 'Email' field
    When I clear all Cookies
    And I navigate to 'Login' page
    And I press 'Accept' button on the 'Cookies' page
    And I fill in the 'Email' field on the 'Login' page with 'No symbols before At' data 
    And I fill in 'Password' field
    And I press 'Login' button on the 'Login' page
    Then I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed

Scenario: Verify 'No symbols after Dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with 'No symbols after Dot' data 
    And I fill in 'Password' field
    And I press 'Login' button on the 'Login' page
    Then I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed

Scenario: Verify 'No Dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with 'No Dot' data 
    And I fill in 'Password' field
    And I press 'Login' button on the 'Login' page
    Then I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed

Scenario: Verify 'No At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with 'No Dot' data 
    And I fill in 'Password' field
    And I press 'Login' button on the 'Login' page
    Then I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed



