# Test info

- Name: Login Functionality with Multiple Valid Users >> should handle login for username: performance_glitch_user
- Location: C:\Senior-test-engineer-assessment\tests\login.spec.ts:7:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.title')
Expected pattern: /Products/i
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.title')

    at LoginPage.assertLoginSuccess (C:\Senior-test-engineer-assessment\pages\LoginPage.ts:25:47)
    at C:\Senior-test-engineer-assessment\tests\login.spec.ts:16:9
```

# Page snapshot

```yaml
- navigation:
  - link "All Items":
    - /url: ./inventory.html
  - link "About":
    - /url: https://saucelabs.com/
  - link "Logout":
    - /url: ./index.html
  - text: Reset App State
- button "Close Menu"
- button "Open Menu"
- link:
  - /url: ./cart.html
- text: Products
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link:
  - /url: ./inventory-item.html?id=4
  - img
- link "Sauce Labs Backpack":
  - /url: ./inventory-item.html?id=4
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "ADD TO CART"
- link:
  - /url: ./inventory-item.html?id=0
  - img
- link "Sauce Labs Bike Light":
  - /url: ./inventory-item.html?id=0
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "ADD TO CART"
- link:
  - /url: ./inventory-item.html?id=1
  - img
- link "Sauce Labs Bolt T-Shirt":
  - /url: ./inventory-item.html?id=1
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "ADD TO CART"
- link:
  - /url: ./inventory-item.html?id=5
  - img
- link "Sauce Labs Fleece Jacket":
  - /url: ./inventory-item.html?id=5
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "ADD TO CART"
- link:
  - /url: ./inventory-item.html?id=2
  - img
- link "Sauce Labs Onesie":
  - /url: ./inventory-item.html?id=2
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "ADD TO CART"
- link:
  - /url: ./inventory-item.html?id=3
  - img
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: ./inventory-item.html?id=3
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "ADD TO CART"
- contentinfo:
  - list:
    - listitem: Twitter
    - listitem: Facebook
    - listitem: LinkedIn
  - text: © 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
  - img
```

# Test source

```ts
   1 | import { Page, expect } from '@playwright/test';
   2 |
   3 | export class LoginPage {
   4 |   readonly page: Page;
   5 |
   6 |   constructor(page: Page) {
   7 |     this.page = page;
   8 |   }
   9 |
  10 |   // Navigate to the login page
  11 |   async goto() {
  12 |     await this.page.goto('https://www.saucedemo.com/v1/');
  13 |   }
  14 |
  15 |   // Login with the provided username and password
  16 |   async login(username: string, password: string) {
  17 |     await this.page.fill('#user-name', username);
  18 |     await this.page.fill('#password', password);
  19 |     await this.page.click('.btn_action');
  20 |   }
  21 |
  22 |   // Assert successful login (check for the inventory page)
  23 |   async assertLoginSuccess() {
  24 |     await expect(this.page).toHaveURL(/.*inventory.html/);
> 25 |     await expect(this.page.locator('.title')).toHaveText(/Products/i);
     |                                               ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  26 |   }
  27 |
  28 |   // Assert failed login (e.g. for locked-out users)
  29 |   async assertLoginFailure(errorMessage: string) {
  30 |     await expect(this.page.locator('.error-message-container')).toHaveText(errorMessage);
  31 |   }
  32 | }
  33 |
```