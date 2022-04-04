const HondaPage = require('../pageobjects/honda.page');
const InitPage = require('../pageobjects/init.page');
const SearchPage = require('../pageobjects/search.page')

describe('Looking at my new car', () => {

    it('Looking for the insight model', () => {
        InitPage.clickNewCarsButton();
        SearchPage.clickselectMakeDropDownBtn();
        SearchPage.clickSelectMakeHondaOption();
        SearchPage.clickFindYourNextCar();
        
        expect(HondaPage.verifyInsightCarIsDisplayed());
        });

    it('Insight model is not a miniVan(Van', () => {
        InitPage.clickNewCarsButton();
        SearchPage.clickselectMakeDropDownBtn();
        SearchPage.clickSelectMakeHondaOption();
        SearchPage.clickFindYourNextCar();
        HondaPage.clickAllVehicleTypesBtn();
        HondaPage.clickVehicleOption();
        
        expect(HondaPage.verifyInsightCarIsDisplayed()).isFalse;
        expect(HondaPage.verifyOddiseyCarIsDisplayed());
    });
});


