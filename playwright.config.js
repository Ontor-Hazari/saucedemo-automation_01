const { defineConfig } = require('@playwright/test');
require('dotenv').config(); // Load environment variables from .env

module.exports = defineConfig({
    testDir: './tests', // Directory for test files
    timeout: 30000, // Timeout for each test in milliseconds
    retries: 2, // Number of retries for failed tests
    reporter: [['html', { open: 'never' }]], // HTML reporter configuration
    use: {
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com', // Use BASE_URL from .env or default
        browserName: 'chromium', // Browser to use (e.g., chromium, firefox, webkit)
        headless: false, // Run tests in headed mode for better visibility
        viewport: { width: 1280, height: 720 }, // Default browser viewport size
    },
});
