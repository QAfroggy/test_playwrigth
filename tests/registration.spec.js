import { test, expect } from "@playwright/test";
import { Registration } from "../utils/pages/registration";
test.describe("Registration", ()=>{


    test.beforeEach(async ({ page }) => {
        const Register = new Registration(page);
        await Register.openRegisterPage();
     //await page.goto("https://account.bbc.com/signin")
    });
    test('Registation a new user', async({page})=>{
        const Register = new Registration(page);
        await expect(Register.signInPage).toBeVisible()
        await Register.userInput.fill("user84@gmail.com")
        await Register.passInput.fill("para123")
        await Register.submit.click()

    })
});
