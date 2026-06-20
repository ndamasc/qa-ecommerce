export class InventoryPage {
  private inventoryList = '.inventory_list'
  private productItem = '.inventory_item'
  private productName = '.inventory_item_name'
  private productPrice = '.inventory_item_price'
  private addToCartButton = 'button[id^="add-to-cart"]'
  private removeButton = 'button[id^="remove"]'
  private cartBadge = '.shopping_cart_badge'
  private sortContainer = '[data-test="product-sort-container"]'

  assertOnInventoryPage(): void {
    cy.url().should('include', '/inventory.html')
    cy.get(this.inventoryList).should('be.visible')
  }

  addItemToCart(index: number = 0): void {
    cy.get(this.productItem).eq(index).find(this.addToCartButton).click()
  }

  removeItemFromCart(index: number = 0): void {
    cy.get(this.productItem).eq(index).find(this.removeButton).click()
  }

  getCartBadgeCount(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.cartBadge)
  }

  sortProductsBy(option: string): void {
    cy.get(this.sortContainer).select(option)
  }

  getFirstProductName(): Cypress.Chainable<string> {
    return cy.get(this.productName).first().invoke('text')
  }

  getFirstProductPrice(): Cypress.Chainable<string> {
    return cy.get(this.productPrice).first().invoke('text')
  }
}