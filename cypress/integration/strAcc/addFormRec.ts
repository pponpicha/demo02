import data from '../../fixtures/addExamption.json'
import rec from '../../fixtures/addRecStrAcc.json'

export function createAccRec() { 

    it("create REC 05-18/1", () => {
        cy.loginuserType('cust')
        cy.visit('http://localhost:4200')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ภส.05-18/1')
       
        cy.get('[id="receiveRadio"]').check({force : true})
        cy.get('[class="btn"]').click()

        cy.get('[class="modal-content"]').should('be.visible')
        cy.get('[id="searchValue"]').type(`${data.exempCode}`,{force: true})
        
        cy.get('[class="btn btn-info"]').click()
        cy.get('.form-check-input').click()
        cy.get('.modal-footer > .btn-success').click()
        cy.get('[formcontrolname="date"]').type(`${rec.recDate}{enter}`)

        // cy.get('.form-group > .btn-success').click().then(() => {
        //     cy.get('[class="btn btn-success ng-star-inserted"]').click();  
        //     cy.contains('ยืนยันการยื่นแบบ ภส.05-18/1').should('be.visible')  
        //     cy.get('.swal2-confirm').click() 
        //     cy.contains('ยื่นแบบสำเร็จ').should('be.visible')          
        //     cy.contains('OK').click();  
        // })    
        
        cy.get('.form-group > .btn-success').click();
        cy.get('[class="btn btn-success ng-star-inserted"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
        
    })     
}