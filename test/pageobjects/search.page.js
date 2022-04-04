const Page = require('./page');

class SearchPage extends Page {

    get selectMakeDropDownBtn () { return $('.mmSelectSlot .mmyzSearchSelectedMake'); }

    get selectMakeHondaOption () { return $$('[data-make="honda"]')[0];}

    get findYourNextCar () { return $('.ButtonGreen.findYourCar')}

    clickselectMakeDropDownBtn() {
        this.selectMakeDropDownBtn.click();
    }

    clickSelectMakeHondaOption() {
        this.selectMakeHondaOption.click();
    }

    clickFindYourNextCar() {
        this.findYourNextCar.click();
    }
}

module.exports = new SearchPage();