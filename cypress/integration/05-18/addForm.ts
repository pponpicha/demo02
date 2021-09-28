/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import data from '../../fixtures/addExamption.json'
import 'cypress-file-upload';
import { docCodeExempt } from '../shared/docCode'


export function addExempt_1(destination: string): void {
  let des = destination
  it("created 05-18", () => {
    cy.loginuserType('cust')
    cy.visit('http://localhost:4200/exemption/add')
    cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
    // cy.get('[formcontrolname="originType"]').type(`${data.originType.other}{enter}`)
    // cy.get('[formcontrolname="customs"]').type(`${data.originType.otherName}{enter}`)
    // cy.get('[formcontrolname="otherName"]').type(`${data.originType.otherName}{enter}`)
    // cy.get('[formcontrolname="otherAddress"]').type(`${data.originType.otherAddress}{enter}`)

    let row = 1
    cy.get('[class="btn"]').click()

    cy.get('[data-test=productType] > .ng-select-container > .ng-value-container > .ng-input > input')
      .should('be.visible')
      .type(`${data.goods.groupCode}{enter}`, { force: true })


    cy.get('[class="btn btn-info"]').click().then(() => {
      cy.findByText('พิกัดสินค้า').should('be.visible')
      cy.get('[class="form-group col-md-12"]').within(($list) => {
        cy.contains(data.goods.goodsName).click()
      })
    })
    cy.get(':nth-child(8) > .form-control').type(`${data.goods.goodsVolume}`)
    if (des == 'str') {
      cy.get('[formcontrolname="destinationType"]').type(`${data.destination.storehouse}{enter}`)
      cy.get('[formcontrolname="storehouse"]').type(`${data.destination.storehouseName}{enter}`)
    } else {
      cy.get('[formcontrolname="destinationType"]').type(`${data.destination.dutyfree}{enter}`)
      cy.get('[formcontrolname="dutyfree"]').type(`${data.destination.dutyfreeName}{enter}`)
    }

    cy.get(':nth-child(1) > .input-group > .form-control').type(`${data.startDate}{enter}`)
    cy.get(':nth-child(2) > .input-group > .form-control').type(`${data.endDate}{enter}`)
    cy.get('[formcontrolname="transportBy"]').type(`${data.transport.by}{enter}`)
    cy.get('[formcontrolname="licensePlate"]').type(`${data.transport.licenseplate}`)
    cy.get('[formcontrolname="driveName"]').type(`${data.transport.driver}`)
    cy.get('[formcontrolname="transportRoute"]').type(`${data.transport.Route}`)

    const fileName1 = 'Controvers.pdf'
    const filePath = '/image/Controvers.pdf'


    const fileName = fileName1;
    cy.fixture(filePath, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then(fileContent => {
        cy.get('[id="browseFile0"]').attachFile({
          fileContent,
          fileName: fileName,
          mimeType: 'application/pdf',
          encoding: 'utf8'
        })
        cy.get('[id="browseFile1"]').attachFile({
          fileContent,
          fileName: fileName,
          mimeType: 'application/pdf',
          encoding: 'utf8'

        })
      })


    // cy.get('[id="browseFile0"]').attachFile(filePath)


    // cy.get('[id="browseFile0"]').attachFile(`${data.browse.file}`)
    // cy.get('[id="browseFile1"]').attachFile(`${data.browse.file}`)
    cy.get('[id="browseFile2"]').attachFile({filePath:'/image/Controvers.pdf',mimeType: 'application/pdf', encoding: 'utf8'})
    cy.get('[id="browseFile3"]').attachFile(`${data.browse.file4}`)

    if (des == 'str') {
      cy.get('[id="browseFile4"]').attachFile(`${data.browse.file}`)
    }
    cy.get('[class="btn btn-success"]').click();

    // spy on POST requests to /dutyfree-api endpoint        
    // cy.intercept('POST', '/dutyfree-api/api/filetype/file-grp').as('apiCheck')
    // cy.wait('@apiCheck').its('request.url').should('include', '/dutyfree-api/api/filetype/file-grp').then(() => {
    //   cy.get('[class="badge badge-pill badge-primary"]').then(function ($elem) {
    //     cy.log('--->' + $elem.text())
    //     let exempCode: string = $elem.text().substring(8);
    //     docCodeExempt(exempCode);
    //   })
    // })

    cy.clickSend()
    cy.clickConfirm()
  })

}



