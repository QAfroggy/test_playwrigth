// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.bbc.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("BBC - Homepage");
  const logo = await page.locator('#homepage-link');
  await expect(logo).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   //await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await expect( page.getByAltText("BBC Logo")).toBeVisible();
//   //await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   //await expect(page).toHaveURL(/.*intro/);
// });
