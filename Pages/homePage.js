class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';
    travelersButtonLocator = '//button[@data-stid="open-room-picker"]'
    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    allChildDropdownLocators = '//select[@class="uitk-field-select"]';
    // functions to interact with the elements on homepage
    async clickSigninLinkLocator(){
        await $(this.signinLinkLocator).click()
    }

    async clickSigninButtonLocator(){
        await $(this.signinButtonLocator).click();
    }

    async clickTravelersButton(){
        await $(this.travelersButtonLocator).click();
    }

    async clickChildrenBtnPlus(){
        await $(this.childrenBtnPlusLocator).click();
        await browser.pause(5000);
    }
    async getVisibleChildrenDropdownCount(){
        const dropdownElements = await $$(this.allChildDropdownLocators);
        return dropdownElements.filter((element) => element.isDisplayed()).length;
     }

    async isButtonEnabled(buttonType){
        let buttonSelector;
        if (buttonType == 'Plus'){
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
        } else if (buttonType == 'Minus'){
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
        } 
        const buttonElement = await $(buttonSelector)
        return await buttonElement.isEnabled();
       
    }
}

module.exports = new Homepage;