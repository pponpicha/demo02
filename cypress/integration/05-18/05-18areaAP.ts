import data from '../../fixtures/addExamption.json'

export function areaAP_3(docCode: string, docType,approve) {
    let docTyp = docType
    it("AREA-APPROVE 05-18", () => {
        cy.loginuserType('area')
        cy.visit('http://localhost:4200')
        if (docTyp == 'rec') {
            cy.loginuserType('areaDes')
            cy.get('#pills-storehouse-tab').click()
            cy.contains('05181').should('be.visible')
        }
        if (docTyp == 'str') {
            cy.loginuserType('areaDes')
            cy.visit('http://localhost:4200')
            cy.get('#pills-contact-tab').click()
            cy.contains('STR').should('be.visible')
        }
        if (docTyp == 'accExp') {
            cy.loginuserType('areaDes')
            cy.get('#pills-storehouse-tab').click()
            cy.contains('05181').should('be.visible')
        }
        
        cy.contains(docCode).scrollIntoView()
        // cy.scrollTo(0, 100000)

        cy.clickLink(docCode)

        if(approve == 'disAP'){
           cy.get('[for="disapprove"]').click() 
        }else{
           cy.get('[for="approve"]').click() 
        }        

        if (docTyp == 'exemp') {
            if(approve == 'disAP'){
                cy.get('[for="disapprove"]').click() 
             }else{
                cy.get('[for="approve"]').click() 
                cy.get('[formcontrolname="assign"]').type(`${data.assignName}{enter}`)
             }  
        
       }

       if (docTyp == 'accExp') {    
        cy.get('[formcontrolname="assign"]').type(`${data.assignNameStr}{enter}`)
       }

        cy.get('[id="inputReason"]').type('ผลการอนุมัติ จากสรรพสามิตพื้นที่')
        cy.contains('บันทึกผลการอนุมัติ').click()
        // cy.contains('ยืนยันการบันทึกผลการอนุมัติ').should('be.visible')   
        cy.get('.swal2-confirm').should('be.visible').click();
    })
}