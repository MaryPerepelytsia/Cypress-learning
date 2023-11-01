Feature: Verification of Bloomenty Login page

Scenario: Verify 'Login' button from the Home page
    When I navigate to "Home" page
    And I wait for "3" seconds
    And I press "Cancel" button on the 'Cookies' page
    And I press 'Login' button on the 'Home' page
    Then I should see that 'Login' page is displayed
    And I should see that 'Login' page URL is correct
    And I should see that "Email" field is displayed
    And I should see that "Password" field is displayed

# Scenario: Verify login with empty credentials
#     When I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'No symbols before At' input data for 'Email' field
#     When I clear all Cookies
#     And I navigate to "Login" page
#     And I wait for "3" seconds
#     And I press "Accept" button on the 'Cookies' page
#     When I fill in the 'Email' field on the 'Login' page with "No symbols before At" data
#     And I fill in 'Password' field on the 'Login' page with "Correct" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'No symbols after Dot' input data for 'Email' field
#     When I fill in the 'Email' field on the 'Login' page with "No symbols after Dot" data 
#     And I fill in 'Password' field on the 'Login' page with "Correct" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'No Dot' input data for 'Email' field
#     When I fill in the 'Email' field on the 'Login' page with "No Dot" data 
#     And I fill in 'Password' field on the 'Login' page with "Correct" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'No At' input data for 'Email' field
#     When I fill in the 'Email' field on the 'Login' page with "No At" data 
#     And I fill in 'Password' field on the 'Login' page with "Correct" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'Space before Password' input data for 'Password' field
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data 
#     And I fill in 'Password' field on the 'Login' page with "Space before Password" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed 

# Scenario: Verify 'Space after Password' input data for 'Password' field
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data 
#     And I fill in 'Password' field on the 'Login' page with "Space after Password" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed  

# Scenario: Verify 'Password in Caps Lock' input data for 'Password' field
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data 
#     And I fill in 'Password' field on the 'Login' page with "Password in Caps Lock" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed

# Scenario: Verify 'Password without last symbol' input data for 'Password' field
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data 
#     And I fill in 'Password' field on the 'Login' page with "Password without last symbol" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed  

# Scenario: Verify 'Password without first symbol' input data for 'Password' field
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data 
#     And I fill in 'Password' field on the 'Login' page with "Password without first symbol" data
#     And I press 'Login' button on the 'Login' page
#     Then I should see that 'Invalid email address or password!' alert is displayed 

# Scenario: Verify login with valid credentials
#     When I fill in the 'Email' field on the 'Login' page with "Correct" data
#     And I fill in 'Password' field on the 'Login' page with "Correct" data
#     # And I press 'Login' button on the 'Login' page
#     And I press 'Enter' key on the keyboard
#     Then I should see that 'My profile' title is displayed

Scenario: Verify "Capital letters" input data for 'Email' field
#   When I press 'Log out' button on the 'My profile' page
    Given I clear all Cookies
    And I refresh the page
    And I navigate to "Login" page
    And I wait for "3" seconds
    And I click 'Accept' button
    When I fill in the 'Email' field on the 'Login' page with "Capital letters" data
    And I fill in 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see that 'My profile' title is displayed

Scenario: Verify 'Delete' key works correctly
    When I press 'Logout' button on the 'My profile' page
    And I press 'Login' button on the 'Home' page
    And I input 'АВСD' symbols in the 'Email' field on the 'Login' page
    And I shift the cursor "left" in the "Email" field
    And I shift the cursor "left" in the "Email" field
    And I press 'Delete' key on the keyboard while cursor is in the 'Email' field
    And I press 'Delete' key on the keyboard while cursor is in the 'Email' field
    Then I should see that 'АВ' symbols is displayed in the 'Email' field on the 'Login' page

Scenario: Verify 'Backspace' key works correctly
    When I input 'АВСD' symbols in the 'Email' field on the 'Login' page
    And I press "Backspace" key on the keyboard while cursor is in the "Email" field
    And I press "Backspace" key on the keyboard while cursor is in the "Email" field
