import Home from "../utils/pages/home.js"
import Registration from "../utils/pages/registration";
const { test, expect } = require('@playwright/test');
test.describe('Registration', () => {
    test.beforeEach(async ({page}) => {
      // Go to the starting url before each test.
      const signInpage = await page.goto(Registration.selectors.signInUrl);
      await expect(signInpage).toBeVisible()
     
     
    });
});