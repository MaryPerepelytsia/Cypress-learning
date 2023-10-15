Feature: Verification of 'Farmers' page

Scenario: Verify default statuses for page elements
    When I navigate to 'Farmer form' page
    Then I should see that "Country input" element is "Disabled" for 'Farmer' form
    And I should see that "Achievement dropdown" element is "Disabled" for 'Farmer' form
    And I should see that "Subject input" element is "Disabled" for 'Farmer' form

  Scenario: Verify element availability for 'Supply-Ja'
    When I click "Yes" radiobutton for "Supply" section
    Then I should see that "Country input" element is "Enabled" for 'Farmer' form

  Scenario: Verify element availability for 'Supply-Nee'
    When I click "No" radiobutton for "Supply" section
    Then I should see that "Country input" element is "Disabled" for 'Farmer' form

  Scenario: Verify element availability for 'Sales market-Ja'
    When I click "Yes" radiobutton for "Sales market" section
    Then I should see that "Achievement dropdown" element is "Enabled" for 'Farmer' form

  Scenario: Verify element availability for 'Sales market-Nee'
    When I click "No" radiobutton for "Sales market" section
    Then I should see that "Achievement dropdown" element is "Disabled" for 'Farmer' form

  Scenario: Verify element availability for 'Become blogger-Ja'
    When I click "Yes" radiobutton for "Become blogger" section
    Then I should see that "Subject input" element is "Enabled" for 'Farmer' form

  Scenario: Verify element availability for 'Become blogger-Nee'
    When I click "No" radiobutton for "Become blogger" section
    Then I should see that "Subject input" element is "Disabled" for 'Farmer' form