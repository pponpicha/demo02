import data from '../fixtures/addExamption.json'
import rec from '../fixtures/addRecStrAcc.json'
import 'cypress-file-upload';


import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { offcinformOrigin_4 } from './05-18/offcAckExemption'
import { offcOriginAck_5 } from './05-18/offc-origin-ack'

describe("create 05-18/1 recieve", () => {

    beforeEach(() => {
        cy.loginuserType('cust')
    })

    it("create REC 05-18/1", () => {
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

        cy.get('.form-group > .btn-success').click()     
        cy.get('[class="btn btn-success ng-star-inserted"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
    
        offcAP_2(rec.strAccCode,'rec');
        areaAP_3(rec.strAccCode,'rec');

    // Cust do 05-18 untill status ENDORSE          
        offcinformOrigin_4(data.exempCode);

    // OFFC do 05-18 untill status ENDORSE
        offcOriginAck_5(data.exempCode,'offcDes');
   
})