/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcinformDest_4(docCode: string, docType,userType) {
    let docTyp = docType
    // let userType = user

    it("แจ้ง วัน/เดือน/ปี ที่จะให้เข้ามาตรวจสอบ", () => {
        cy.loginuserType('cust')
        cy.visit('http://localhost:4200')

        if (docTyp == 'strAcc') {
            cy.loginuserType('cust')
            cy.visit('http://localhost:4200')
            cy.get('#pills-storehouse-tab').click()
            cy.contains('2564/010518/').should('be.visible')
        }

        // cy.scrollTo(0, 100000) 
        cy.contains(docCode).scrollIntoView()
        // cy.clickLink(docCode)
        cy.contains(docCode).click({ force: true })

        cy.get('[formcontrolname="date"]').type(`${data.startDate}{enter}`)
        cy.get('[id="note"]').type('แจ้งเจ้าพนักงานสรรพสามิตตรวจสอบชนิดและปริมาณ')

        if (docTyp == 'strAcc') {
            cy.get('.form-group > .btn-success').click()
            cy.get('.swal2-confirm').should('be.visible').click()
        } else {
            cy.get('.btn-success').click()
            cy.get('.swal2-popup').should('be.visible')
            cy.get('button').contains('ยืนยัน').click();            
        }
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
}