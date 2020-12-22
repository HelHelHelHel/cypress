/// <reference types="Cypress" />

describe("Test contact us form via automationTestStore", () => {
    before(() => {
        cy.fixture("userDetail").as('user')
    })
    it("should be able to do a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click().then((linkName) => {
            cy.log("name of the link is: " + linkName.text())
        });
        //a[contains(@href, 'contact')]
        //cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('hello');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    }); 
   
})