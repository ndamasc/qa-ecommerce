export class CartPage {
  private cartList = '.cart_list'
  private cartItem = '.cart_item'
  private itemName = '.inventory_item_name'
  private cartPageButton = '[data-test="shopping-cart-link"]'
  private checkoutButton = '[data-test="checkout"]'
  private removeButton = '[data-test^="remove"]'

  goToCart(): void {
    cy.get(this.cartPageButton).click()
  }

  assertOnCartPage(): void {
    cy.url().should('include', '/cart.html')
    cy.get(this.cartList).should('be.visible')
  }

  assertProductInCart(name: string): void {
    cy.get(this.cartItem).should('contain.text', name)
  }

  proceedToCheckout(): void {
    cy.get(this.checkoutButton).click()
  }

  removeOneItemFromCart(): void {
    cy.get(this.removeButton).click()
    cy.get(this.cartItem).should('not.exist')
  }

  removeAllItemsFromCart(): void {
    cy.get(this.removeButton).each(($btn) => {
    cy.wrap($btn).click()
  })
    cy.get(this.cartItem).should('not.exist')
  }
}