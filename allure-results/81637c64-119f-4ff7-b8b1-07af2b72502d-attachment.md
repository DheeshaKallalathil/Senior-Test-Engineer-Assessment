# Test info

- Name: Login Functionality with Multiple Valid Users >> should handle login for username: problem_user
- Location: C:\Senior-test-engineer-assessment\tests\login.spec.ts:7:9

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

    at LoginPage.goto (C:\Senior-test-engineer-assessment\pages\LoginPage.ts:12:21)
    at C:\Senior-test-engineer-assessment\tests\login.spec.ts:10:23
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
> 12 |     await this.page.goto('https://www.saucedemo.com/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  25 |     await expect(this.page.locator('.title')).toHaveText(/Products/i);
  26 |   }
  27 |
  28 |   // Assert failed login (e.g. for locked-out users)
  29 |   async assertLoginFailure(errorMessage: string) {
  30 |     await expect(this.page.locator('.error-message-container')).toHaveText(errorMessage);
  31 |   }
  32 | }
  33 |
```