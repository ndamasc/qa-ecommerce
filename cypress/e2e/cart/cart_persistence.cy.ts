import { InventoryPage } from '../../pages/InventoryPage'
import { CartPage } from '../../pages/CartPage'

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Cart Functionality', () => {
  beforeEach(() => {
    cy.loginAsStandardUser()
  })

  it('should verify the added product is visible in the cart page', () => {
    
    let productName: string

    inventoryPage.getFirstProductName().then((name) => {
      productName = name
    })

    
    inventoryPage.addItemToCart(0)
        cartPage.goToCart()
        cartPage.assertOnCartPage()

        cy.then(() => {
          cartPage.assertProductInCart(productName)
        })
      })
    })