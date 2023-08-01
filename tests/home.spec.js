import { test, expect } from "@playwright/test";
import { HomePage } from "../utils/pages/home";

test.describe("Describe elements on the website", ()=>{


test.beforeEach(async ({ page }) => {
  const Home = new HomePage(page);
  await Home.openPage();
 
});

test("After open url page is visible", async ({ page }) => {
  const Home = new HomePage(page);
  await expect(Home.homePage).toBeVisible();
});

test("Logo BBC is visible", async ({ page }) => {
  const Home = new HomePage(page);
  await expect(Home.logo_bbc).toBeVisible();
});

});


