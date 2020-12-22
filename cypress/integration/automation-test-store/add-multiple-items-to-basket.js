describe("Add multiple times to basket", () => {
    before(() => {
        cy.fixture("products.json").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path=').contains("Hair Care").click();
    })
    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach((element) => {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click()
    });

})