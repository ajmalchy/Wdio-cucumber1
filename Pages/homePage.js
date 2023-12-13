class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';
    travelersButtonLocator = '//button[@data-stid="open-room-picker"]'
    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    allChildDropdownLocators = '//select[@class="uitk-field-select"]';
    childrenNumberLocator = '//input[@id="traveler_selector_children_step_input-0"]';
    // functions to interact with the elements on homepage
    async clickSigninLinkLocator(){
        await $(this.signinLinkLocator).waitForClickable();
        await $(this.signinLinkLocator).click()
    }

    async clickSigninButtonLocator(){
        await $(this.signinButtonLocator).waitForDisplayed();
        await $(this.signinButtonLocator).waitForClickable();
        await $(this.signinButtonLocator).click();
    }

    async clickTravelersButton(){
        await $(this.travelersButtonLocator).waitForClickable();
        await $(this.travelersButtonLocator).click();
    }
    

    // problem below getChildrenNumberValue
    //   async getChildrenNumberValue() {
    //     await browser.pause(5000);

    //     await $(this.childrenNumberLocator).waitForDisplayed;
    //     const childrenNumberInput = await $(this.childrenNumberLocator);
    //     const numberOfChildrenText = await childrenNumberInput.getText();
    //     const actualChildrenNumber = parseInt(numberOfChildrenText);
    //     return actualChildrenNumber;
    // }
     
    async clickChildrenBtnPlus(){
        await $(this.childrenBtnPlusLocator).waitForClickable;
        await $(this.childrenBtnPlusLocator).click();
        await browser.pause(2000);
    }
    async clickChildrenBtnMinus(){
        await $(this.childrenBtnMinusLocator).waitForClickable;
        await $(this.childrenBtnMinusLocator).click();
        await browser.pause(2000);
    }

    
    async getVisibleChildrenDropdownCount(){
        // await browser.pause(10000);

        const dropdownElements = await $$(this.allChildDropdownLocators);
        return dropdownElements.filter((element) => element.isDisplayed()).length;
     }

    //  problem below isChildrenDropdownDisplayed()
 async isChildrenDropdownDisplayed() {
    const dropdownElements = await $$(this.allChildDropdownLocators);

    const dropdownElement = dropdownElements.find(async(element) => await element.isDisplayed());
    return dropdownElement;
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