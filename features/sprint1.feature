Feature: Sprint-1
    Background: 
    Given User launches the Hotels website

    @TC-21
    Scenario Outline: Verify Verification message for invalid sign in credentials
    When User clicks on the "Sign in" link
    And User clicks on the Sign in button
    And User enters an invalid email address "%$%^$$@gmail.com"
    And User clicks on the Continue button
    Then User verifies that the error message "Enter an invalid email" is displayed