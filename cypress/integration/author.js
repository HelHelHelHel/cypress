// /// <reference types="Cypress" />


// /// <reference types="Cypress" />

// describe("Test the dealersearch in current live app", () => {
//     it("find a dealer in Dresden who sells used cars", () => {
//         cy.visit("http://localhost:3001/app/dccsearch/vw-de/de");
//        // cy.get('#bannerAcceptButton').click();
//        cy.get('#customButton').click();
//        cy.get('.StyledInput-sc-irus8s')
//         .wait(1000)
//         .type("Dresden")
//         .wait(2000)
//         .type('{enter}')
//         cy.wait(500);
//         cy.get('.StyledActionButton-sc-1drw0xj').click()
//         cy.get(':nth-child(3) > .StyledLabel-sc-tap8jg > .StyledFocusWrapper-sc-1oeagwv > :nth-child(2) > .StyledTextComponent-sc-hqqa9q').contains('Gebrauchtwagen').click();
//         cy.get('.irhVGy > :nth-child(1)').click();
//         cy.url().should('include', 'Gebrauchtwagen')
//         cy.get('.sc-bIqbHp > :nth-child(1) > :nth-child(1)').find('[type="radio"]').eq(1).check({force:true});
//         cy.get('a[href$="probefahrt/de?dealerId=77976&sourceID=dcc"]').first().click({force:true}).wait(2000);
//         cy.get(':nth-child(16) > .StyledContainer-sc-13ur9q2 > :nth-child(1) > .kugatG > :nth-child(1) > .sc-jqIZGH > .sc-cZBZkQ > .sc-gbzWSY > #preloader-car').click();
//         cy.wait(500);
//         cy.get(':nth-child(3) > .sc-kkbgRg > :nth-child(1) > .kKcusk > :nth-child(2) > :nth-child(1) > .kFbori > :nth-child(1) > .StyledContainer-sc-13ur9q2 > :nth-child(1) > .kugatG > :nth-child(1) > .sc-jqIZGH > .sc-cZBZkQ > .sc-gbzWSY > #preloader-car').click();
//         cy.wait(500);
//         cy.get(':nth-child(2) > :nth-child(1) > .kkvvVW > :nth-child(1) > .sc-cBrjTV > .sc-iCwjlJ > .StyledLabel-sc-12cr2ii > .StyledFocusWrapper-sc-1nt8p46 > .StyledRadioWrapper-sc-1n1yaaw > .StyledRadioInner-sc-1ow7h3g').click();
//         cy.wait(500);
//         cy.get('.StyledButton-sc-1gcpt77').click();
//         cy.wait(500);
//         cy.get('.StyledButton-sc-1gcpt77').click();
//         cy.get(':nth-child(2) > .StyledFieldset-sc-16gvfsk > .StyledOverflowWrapper-sc-mfnmbg > .StyledContainer-sc-18harj2 > .StyledChildWrapper-sc-1d21nde > .sc-bIqbHp > :nth-child(1) > .StyledLabel-sc-12cr2ii > .StyledFocusWrapper-sc-1nt8p46 > .StyledRadioWrapper-sc-1n1yaaw > .StyledRadioInner-sc-1ow7h3g').click();
//         cy.get(':nth-child(4) > .StyledLabel-sc-12cr2ii > .StyledFocusWrapper-sc-1nt8p46').click();
//         cy.get(':nth-child(4) > .sc-jxGEyO > .StyledLabel-sc-pw4kdr > .StyledInput-sc-7giqxg').type('hel');
//         cy.get(':nth-child(5) > .sc-jxGEyO > .StyledLabel-sc-pw4kdr > .StyledInput-sc-7giqxg').type('pel');
//         cy.get(':nth-child(6) > .StyledFieldset-sc-16gvfsk > .StyledOverflowWrapper-sc-mfnmbg > .StyledContainer-sc-18harj2 > .StyledChildWrapper-sc-1d21nde > .sc-bIqbHp > :nth-child(1) > .StyledLabel-sc-12cr2ii > .StyledFocusWrapper-sc-1nt8p46').click();
//         cy.get(':nth-child(7) > .sc-jxGEyO > .StyledLabel-sc-pw4kdr > .StyledInput-sc-7giqxg').type('hel@gmail.com');
//         cy.get('.StyledCheckboxCheckmark-sc-nf8hca').click();
//         cy.get('.StyledButton-sc-1gcpt77').click();
//     }); 
   
// })