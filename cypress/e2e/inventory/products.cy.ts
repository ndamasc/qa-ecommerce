import { InventoryPage } from '../../pages/InventoryPage'

const inventoryPage = new InventoryPage()

describe('Products Inventory', () => {
  beforeEach(() => {
    cy.loginAsStandardUser()
    inventoryPage.assertOnInventoryPage()
  })

  it('should display all 6 products by default', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('should add a product to the cart and update the badge', () => {
    inventoryPage.addItemToCart(0)
    inventoryPage.getCartBadgeCount().should('have.text', '1')
  })

  it('should remove a product and update the badge', () => {
    inventoryPage.addItemToCart(0)
    inventoryPage.addItemToCart(1)
    inventoryPage.getCartBadgeCount().should('have.text', '2')
    
    inventoryPage.removeItemFromCart(0)
    inventoryPage.getCartBadgeCount().should('have.text', '1')
  })

  it('should sort products by price (High to Low)', () => {
    inventoryPage.sortProductsBy('hilo')
    inventoryPage.getFirstProductPrice().should('contain', '$49.99')
    inventoryPage.getFirstProductName().should('contain', 'Sauce Labs Fleece Jacket')
  })
})