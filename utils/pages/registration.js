exports.Registration = class Registration {
    constructor(page) {
      this.page = page;
      this.signInPage = page.locator("#signin-page");
      this.userInput = page.locator("#user-identifier-input");
      this.passInput = page.locator("#password-input");
      this.submit = page.locator("#submit-button");
      this.registerNow = page.locator('[data-bbc-result="/register"]');
      this.over16 = page.getByText('16 or over');
      this.dayInput =  page.locator('#day-input');
      this.monthInput = page.locator('#month-input');
      this.yearInput = page.locator('#year-input');
      this.submitButton = page.locator('#submit-button')

    }
  
   async clickIAgree(){
  await this.cookie.click()
   }
   async openRegisterPage(){
      await this.page.goto("https://account.bbc.com/signin");
   }
   async registerUser(day,month,year){
    await this.dayInput.fill(day)
    await this.monthInput.fill(month)
    await this.yearInput.fill(year)
    await this.submitButton.click()
   }
  
  
  }
  