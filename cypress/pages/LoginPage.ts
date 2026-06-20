export class LoginPage {

  private usernameInput = '[data-test="username"]'
  private passwordInput = '[data-test="password"]'
  private loginButton = '[data-test="login-button"]'
  private errorMessage = '[data-test="error"]'
  private inventory = '[data-test="inventory-list"]'


  visit(): void {
    cy.visit('/')
  }


  fillUsername(username: string): void {
    if(username !== ''){
      cy.get(this.usernameInput).clear().type(username)
    } else {
      cy.get(this.usernameInput).clear()
    }
  }

  fillPassword(password:string): void {
    if (password !== '') {
      cy.get(this.passwordInput).clear().type(password)
    } else{
      cy.get(this.passwordInput).clear()
    }
  }

  submit():void {
    cy.get(this.loginButton).click()
  }

  login(username: string, password: string): void {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorMessage)
  }

  assertErrorMessage(message: string): void {
    this.getErrorMessage().should('be.visible').and('contain.text', message)
  }

  assertOnLoginPage(): void {
    cy.url().should('include', '/index.html')
    cy.get(this.loginButton).should('be.visible')
  }

  assertOnHomePage(): void {
    cy.url().should('include', '/inventory.html')
    cy.get(this.inventory).should('be.visible')
  }

}