
describe("Test suite", () => {
    it('login',() => {
        cy.login()
        cy.loginuserType('admin')
        cy.visit('http://localhost:4200/worklist')
        // cy.visit('https://cirdev.thaimissing.go.th')
        // cy.get('[formcontrolname="username"]').type('admin')
        // cy.get('[formcontrolname="password"]').type('password')
        // cy.contains('LOGIN').click()
    })


});
