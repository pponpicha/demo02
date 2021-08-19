import data from '../../fixtures/addExamption.json'

export function areaAP_3(docCode:string,docType) {     
    let docTyp = docType
    it("AREA-APPROVE 05-18",() =>{         
        cy.loginuserType('area')  
        cy.visit('http://localhost:4200')
        if(docTyp == 'rec'){
            cy.get('#pills-storehouse-tab').click()        
           }
        cy.scrollTo(0, 100000) 
        
        cy.clickLink(docCode)
        cy.get('[for="approve"]').click()
        cy.get('[id="inputReason"]').type('ผลการพิจารณา จากสรรพสามิตพื้นที่')
        cy.get('.btn-success').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();  
    })
}