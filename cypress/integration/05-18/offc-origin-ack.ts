/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcOriginAck_5(docCode:string,docType,user:string) {
    let userType =user
    let docTyp = docType


    it("OFFC-รับทราบวันที่แจ้งให้มาตรวจสอบ",() =>{   
        cy.loginuserType(userType)  
        cy.visit('http://localhost:4200')
        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)
        // cy.scrollTo(0, 100000) 
        cy.get('.btn-success').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();  
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })

    it("OFFC-ตรวจสอบ",() =>{  
        cy.loginuserType(userType)
        cy.visit('http://localhost:4200')
        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)
        cy.get('[formcontrolname="volume"]').type(`${data.goods.goodsVolume}`)
        cy.get('[formcontrolname="stamp"]').type('S0123')
        cy.get('[formcontrolname="count"]').type('3')

        cy.get('[for="correct"]').click()
        cy.get('[formcontrolname="reason"]').type('สินค้าถูกต้องตามรายการสินค้า')
        cy.get('[formcontrolname="note"]').type('ผลการพิจารณา มีข้อมูล ผนึกดวงตากรมสรรพสามิต')
        cy.get('button').contains('บันทึกผลการตรวจสอบ').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
}