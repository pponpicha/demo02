import '@testing-library/cypress/add-commands'

/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select meta tag element
       * @example cy.metaTag('og:image')
      */
      metaTag(property: string): Chainable<Element>
      login(userType:string,): Chainable<void>
      restoreLocalStorage(): Chainable<void>
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
  let types = {
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
    let user = types[userType]

  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/dutyfree-api/api/auth/login',
    form: true,
    body: user,
    
    // {
    //   username: 'admin',
    //   password: 'password'
    // }
  })
  .then((res) => {
    // let bookResponse = JSON.parse(JSON.stringify(res));
    // cy.log(bookResponse.body.token)
    token = res.body.token;
    window.localStorage.setItem('ng-dutyfree-token', token)
  })
})

Cypress.Commands.add("restoreLocalStorage", () => {
  
  localStorage.setItem('ng-dutyfree-token', token);
 
});

