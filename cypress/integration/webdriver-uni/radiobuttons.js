/// <reference types="Cypress" />

describe("Test contact us form via webdriveruni", () => {
    before(function() {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true})
    })
    it("should be able to do a successful submission via contact us form", () => {
        cy.get('#radio-buttons > input[value="blue"]').check()
    }); 
    it("validate the states of specific radiobuttons", () => {
        cy.get('input[value="lettuce"]').should('not.be.checked')
        //cy.get('[value="cabagge"]').should('be.disabled');
        cy.get('input[value="pumpkin"]').should('be.checked');
        cy.get('input[value="lettuce"]').check().should('be.checked');
        cy.get('input[value="pumpkin"]').should('not.be.checked')
        cy.get('#radio-buttons-selected-disabled > :nth-child(3)').should('be.disabled')
    }); 
})