class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';


    // functions to interact with the elements on homepage
    async clickSigninLinkLocator(){
        await $(this.signinLinkLocator).click()
    }

    async clickSigninButtonLocator(){
        await $(this.signinButtonLocator).click();
    }
}

module.exports = new Homepage;