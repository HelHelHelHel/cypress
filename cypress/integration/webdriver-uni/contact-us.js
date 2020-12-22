/// <reference types="Cypress" />

describe("Test contact us form via webdriveruni", () => {
    before(() => {
        cy.fixture('example.json').then((data) => {
            //this.data = data;
            globalThis.data = data;
        })
    })
    it("should be able to do a successful submission via contact us form", () => {
        //cypress code
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click() 
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type('hello');
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, 'hello', 'h1', 'Thank You for your Message!')
    }); 
    it("should not do a successful submission via contact us form as all field are reequired", () => {
        //cypress code
       // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
       cy.visit("http://webdriveruniversity.com")
       cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
    //    cy.get('[name="first_name"]').type(data.first_name);
    //     cy.get('[name="last_name"]').type(data.last_name);
    //     cy.get('textarea.feedback-input').type('hello there');
    //     cy.get('[type="submit"]').click();
    //     cy.get('body').contains('Error: all fields are required');
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", 'hello there', 'body', 'Error: Invalid email address')
    });
})