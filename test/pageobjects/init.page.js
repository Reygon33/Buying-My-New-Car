const Page = require('./page');

class InitPage extends Page {

    get newCarsButton () { return $('.newCars'); }

    clickNewCarsButton() {
        this.newCarsButton.click();
    }
}

module.exports = new InitPage();
