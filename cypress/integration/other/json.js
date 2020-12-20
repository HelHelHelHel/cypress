/// <reference types="Cypress" />

describe("JSON object", () => {
    it("json object examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);
    }); 
    
})