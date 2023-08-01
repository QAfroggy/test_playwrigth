import { test, expect } from "@playwright/test";

test.describe("Elements ", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.bbc.com/");
  });
  test("After open url page is visible", async ({ page }) => {
    
    const homePage = page.locator("#page");
    await expect(homePage).toBeVisible();
  });
  test("Home page has title BBC -Homepage", async ({ page }) => {
    
    await expect(page).toHaveTitle("BBC - Homepage");
  });
  test("Logo BBC is visible", async ({ page }) => {
    
    const logo = page.locator("#homepage-link");
    await expect(logo).toBeVisible();
  });

  test("Let us know you agree to advertising cookies", async ({ page }) => {
    
    const advertisingCookies = page
      .frameLocator('iframe[title="SP Consent Message"]')
      .getByLabel("I agree");
    await expect(advertisingCookies).toBeVisible();
    await page
      .frameLocator('iframe[title="SP Consent Message"]')
      .getByLabel("I agree")
      .click();
    // await page
    //   .getByLabel("BBC-wide")
    //   .getByRole("link", { name: "News" })
    //   .click();
    //await page.getByRole('link', { name: 'Sign in' }).click();
    // await page.getByLabel('Email or username').click();
    // await page.getByLabel('Email or username').fill('jdjdj');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('d,d,d,smd,');
    // await page.getByRole('button', { name: 'Sign in' }).click();
  });
  test('Search BBC is visible', async({page})=>{
   
   const searchBBC= page.locator('[title="Search BBC"]');
   await expect(searchBBC).toBeVisible();
  });
});

// test('has title', async ({ page }) => {

//   // Expect a title "to contain" a substring.
//   //await expect(page).toHaveTitle("BBC - Homepage");
//   await expect(page).toHaveTitle(Home.expected.title);

// });
// test('The logo is visible', async ({ page }) => {

//  const logo = page.locator(Home.selectors.logo);
//  await expect(logo).toBeVisible();

// });

// test('The link is https://www.bbc.com', async ({ page }) => {
//  //Page has link https://www.bbc.com
//   await expect(page).toHaveURL(Home.expected.baseUrl);

// });
// test('Cookie popup is visible', async ({ page }) => {
//  const cookie = page.locator(Home.selectors.cookie);
//  await expect(cookie).toBeVisible();

// });
// test('Sign In is visible', async ({ page }) => {
//   const signIn = page.locator(Home.selectors.signIn);
//   await expect(signIn).toBeVisible();

//  });
// });
