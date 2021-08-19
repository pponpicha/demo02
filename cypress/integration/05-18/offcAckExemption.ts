/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcinformOrigin_4(docCode:string) {

    it("แจ้ง วัน/เดือน/ปี ที่จะให้เข้ามาตรวจสอบ",() =>{       
        
        cy.visit('http://localhost:4200')
        // cy.scrollTo(0, 100000) 
        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)
        cy.get('[formcontrolname="date"]').type(`${data.startDate}{enter}`)
       
        cy.get('[id="note"]').type('แจ้งเจ้าพนักงานสรรพสามิตตรวจสอบชนิดและปริมาณ')
        cy.get('.btn-success').click()        
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();  
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })

   
}