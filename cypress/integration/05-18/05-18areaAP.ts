import data from '../../fixtures/addExamption.json'

export function areaAP_3(docCode: string, docType) {
    let docTyp = docType
    it("AREA-APPROVE 05-18", () => {
        cy.loginuserType('area')
        cy.visit('http://localhost:4200')
        if (docTyp == 'rec') {
            cy.get('#pills-storehouse-tab').click()
            cy.contains('2564/010518/1').should('be.visible')

        }
        if (docTyp == 'str') {
            cy.loginuserType('areaDes')
            cy.visit('http://localhost:4200')
            cy.get('#pills-contact-tab').click()
            cy.contains('STR').should('be.visible')

        }
        
        cy.contains(docCode).scrollIntoView()
        // cy.scrollTo(0, 100000)

        cy.clickLink(docCode)
        cy.get('[for="approve"]').click()

        if (docTyp == 'exemp') {
        cy.get('[data-test="assignName"]').type(`${data.assignName}{enter}`)
       }

        cy.get('[id="inputReason"]').type('ผลการพิจารณา จากสรรพสามิตพื้นที่')
        cy.contains('บันทึกผลการอนุมัติ').click()
        
        cy.get('.swal2-confirm').should('be.visible').click(); 
    })
}