/// <reference types="Cypress" />

describe("Test dropdowns via webdriveruni", () => {
    it("select specific values via dropdown list", () => {
        
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true})
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')//based on value
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS');//based on text itself
        cy.get('#dropdowm-menu-2').select('Maven').contains('Maven');
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
    }); 
    
})