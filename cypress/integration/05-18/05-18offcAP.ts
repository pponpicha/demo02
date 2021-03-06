import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';
import rec from '../../fixtures/addRecStrAcc.json'


export function offcAP_2(docCode:string, docType,edit) {
    let docTyp = docType
    it("OFFC-APPROVE 05-18",() =>{      
        cy.loginuserType('offc')
        cy.visit('http://localhost:4200')
        
        if(docTyp == 'rec'){
         cy.loginuserType('offcDes')
         cy.get('#pills-storehouse-tab').click()  
         cy.contains('05181').should('be.visible')
        }

        if(docTyp == 'str'){
            cy.loginuserType('offcDes')
            cy.visit('http://localhost:4200')
            cy.get('#pills-contact-tab').click()
            cy.contains('STR').should('be.visible')
        }
        
        // cy.contains(docCode).scrollIntoView()
        // cy.scrollTo(0, 100000)
        cy.contains(docCode).click({force : true})
        // cy.clickLink(docCode)

        if(edit == 'edit'){
            cy.get('[for="incorrect"]').click()
            cy.get('[formcontrolname="date"]').type(`${rec.recDate}{enter}`)
        }else{
           cy.get('[for="correct"]').click() 
        }                
        cy.get('[id="inputReason"]').type('ผลการพิจารณา จากเจ้าพนักงานสรรพสามิต')
        cy.contains('บันทึกผลการพิจารณา').click()
        cy.contains('ยืนยันการบันทึกผลการพิจารณา').should('be.visible')
        cy.get('.swal2-confirm').should('be.visible').click();          
    })
}