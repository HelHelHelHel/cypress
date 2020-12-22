/// <reference types="Cypress" />

describe("iterate over elements", () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path=').contains("Hair Care").click();
    })
    it("log information of all hair care products", () => {
        cy.selectProduct('Curls to straight Shampoo'); 
    }); 
    it("add another product to basket", () => {
        cy.selectProduct('Seaweed Conditioner');
    }); 
    it("add another product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    }); 
    
})