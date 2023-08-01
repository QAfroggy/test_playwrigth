exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homePage = page.locator("#page");
    this.logo_bbc = page.locator("#homepage-link");
    this.cookie = page
      .frameLocator('iframe[title="SP Consent Message"]')
      .getByLabel("I agree");
    this.search = page.locator('[title="Search BBC"]');
  }

 async clickIAgree(){
await this.cookie.click()
 }
 async openPage(){
    await this.page.goto("https://www.bbc.com/");
 }


}
