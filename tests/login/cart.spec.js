const { test, expect } = require('@playwright/test');
const LoginPage = require('../../page-objects/LoginPage');
const CartPage = require('../../page-objects/CartPage');
const testData = require('../fixtures/test-data');

test.describe('Cart Functionality', () => {
    test.beforeEach(async ({ page }) => {
        // Login before each test
        const loginPage = new LoginPage(page);
        await page.goto(process.env.BASE_URL);
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    });

    test('should add a product to the cart and verify cart badge count', async ({ page }) => {
        const cartPage = new CartPage(page);

        // Add a product to the cart
        await cartPage.addItemToCart();

        // Verify the cart badge count
        const cartBadgeCount = await cartPage.getCartBadgeCount();
        expect(cartBadgeCount).toBe('1');
    });

    test('should verify product details in the cart', async ({ page }) => {
        const cartPage = new CartPage(page);

        // Add a product to the cart
        await cartPage.addItemToCart();

        // Open the cart
        await cartPage.openCart();

        // Verify product details
        const productDetails = await cartPage.getProductDetails();
        expect(productDetails.name).toBe('Sauce Labs Backpack');
        expect(productDetails.price).toBe('$29.99');
    });
});
