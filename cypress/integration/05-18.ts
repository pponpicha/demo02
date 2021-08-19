import data from '../fixtures/addExamption.json'
import 'cypress-file-upload';
import { createForm_1 } from './05-18/addForm';
import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { offcinformOrigin_4 } from './05-18/offcAckExemption'
import { offcOriginAck_5 } from './05-18/offc-origin-ack'

describe("create 05-18", () => {

    beforeEach(() => {
        cy.loginuserType('cust')
    })

    it("go to menu 05-18", () => {
        cy.visit('http://localhost:4200')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ภส.05-18')
        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
    })

    createForm_1();
    offcAP_2(data.exempCode,'exemp');
    areaAP_3(data.exempCode,'exemp');
    offcinformOrigin_4(data.exempCode);
    offcOriginAck_5(data.exempCode,'offc');
    
   
})