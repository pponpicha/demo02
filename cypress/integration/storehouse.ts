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

        // cy.get('[data-test="code"]').type(`${store.strName}{enter}`)
        cy.get('[data-test="code"]').type(`${store.strOther}{enter}`)
        cy.get('[formcontrolname="name"]').type(`${store.otherName}{enter}`)

        cy.get('[formcontrolname="building"]').type(`${store.building}`)
        cy.get('[formcontrolname="houseNo"]').type(`${store.houseNo}`)  
        cy.get('[formcontrolname="villageNo"]').type(`${store.villageNo}`)  
        cy.get('[formcontrolname="lane"]').type(`${store.lane}`)  
        cy.get('[formcontrolname="road"]').type(`${store.road}`)     
        cy.get('[formcontrolname="province"]').type(`${store.province}{enter}`)
        cy.get('[formcontrolname="district"]').type(`${store.district}{enter}`)
        cy.get('[formcontrolname="subDistrict"]').type(`${store.subDistrict}{enter}`)
        // cy.get('[formcontrolname="zipCode"]').type(`${store.zipCode}{enter}`)

        cy.get('.col-md-4 > .input-group > .form-control').type(`${data.startDate}{enter}`)
        cy.get('.col-md-5 > .input-group > .form-control').type(`${data.endDate}{enter}`)
        cy.get('[data-test=titleName]').type(`${store.titleName}{enter}`)
        cy.get('[data-test=firstName]').type(`${store.firstName}{enter}`)
        cy.get('[data-test=lastName]').type(`${store.lastName}{enter}`)

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