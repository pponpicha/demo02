import data from '../fixtures/addExamption.json'
import store from '../fixtures/addStorehouseUse.json'

describe("create storehouse-use",() => {
    it("go to menu ขออนุญาตสถานที่เก็บสินค้า",() =>{
        cy.loginuserType('cust')
        cy.visit('http://localhost:4200/worklist')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ขออนุญาตสถานที่เก็บสินค้า')

        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
        cy.get('#selectStorehouseName').type(`${store.other}{enter}`)
        cy.get('[formcontrolname="name"]').type(`${store.strNameother}`)
    })

    it("select factory",() => {
        
        // cy.get('[id="buliding"]').type()
    })

})