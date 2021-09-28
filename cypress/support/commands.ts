import '@testing-library/cypress/add-commands'
import cypress from 'cypress';

/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select meta tag element
       * @example cy.metaTag('og:image')
      */
      metaTag(property: string): Chainable<Element>
      login(): Chainable<void>
      loginuserType(userType: string): Chainable<void>
      restoreLocalStorage(): Chainable<void>
      clickLink(text:string):Chainable<void>
      clickbtn():Chainable<void>
      clickSend():Chainable<void>
      clickConfirm():Chainable<void>
    }
  }
}

/**
 * Yield meta tag element
 * @param property meta tag property
 * @example metaTag('og:image') => get meta element
 */
export function metaTag(property: string): any {
  return cy.get(`meta[property="${property}"]`)
}

Cypress.Commands.add('metaTag', metaTag)

let token: string;

Cypress.Commands.add('loginuserType', (userType:string, options = {}) => {
    
  let mapUser: { [key: string]: any }  = //A map of string -> anything you like
    {
    admin: {     
      username: 'admin',
      password: 'password'
    },
    cust: {
      username: 'df.testfact01@gmail.com',
      // username: 'df.testfact02@gmail.com',
      // username: 'JTIner100300@gmail.com',
      // username: 'dutyfree100300@gmail.com',
      password: 'password'
    },
    offc: {
      username: 'df.testoffc01@gmail.com',
      // username: 'df-testoffc07@gmail.com',   
      // username: 'offc100300@gmail.com',

      password: 'password'
    },
    offcDes: {
      username: 'df.testoffc04@gmail.com',
      password: 'password'
    },
    offcDuty: {
      username: 'df.testoffc02@gmail.com',
      password: 'password'
    },
    area: {
      username: 'df.testarea01@gmail.com',
      // username: 'df-testarea08@gmail.com',
      // username: 'area100300@gmail.com',

      password: 'password'
    },
    areaDes: {
      username: 'df.testarea04@gmail.com',
      password: 'password'
    },
  }
  // grab the user 
    const user:string = mapUser[userType]      
    // cy.log(user)  
  
  cy.request({
    method: 'POST',
    url: 'http://localhost:9000/dutyfree-api/api/auth/login',
    form: true,
    body: user,    
  })
  .then((res) => {
    // let bookResponse = JSON.parse(JSON.stringify(res));
    // cy.log(bookResponse.body.token)
    token = res.body.token;
    window.localStorage.setItem('ng-dutyfree-token', token)
  })
})

Cypress.Commands.add('cilckbtn',()=>{
  cy.get('.btn btn-success').click()
})

Cypress.Commands.add("restoreLocalStorage", () => {  
  localStorage.setItem('ng-dutyfree-token', token); 
});

Cypress.Commands.add('clickLink', (text:string) => {
  cy.get('a').contains(text).click()
})

Cypress.Commands.add('clickSend', () => {
  cy.get('[class="btn btn-success ng-star-inserted"]').click();
  cy.get('.swal2-confirm').click();  
})

Cypress.Commands.add('clickConfirm', () => {  
  cy.get('.swal2-popup').should('be.visible')
  cy.contains('OK').click(); 
})