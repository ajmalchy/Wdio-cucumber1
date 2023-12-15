const { Given, When, Then } = require("@wdio/cucumber-framework");
const homePage = require("../Pages/homePage");
const signinPage = require("../Pages/signinPage");
const { expect } = require("chai");


Given(/^User launches the Hotels website$/, async () => {
    await browser.url('https://www.hotels.com/')
});

When(/^User clicks on the "Sign in" link$/, async () => {
    await homePage.clickSigninLinkLocator();
});

When(/^User clicks on the Sign in button$/, async () => {
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


When(/^User clicks on the Travelers button$/, async () => {
    await homePage.clickTravelersButton();
})


// problem below
// When(/^User selects Children as (\d+)$/, async (childrenCount) => {
//     // Code to select the specified number of children
//     for (let i = 0; i < childrenCount; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 2$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 2; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 6$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 4; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 5$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 1; i++) {
//         await homePage.clickChildrenBtnMinus()
//     }
// });

// When(/^User selects Children as 0$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 4; i++) {
//         await homePage.clickChildrenBtnMinus()
//     }
// });

// problem below
When(/^User selects Children as (\d+)$/, async (childrenCount) => {
    // Code to select the specified number of children
    let previousChildrenCount;

    previousChildrenCount = await homePage.getChildrenNumberValue();
    console.log(previousChildrenCount);
    if (previousChildrenCount == 0) {
        for (let i = 0; i < childrenCount; i++) {
            await homePage.clickChildrenBtnPlus();
        }
    } else if
        (previousChildrenCount < childrenCount) {
        const toIncrease = childrenCount - previousChildrenCount;
        for (let i = 0; i < toIncrease; i++) {
            await homePage.clickChildrenBtnPlus();
        }
    }
    else {
        const toDecrease = previousChildrenCount - childrenCount;
        for (let i = 0; i < toDecrease; i++) {
            await homePage.clickChildrenBtnMinus();
        }

    }
    

});




Then(/^User verifies that Children-age dropdowns are (\d+)$/, async (expectedDropdownCount) => {
    const actualDropdownCount = await homePage.getVisibleChildrenDropdownCount();
    expect(actualDropdownCount).to.equal(expectedDropdownCount);
});

Then(/^User verifies that Children-age dropdowns are NOT displayed$/, async () => {
    const isDropdownDisplayed = await homePage.isChildrenDropdownDisplayed();
    expect(await isDropdownDisplayed).to.be.false;

});

// Then(/^User verifies that the "(Plus|Minus)" button is enabled$/, async (buttonType) => {
//     const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
//     expect(isButtonEnabled).to.be.true;
// });

// Then(/^User verifies that the "(Plus|Minus)" button is disabled$/, async (buttonType) => {
//     const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
//     expect(isButtonEnabled).to.be.false;
// });

// advance code for btn state
Then(/^User verifies that the "(Plus|Minus)" button is "(enabled|disabled)"$/, async (buttonType, btnState) => {
    const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
    let expectedState;
    if (expectedState = btnState == "enabled") {
        expect(isButtonEnabled).to.be.true;
    } else
        if (expectedState = btnState == "disabled") {
            expect(isButtonEnabled).to.be.false;
        }

});