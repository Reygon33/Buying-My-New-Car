const Page = require('./page');

class HondaPage extends Page {

    get allVehicleTypesBtn () { return $('.filterSegment'); }

    get vehicleOption () { return $$('[data-[data-segment="Minivan/Van"]="honda"]')[0];}

    get insightCar () { return $('#Insight')}

    get oddiseyCar() { return $('#Odyssey')}

    clickAllVehicleTypesBtn() {
        this.allVehicleTypesBtn.click();
    }

    clickVehicleOption() {
        this.vehicleOption.click();
    }

    verifyInsightCarIsDisplayed() {
        return this.insightCar.isDisplayed;
    }

    verifyOddiseyCarIsDisplayed() {
        return this.oddiseyCar.isDisplayed;
    }
}

module.exports = new HondaPage();