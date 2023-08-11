import { test, expect } from "@playwright/test";
import { Registration } from "../utils/pages/registration";

const password = process.env.PASSWORD;
const userEmail = process.env.USERLOGIN;
test.describe("Registration", ()=>{


    test.beforeEach(async ({ page }) => {
        const Register = new Registration(page);
        await Register.openRegisterPage();
     //await page.goto("https://account.bbc.com/signin")
    });
    test('Registation a new user', async({page})=>{
        const Register = new Registration(page);
        await expect(Register.signInPage).toBeVisible()
        // await Register.userInput.fill("user84@gmail.com")
        // await Register.passInput.fill("para123")
        // await Register.submit.click()
        await Register.registerNow.click()
        await Register.over16.click()
        await Register.registerUser("1", "12", "1982");


    })
});
