import data from '../../fixtures/addExamption.json'
import rec from '../../fixtures/addRecStrAcc.json'

export function createAccExp() {

    it("create EXP 05-18/1", () => {
        cy.loginuserType('cust')

        cy.visit('http://localhost:4200')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ภส.05-18/1')

        cy.get('[id="expenseRadio"]').check({ force: true })
        cy.get('[formcontrolname="storehouse"]').type(`${data.destination.storehouseName}{enter}`)

        cy.get('[class="btn"]').click()

        cy.get('[class="modal-content"]').should('be.visible')
       
        cy.get('[id="searchValue"]').click().type(`${data.exempCode}`, { force: true })

        cy.get('[class="btn btn-info"]').click()
        cy.get('.form-check-input').click()
        cy.get('.modal-footer > .btn-success').click()


        cy.get('[formcontrolname="volume"]').click().type(`${data.goods.goodsVolumeExp}`)
      

        cy.get('[formcontrolname="dutyfree"]').type(`${data.destination.dutyfreeName}{enter}`)
        cy.get('app-date-range-picker > .form-row > :nth-child(1) > .input-group > .form-control').type(`${data.startDate}{enter}`)
        cy.get(':nth-child(2) > .input-group > .form-control').type(`${data.endDate}{enter}`)
        cy.get('[formcontrolname="transportBy"]').type(`${data.transport.by}{enter}`)
        cy.get('[formcontrolname="licensePlate"]').type(`${data.transport.licenseplate}`)
        cy.get('[formcontrolname="driver"]').type(`${data.transport.driver}`)
        cy.get('[formcontrolname="transportRoute"]').type(`${data.transport.Route}`)

            cy.get('.form-group > .btn-success').click();
            cy.get('[class="btn btn-success ng-star-inserted"]').click();
            cy.get('.swal2-confirm').click();
            cy.get('.swal2-popup').should('be.visible')
            cy.contains('OK').click();


    })
}