Feature: Verification of Common items for different pages

Scenario: Verify 'Home' page
    When I navigate to "Home" page
    And I clear all Cookies
    Then I should see that BreadCrumb is "Not displayed" for "Home" page

Scenario: Verify 'Vacancies' page
    When I select "Vacancies" sub-menu from Header
    Then I should see that BreadCrumb is "Displayed" for "Vacancies" page

Scenario: Verify 'Blog' page
    When I select "Blog" sub-menu from Header
    Then I should see that BreadCrumb is "Displayed" for "Blog" page

Scenario: Verify 'News' page
    When I select "News" sub-menu from Header
    Then I should see that BreadCrumb is "Displayed" for "News" page