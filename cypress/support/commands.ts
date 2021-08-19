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


Cypress.Commands.add('login', (userType:string, options = {}) => {
  
  
  const  types = 
    {
    admin: {
      username: 'admin',
      password: 'password'
    },
    user: {
      username: 'admin',
      password: 'password'
    },
  }
 

  // grab the user 
      // const user:string = types[userType]
  
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/dutyfree-api/api/auth/login',
    form: true,
    body: 
    // user,
    
    {
      username: 'admin',
      password: 'password'
    }
  })
  .then((res) => {
    // let bookResponse = JSON.parse(JSON.stringify(res));
    // cy.log(bookResponse.body.token)
    token = res.body.token;
    window.localStorage.setItem('ng-dutyfree-token', token)
  })
})

Cypress.Commands.add('loginuserType', (userType:string, options = {}) => {
    
  let mapUser: { [key: string]: any }  = //A map of string -> anything you like
    {
    admin: {     
      username: 'admin',
      password: 'password'
    },
    cust: {
      username: 'df-testfact01@gmail.com',
      password: 'password'
    },
    offc: {
      username: 'df-testoffc01@gmail.com',
      password: 'password'
    },
    offcDes: {
      username: 'df-testoffc04@gmail.com',
      password: 'password'
    },
    area: {
      username: 'df-testarea01@gmail.com',
      password: 'password'
    },
    areaDes: {
      username: 'df-testarea04@gmail.com',
      password: 'password'
    },
  }
  // grab the user 
    const user:string = mapUser[userType]      
    // cy.log(user)  
  
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/dutyfree-api/api/auth/login',
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
