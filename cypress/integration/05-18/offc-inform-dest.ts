/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcinformDest_6(docCode:string,user:string) {
    let userType =user

    it("OFFC-DEST-รับทราบวันที่แจ้งให้มาตรวจสอบปลายทาง",() =>{   
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

    it("OFFC-DEST-ตรวจสอบปลายทาง",() =>{  
        cy.loginuserType(userType)
        cy.visit('http://localhost:4200')
        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)
        cy.get('[formcontrolname="volume"]').type(`${data.goods.goodsVolumeDest}`)
        cy.get('[formcontrolname="stamp"]').type('ส0123')
        cy.get('[formcontrolname="count"]').type('3')

        cy.contains('ผลการตรวจสอบสินค้าปลายทาง').should('be.visible')

        let goodsVolume:string = data.goods.goodsVolume;
        let goodsVolumeDest:string = data.goods.goodsVolumeDest;      
        if(goodsVolume == goodsVolumeDest){
          cy.get('[for="correct"]').click()            
          cy.get('[formcontrolname="reason"]').type('สินค้าถูกต้องตามรายการสินค้า')  
        }else{
          cy.get('[for="incorrect"]').click()          
          cy.get('[formcontrolname="reason"]').type('สินค้าไม่ถูกต้อง')  
        }

        cy.get('[formcontrolname="note"]').type('ผลการพิจารณาปลายทาง มีข้อมูล ผนึกดวงตากรมสรรพสามิต')
        cy.get('button').contains('บันทึกผลการตรวจสอบ').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('button').contains('ยืนยัน').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
}