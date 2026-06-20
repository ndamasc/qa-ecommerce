import { LoginPage } from '../pages/LoginPage'

const loginPage = new LoginPage

Cypress.Commands.add('login', (username: string, password: string) => {
    loginPage.visit()
    loginPage.login(username, password)
})

Cypress.Commands.add('loginAsStandardUser', () => {
    cy.login(
        Cypress.env('STANDARD_USER'),
        Cypress.env('PASSWORD')
    )
})

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>
            loginAsStandardUser(): Chainable<void>
        }
    }
}