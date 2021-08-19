import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcAP_2(docCode:string, docType) {
    let docTyp = docType
    it("OFFC-APPROVE 05-18",() =>{      
        cy.loginuserType('offc')
        cy.visit('http://localhost:4200')
        
        if(docTyp == 'rec'){
         cy.get('#pills-storehouse-tab').click()           
        }

        cy.scrollTo(0, 100000) 
        cy.clickLink(docCode)
        cy.get('[for="correct"]').click()
        cy.get('[id="inputReason"]').type('ผลการพิจารณา จากเจ้าพนักงานสรรพสามิต')
        cy.get('.btn-success').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();  
    })

   
}