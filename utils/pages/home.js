// // //selectors
// // const selectors ={
// //     logo: '#homepage-link',
// //     url: 'https://www.bbc.com/',
// //     cookie: ".bbccookies-banner",
// //     headerNav: '.orbit-header-links international',
// //     signIn: '#idcta-username'

// // }





// // //expected
// // const expected ={
// //     title: "BBC - Homepage",
// //     baseUrl: 'https://www.bbc.com/'

// // };
// const { expect } = require('@playwright/test');

// exports.Home = class Home {

// //   /**
// //    * @param {import('@playwright/test').Page} page
// //    */
//   constructor(page) {
//     this.page = page;
//     this.logo = page.locator('#homepage-link');
//     this.cookie = page.locator(".bbccookies-banner");
//     this.headerNav = page.locator('.orbit-header-links international',);
//     this.signIn = page.locator('#idcta-username');
//   }

//   async goto() {
//     await this.page.goto('https://www.bbc.com');
//   }

//   async getStarted() {
//     await this.getStartedLink.first().click();
//     await expect(this.gettingStartedHeader).toBeVisible();
//   }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
// };






// //functions

// const openPage = async() =>{
//     await page.goto('https://www.bbc.com/');
// }

// export default{
//     selectors,
//     expected,
//     openPage
// }


