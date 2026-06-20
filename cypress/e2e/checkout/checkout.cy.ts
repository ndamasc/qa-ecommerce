import { CheckoutPage } from "../../pages/CheckoutPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { DataFactory } from "../../shared/utils/dataFactory";

const checkoutPage = new CheckoutPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Checkout flow', () => {
    beforeEach(() => {
        cy.loginAsStandardUser()
    })

    it('should complete a purchase from start to finish', () => {
        const userData = DataFactory.checkoutInfo()
        inventoryPage.addItemToCart(0)
        cartPage.goToCart()
        cartPage.assertOnCartPage()
        cartPage.proceedToCheckout()

        checkoutPage.fillInformation(userData.firstName, userData.lastName, userData.postalCode)
        checkoutPage.finishOrder()
        checkoutPage.assertOrderComplete()
    })

    it('should fail purchase due to empty filds', () => {
        inventoryPage.addItemToCart(1)
        cartPage.goToCart()
        cartPage.assertOnCartPage()
        cartPage.proceedToCheckout()

        checkoutPage.fillInformation('', '', '')
        checkoutPage.assertOnErrorMessage()
    })

    it('should fail after remove items', () => {
        inventoryPage.addItemToCart(0)
        cartPage.goToCart()
        cartPage.assertOnCartPage()
        checkoutPage.removeItemFromCheckout(0)
    })

    it('should remove one item from cart', () => {
        inventoryPage.addItemToCart(0)
        cartPage.goToCart()
        cartPage.removeOneItemFromCart()
    })

    it('should remove all items', () => {
        inventoryPage.addItemToCart(0)
        inventoryPage.addItemToCart(2)
        inventoryPage.addItemToCart(3)
        cartPage.goToCart()
        cartPage.removeAllItemsFromCart()
    })


})