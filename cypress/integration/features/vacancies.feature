Feature: Verification of Bloomenty Vacancies page

Scenario: Verify 'Vacancies' dropdown on Vacancies page
    When I navigate to "Vacancies" page
    And I wait for "3" seconds
    And I press "Accept" button on the 'Cookies' page
    Then I should see that the data for 'Vacancies' dropdown are correct

# Scenario: Verify "Services" sub-menu from Header
#     When I navigate to "Vacancies" page 

