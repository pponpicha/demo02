import data from '../fixtures/addExamption.json'
import 'cypress-file-upload';


describe("create 05-18",() => {

    beforeEach(() => {
        cy.loginuserType('cust')        
    })

    it("go to menu 05-18",() =>{       
        cy.visit('http://localhost:4200')
        cy.clickLink(' ยื่นแบบ ')
        cy.clickLink('ภส.05-18')
        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
    })

    it("created 05-18",() =>{        
        cy.visit('http://localhost:4200/exemption/add')
        cy.get('[formcontrolname="factory"]').type(`${data.importName}{enter}`)
        cy.loginuserType('cust')                 
             // cy.get('[style="display: flex; border: 0;"] > .form-control').type(`${data.goods.goodsVolume}`)
                
                // cy.get(':nth-child(1) > :nth-child(8) > div > .form-control').type(`${data.goods.goodsVolume}`)
                // cy.get(':nth-child(2) > :nth-child(8) > div > .form-control').type(`${data.goods.goodsVolume}`)
            let row = 1               
            const beer = data.goodsGroup
            beer.forEach(c => {
                             
                cy.get('[class="btn"]').click()                       
                cy.get('[data-test=productType] > .ng-select-container > .ng-value-container > .ng-input > input').type(`${c.groupCode}{enter}`,{force : true})
             
                cy.get('[class="btn btn-info"]').click().then (() => {
                    cy.findByText('พิกัดสินค้า').should('be.visible')                    
                    cy.get('[class="form-group col-md-12"]').within(($list) => {
                    cy.contains(c.goodsName).click() 
                    })                    
                    row += 1
                    cy.get(':nth-child(1) > :nth-child(8) > div > .form-control').type(c.goodsVolume)
                })              
                         
      })
    
        //  })          
        // cy.findByText('กลุ่มสินค้า').should('be.visible')
        // cy.wait(5)
        // cy.get('.close').click()
        // cy.get('.close').click({force:true})
        // const deta = data.goods
        //  let gumo:number = 0;   
        //  deta.forEach(c => {
        //  cy.get('tbody.ng-star-inserted').within(($list) => {
        //     // row = parseFloat($list.text())  
        //     cy.log("gum in :"+gumo)
        //     cy.get('tr').eq(gumo).children().eq(4).type(`${c.goodsScale}{enter}`)
        //     // cy.get('tr').eq(1).children().eq(4).type('2')
        //     cy.get('tr').eq(gumo).children().eq(5).type(`${c.goodsVolume}{enter}`)
        //     // cy.get('[formcontrolname="volume"]').type(`${c.goodsVolume}{enter}`)   
        //     })
        //     gumo += 1
        //     cy.log("gum out :"+gumo)
        // })
        // deta.forEach(c => {
        // cy.get('tbody.ng-star-inserted').children('tr').eq(1).within(($list) => {
        //     // row = parseFloat($list.text())           
        //     gum = gum.toString;
        //     cy.get('td')
        //     .children().eq(1).type(`${c.goodsScale}{enter}`)
        //     // cy.get('[formcontrolname="volume"]').type(`${c.goodsVolume}{enter}`)   
        //     })
        // })
        // cy.get('[formcontrolname="destinationType"]').type(`${data.destination.storehouse}{enter}`)
        // // cy.get('[formcontrolname="dutyfree"]').type(`${data.destination.dutyfreeName}{enter}`)
        // cy.get('[formcontrolname="storehouse"]').type(`${data.destination.storehouseName}{enter}`)
        // cy.get(':nth-child(1) > app-datepicker > .input-group > .form-control').type(`${data.startDate}{enter}`)
        // cy.get(':nth-child(2) > app-datepicker > .input-group > .form-control').type(`${data.endDate}{enter}`)
        // cy.get('[formcontrolname="transportBy"]').type(`${data.transport.by}{enter}`)
        // cy.get('[formcontrolname="licensePlate"]').type(`${data.transport.licenseplate}`)
        // cy.get('[formcontrolname="driveName"]').type(`${data.transport.driver}`)
        // cy.get('[formcontrolname="transportRoute"]').type(`${data.transport.Route}`)

        // cy.get('[id="browseFile0"]').attachFile(`${data.browse.file}`)
        // cy.get('[id="browseFile1"]').attachFile(`${data.browse.file}`)
        // cy.get('[id="browseFile2"]').attachFile(`${data.browse.file}`)
        // cy.get('[id="browseFile3"]').attachFile(`${data.browse.file}`)
        // cy.get('[id="browseFile4"]').attachFile(`${data.browse.file}`)        
        // cy.get('[class="btn btn-light-light"]').click().then(() => {
        //     cy.get('[formcontrolname="code"]').type(`${data.browse.fileother}{enter}`)
        //     cy.get('[type="file"').attachFile(`${data.browse.file}`)
        // })          
        // cy.get('[class="btn btn-success"]').click();
        // cy.get('[class="btn btn-success ng-star-inserted"]').click();
        // cy.get('.swal2-confirm').click();
        // cy.get('.swal2-popup').should('be.visible')
        // cy.contains('OK').click();     
        })   
    })  