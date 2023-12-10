Feature: Login

    Scenario: Verify empty login fields are enabled
        Given I am on facebook homepage
        Then I verify login email field is enabled
        And I verify login password field is enabled
        And I verify login button is enabled
        