const { test, expect } = require('@playwright/test');
const LoginPage = require('../../page-objects/LoginPage');
const testData = require('../fixtures/test-data');

test.describe('Sauce Demo Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await page.waitForTimeout(5000)

        console.log(testData.validUser.username);
        console.log(testData.validUser.password);

        await loginPage.login(testData.validUser.username, testData.validUser.password);


        await page.waitForTimeout(5000)

        // Verify successful login by checking URL or element
      //  expect(await page.url()).toContain('/inventory.html');
    });

    test('should show an error message for invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        await page.waitForTimeout(5000)
        await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
        await page.waitForTimeout(5000)

        // Verify the error message
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Username and password do not match');
    });
});
