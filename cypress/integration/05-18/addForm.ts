/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function createForm_1() {
    it("created 05-18", () => {
        cy.visit('http://localhost:4200/exemption/add')
        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
        // cy.get('[formcontrolname="originType"]').type(`${data.originType.customs}{enter}`)
        // cy.get('[formcontrolname="customs"]').type(`${data.originType.customsName}{enter}`)
        let row = 1
        cy.get('[class="btn"]').click().then(() => {
            cy.get('[data-test="productType"]').should('be.visible')
            // cy.loginuserType('cust')
            cy.get('[data-test="productType"]').type(`${data.goods.groupCode}{enter}`)
            // cy.get('[data-test="productType"]').type(`${data.goods.groupCode}{enter}`)
            cy.get('[class="btn btn-info"]').click()
            cy.contains('พิกัดสินค้า').should('be.visible')
            cy.get('[scope="row"]').log("row :" + row).contains(1).click()
            cy.get('[style="display: flex; border: 0;"] > .form-control').type(`${data.goods.goodsVolume}`)
        })

        cy.get('[formcontrolname="destinationType"]').type(`${data.destination.storehouse}{enter}`)
        // cy.get('[formcontrolname="dutyfree"]').type(`${data.destination.dutyfreeName}{enter}`)
        cy.get('[formcontrolname="storehouse"]').type(`${data.destination.storehouseName}{enter}`)
        cy.get(':nth-child(1) > app-datepicker > .input-group > .form-control').type(`${data.startDate}{enter}`)
        cy.get(':nth-child(2) > app-datepicker > .input-group > .form-control').type(`${data.endDate}{enter}`)
        cy.get('[formcontrolname="transportBy"]').type(`${data.transport.by}{enter}`)
        cy.get('[formcontrolname="licensePlate"]').type(`${data.transport.licenseplate}`)
        cy.get('[formcontrolname="driveName"]').type(`${data.transport.driver}`)
        cy.get('[formcontrolname="transportRoute"]').type(`${data.transport.Route}`)

        cy.get('[id="browseFile0"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile1"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile2"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile3"]').attachFile(`${data.browse.file}`)
        cy.get('[id="browseFile4"]').attachFile(`${data.browse.file}`)

        cy.get('[class="btn btn-success"]').click();
        cy.get('[class="btn btn-success ng-star-inserted"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
}
