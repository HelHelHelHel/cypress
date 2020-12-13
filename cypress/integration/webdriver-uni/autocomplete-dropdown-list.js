/// <reference types="Cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni", () => {
    it("select spedific product via autocomplete lis", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';
            if(prod === productToSelect) {
                $el.click()
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        })

    }); 
   
})