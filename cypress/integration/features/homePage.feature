Feature: Verification of Bloomenty Home page

  Scenario: Verify Header on the Home page
    # Given I navigate to 'Home' page
    # And I wait for 3 seconds
    # And I click 'Accept' button
    Then I should see that 'Bloomenty' icon is present 
    And I should see that 'Diensten' menu is present 
    And I should see that 'Encyclopedie' menu is present
    # And I should see that 'Mijn Bloomenty' menu is present
    And I should see that 'Over ons' menu is present
    And I should see that 'ENTER' button is present 