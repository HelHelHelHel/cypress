/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    it("scroll element into view", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
        
    }); 
    it("drag and drop a dragable item", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});
    }); 
    it("doubleclick on element", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
        cy.get('#double-click').dblclick();
        
    }); 
    it("hold a click down", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
           expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
        
    }); 
})