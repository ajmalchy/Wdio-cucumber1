const { Given, Then } = require("@wdio/cucumber-framework");



Given(/^I am on faceboook homepage$/, async function () {
    await browser.url('/');
})

Then(/^I verify login email field is enabled$/, async function () {
    await browser.url('/');
})