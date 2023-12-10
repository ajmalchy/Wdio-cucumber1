const { Given, When, Then } = require("@wdio/cucumber-framework");
const homePage = require("../Pages/homePage");
const signinPage = require("../Pages/signinPage");


Given(/^User launches the Hotels website$/, async () => {
    await browser.url('https://www.hotels.com/')
});

When(/^User clicks on the "Sign in" link$/, async () => {
    await homePage.clickSigninLinkLocator();
});

When(/^User clicks on the Sign in button$/,async () => {
    await homePage.clickSigninButtonLocator();
});

When(/^User enters an invalid email address "([^"]*)"$/, async (invalidEmail) => {
    await signinPage.setValueOnSigninEmailField(invalidEmail);
});

When(/^User clicks on the Continue button$/, async () => {
    await signinPage.clickContinueButton();
});

Then(/^User verifies that the error message "([^"]*)" is displayed$/, async (errorMessage) => {
    await signinPage.invalidEmailErrorIsDisplayed();
});