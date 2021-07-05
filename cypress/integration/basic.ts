

describe("Test suite", () => {
    it('login',() => {
        cy.login('admin')
        cy.visit('http://localhost:4200/worklist')
        // cy.visit('https://cirdev.thaimissing.go.th')
        // cy.get('[formcontrolname="username"]').type('admin')
        // cy.get('[formcontrolname="password"]').type('password')
        // cy.contains('LOGIN').click()
    })

it('should perform basic google search', () => {
    cy.findByText('ภส.05-18/1').click({force: true})

});
});
