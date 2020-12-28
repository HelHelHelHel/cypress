import Hompage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

describe("Test contact us form via webdriveruni", () => {
    const homepage_PO = new Hompage_PO();
    const contact_Us_PO = new Contact_Us_PO();
    before(() => {
        cy.viewport(550, 750);
        cy.fixture('example.json').then((data) => {
            //this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach(() => {
       
       homepage_PO.visitHomepage();
       homepage_PO.clickOn_ContactUs_Button();
    //   cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
    })
    it("should be able to do a successful submission via contact us form", () => {
        //cypress code
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        
        // cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        // cy.title().should('include', 'WebDriver');
        // cy.url().should('include', 'contactus');
        // cy.webdriverUni_ContactForm_Submission(
        //     Cypress.env("first_name"), 
        //     data.last_name, 
        //     data.email, 
        //     'hello', 
        //     'h1', 
        //     'Thank You for your Message!')
        
        contact_Us_PO.contactForm_Submission(
            Cypress.env("first_name"), 
            data.last_name, 
            data.email, 
            'hello', 
            'h1', 
            'Thank You for your Message!');
    }); 
    it("should not do a successful submission via contact us form as all field are reequired", () => {
        
        contact_Us_PO.contactForm_Submission(
            Cypress.env("first_name"), 
            data.last_name, 
            " ", 
            'hello', 
            'body', 
            'Invalid email address');
        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", 'hello there', 'body', 'Error: Invalid email address')
    });
})