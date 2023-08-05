exports.Registration = class Registration {
    constructor(page) {
      this.page = page;
      this.signInPage = page.locator("#signin-page");
      this.userInput = page.locator("#user-identifier-input");
      this.passInput = page.locator("#password-input");
      this.submit = page.locator("#submit-button");

    }
  
   async clickIAgree(){
  await this.cookie.click()
   }
   async openRegisterPage(){
      await this.page.goto("https://account.bbc.com/signin");
   }
  
  
  }
  