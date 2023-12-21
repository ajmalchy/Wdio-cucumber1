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

    @TC-28
    Scenario Outline: Verify Child-age dropdowns are same as number of Children selected

    When User clicks on the Travelers button
    And User selects Children as 2
    Then User verifies that Children-age dropdowns are 2
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 6
    Then User verifies that Children-age dropdowns are 6
    And User verifies that the "Plus" button is "disabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 5
    Then User verifies that Children-age dropdowns are 5
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 0
    # problem below 1 line
    Then User verifies that Children-age dropdowns are NOT displayed
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "disabled"

    @TC-31
    Scenario Outline: Verify language can be changed successfully

    
    When User clicks on the English language
    And User selects "Español (Estados Unidos)" in the language dropdown
    And User clicks on the "Save" button
    Then User verifies that the selected language "Español" is displayed on the Homepage
    When User clicks on the Español language
    And User selects "English (United States)" in the language dropdown
    And User clicks on the "Guardar" button
    Then User verifies that the selected language "English" is displayed on the Homepage