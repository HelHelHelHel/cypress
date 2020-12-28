import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'
describe("Add multiple times to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    before(() => {
        cy.fixture("products.json").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    })
    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductToBasket();
        // globalThis.data.productName.forEach((element) => {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click()
    });

})