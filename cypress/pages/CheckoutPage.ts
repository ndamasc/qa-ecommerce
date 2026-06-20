export class CheckoutPage {

    private continueButton = '[data-test="continue"]'
    private firstName = '[data-test="firstName"]'
    private lastName = '[data-test="lastName"]'
    private postalCode = '[data-test="postalCode"]'
    private cartList = '.cart_list'
    private summary_info = '.summary_info'
    private finishButton = '[data-test="finish"]'
    private complete_header = '[data-test="complete-header"]'
    private errorMessage = '[data-test="error"]'
    private removeButton = '[data-test^="remove"]'
    private productItem = '[data-test="inventory-item"]'


    fillInformation(firstName: string, lastName:string, postalCode: string): void {
        
        if(firstName !== '' || lastName !== '' || postalCode !== ''){        
            cy.get(this.firstName).type(firstName)
            cy.get(this.lastName).type(lastName)
            cy.get(this.postalCode).type(postalCode)
            cy.get(this.continueButton).click()
        } else {
            cy.get(this.continueButton).click()

        }
    }

    finishOrder(): void {
        cy.get(this.cartList).should('be.visible')
        cy.get(this.summary_info).should('be.visible')
        cy.get(this.finishButton).click()

    }

    assertOrderComplete(): void {
        cy.get(this.complete_header).should('contain.text', 'Thank you for your order!')
    }

    assertOnErrorMessage(): void {
        cy.get(this.errorMessage).should('be.visible').and('contain.text', 'Error')
    } 

    removeItemFromCheckout(index: number = 0): void {
        cy.get(this.productItem).eq(index).find(this.removeButton).click()
    }

}