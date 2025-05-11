# Test info

- Name: Navigation tests >> side menu opens and logout works
- Location: C:\Senior-test-engineer-assessment\tests\navigation.spec.ts:6:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected pattern: /.*\/v1\/(index\.html)?$/
Received string:  "https://www.saucedemo.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"

    at LoginPage.assertOnLoginPage (C:\Senior-test-engineer-assessment\pages\LoginPage.ts:33:29)
    at C:\Senior-test-engineer-assessment\tests\navigation.spec.ts:16:21
```

# Page snapshot

```yaml
- text: Swag Labs
- textbox "Username"
- textbox "Password"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
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
  12 |     await this.page.goto('https://www.saucedemo.com/');
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
  32 |   async assertOnLoginPage() {
> 33 |     await expect(this.page).toHaveURL(/.*\/v1\/(index\.html)?$/);
     |                             ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  34 |   }
  35 |   
  36 | }
  37 |
```