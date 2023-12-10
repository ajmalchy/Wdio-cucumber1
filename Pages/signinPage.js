class Signinpage {
    // locators of elements on Homepage
    signinEmailFieldLocator = '#loginFormEmailInput';
    continueButtonLocator = '#loginFormSubmitButton';
    invalidEmailErrorLocator = '#loginFormEmailInput-error';


    // functions to interact with the elements on homepage
    async setValueOnSigninEmailField(invalidEmail){
        await $(this.signinEmailFieldLocator).setValue(invalidEmail);
        await browser.pause(5000);

    }
    async clickContinueButton(){
        await $(this.continueButtonLocator).click();
    }
    async invalidEmailErrorIsDisplayed(){
        await $(this.invalidEmailErrorLocator).isDisplayed();
    }
}

module.exports = new Signinpage;