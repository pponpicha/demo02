/// <reference types="cypress" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';

export function offcdestAck_5(docCode: string, docType, user: string) {
    let userType = user
    let docTyp = docType


    it("OFFC-รับทราบวันที่แจ้งให้มาตรวจสอบ", () => {

        cy.loginuserType(user)
        cy.visit('http://localhost:4200')
        cy.get('#pills-storehouse-tab').click()
        cy.contains('2564/0105181').should('be.visible')

        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)
        // cy.scrollTo(0, 100000) 
        cy.get('.form-group > .btn-success').click()
        cy.get('.swal2-confirm').should('be.visible').click();
        // cy.get('button').contains('ยืนยัน').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })

    it("OFFC-ตรวจสอบ", () => {
        cy.loginuserType(user)
        cy.visit('http://localhost:4200')
        cy.get('#pills-storehouse-tab').click()
        cy.contains('2564/0105181').should('be.visible')

        cy.contains(docCode).scrollIntoView()
        cy.clickLink(docCode)

        if(userType == 'offcDuty'){
        cy.get('[formcontrolname="volume"]').type(`${data.goods.goodsVolumeExpDest}`)
        }else{
        cy.get('[formcontrolname="volume"]').type(`${data.goods.goodsVolumeExp}`)    
        }
        
        cy.get('[formcontrolname="stamp"]').type('S0123')
        cy.get('[formcontrolname="count"]').type('3')

        
        let goodsVolume:string = data.goods.goodsVolumeExp;
        let goodsVolumeDest:string = data.goods.goodsVolumeExpDest; 

        if(goodsVolume == goodsVolumeDest){
            cy.get('[for="correct"]').click()            
            cy.get('[formcontrolname="reason"]').type('สินค้าถูกต้องตามรายการสินค้า')  
          }else{
            cy.get('[for="incorrect"]').click()          
            cy.get('[formcontrolname="reason"]').type('สินค้าไม่ถูกต้อง')  
          }

        // cy.get('[for="correct"]').click()
        // cy.get('[formcontrolname="reason"]').type('สินค้าถูกต้องตามรายการสินค้า')
        cy.get('[formcontrolname="note"]').type('ผลการพิจารณา มีข้อมูล ผนึกดวงตากรมสรรพสามิต')
        cy.get('button').contains('บันทึกผลการตรวจสอบ').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-popup').should('be.visible')
        cy.contains('OK').click();
    })
}