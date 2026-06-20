import { LoginPage } from '../../pages/LoginPage'

const loginPage = new LoginPage()

describe('Authentication', () => {
    beforeEach(() => {
        loginPage.visit()
    })

    context('Valid login', () => {
        it('should login successfully w/ standard user', () => {
            loginPage.login(
                Cypress.env('STANDARD_USER'),
                Cypress.env('PASSWORD')
            )
            cy.url().should('include', '/inventory.html')
        })
    })

    context('Invalid login', () => {
        it('should fail w/ user', () => {
            loginPage.login(
                Cypress.env('LOCKED_USER'),
                Cypress.env('PASSWORD')
            )
            loginPage.assertErrorMessage(
                'Sorry, this user has been locked out.'
            )
        })

        it('should show error for wrong password', () => {
            loginPage.login('standard_user', 'wrong_password')
            loginPage.assertErrorMessage(
                'Username and password do not match any user in this service'
            )
        })

        it('should fail for pwd field is empty' , () => {
            loginPage.login(Cypress.env('STANDARD_USER'), '')
            loginPage.assertErrorMessage('Password is required')
        })

        it('should fail for username field is empty' , () => {
            loginPage.login('', Cypress.env('PASSWORD'))
            loginPage.assertErrorMessage('Username is required')
        })
    })

    context('postlogin', () => {
        it('should appear shop items', () => {
            loginPage.login(
                Cypress.env('STANDARD_USER'),
                Cypress.env('PASSWORD')
            )
            cy.url().should('include', '/inventory.html')
            cy.get('[data-test="inventory-list"]').should('be.visible')
        })

    })

})