Feature: Verification of 'Farmers' page

Scenario: Verify input field availability on the 'Farmer form' page by default
    When I navigate to "Farmer form" page
    Then I should see that "Country" input field is "Disabled" for 'Farmer' form

Scenario: Verify input field availability on the 'Farmer form' page for "Ja" radiobutton
    When I click 'Ja' for 'Country' radiobutton 
    Then I should see that "Country" input field is "Enabled" for 'Farmer' form

Scenario: Verify input field availability on the 'Farmer form' page for "Nee" radiobutton
    When I click 'Nee' for 'Country' radiobutton 
    Then I should see that "Country" input field is "Disabled" for 'Farmer' form