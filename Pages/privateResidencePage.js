
class PrivateResidencePage{
    // locators of elements on ListYourHomePage
    
     textStep1of3Locator = '//div[text()="Step 1 of 3"]';
     increaseBedroomsLocator = '//button[@aria-label="Increase bedrooms"]';
     decreaseBedroomsLocator = '//button[@aria-label="Decrease bedrooms"]';

     increaseBathroomsLocator = '//button[@aria-label="Increase bathrooms"]';
     decreaseBathroomsLocator = '//button[@aria-label="Decrease bathrooms"]';
    
     nextBtnLocator = '//button[@id="propertyInfoNextBtn"]';

     textStep2of3Locator = '//div[text()="Step 2 of 3"]';

     textYourPlaceLocator = '//h1[contains(text(), "your place located")]';

     enterAddressFieldLocator = '//input[@id="locationTypeAhead"]';
    // functions to interact with the elements on ListYourHomePage
    }
    
    module.exports = new PrivateResidencePage;