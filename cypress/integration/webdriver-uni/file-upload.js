/// <reference types="Cypress" />

describe("Test file upload via webdriveruni", () => {
    it("upload a file", () => {
       
        cy.visit("http://webdriveruniversity.com");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force:true})
        cy.fixture("wings.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent, 
                    fileName: "wings.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click()
    }); 
    it("upload no file", () => {
       
        cy.visit("http://webdriveruniversity.com");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force:true})
        cy.get("#submit-button").click()
    }); 
})