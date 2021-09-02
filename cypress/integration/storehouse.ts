import data from '../fixtures/addExamption.json'
import store from '../fixtures/addStore.json'
import 'cypress-file-upload';

import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';

describe("create storehouse-use",() => {
    let strNo;

    beforeEach(() => {
        cy.loginuserType('cust')
    })

    it("go to menu ขออนุญาตสถานที่เก็บสินค้า",() =>{
      
        cy.visit('http://localhost:4200/worklist')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ขออนุญาตสถานที่เก็บสินค้า')

        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)

        cy.get('#selectStorehouseName').type(`${store.strName}{enter}`)
        // cy.get('[formcontrolname="name"]').type(`${store.strNameother}`)
        // cy.get('[formcontrolname="building"]')
        // cy.get('[formcontrolname="houseNo"]')
        // cy.get('[formcontrolname="villageNo"]')
        // cy.get('[formcontrolname="lane"]')
        // cy.get('[formcontrolname="province"]')
        // cy.get('[formcontrolname="district"]')
        // cy.get('[formcontrolname="subDistrict"]')
        // cy.get('[formcontrolname="zipCode"]')
        cy.get(':nth-child(1) > app-datepicker > .input-group > .form-control').type(`${data.startDate}{enter}`)
        cy.get(':nth-child(2) > app-datepicker > .input-group > .form-control').type(`${data.endDate}{enter}`)
        // cy.get('[data-test=titleName]').type('')

        cy.get('[id="browseFile0"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile1"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile2"]').attachFile(`${data.browse.file}`) 

        cy.get('.btn-success').click()
        cy.contains('ย้อนกลับ').should('be.visible')
        cy.get('[class="btn btn-success"]').click()
        cy.get('.swal2-confirm').click()
        cy.get('.swal2-popup').should('be.visible')
        // cy.contains('OK').click()       
    })   
    // offcAP_2(store.strNo,'str');
    // areaAP_3(store.strNo,'str');
})