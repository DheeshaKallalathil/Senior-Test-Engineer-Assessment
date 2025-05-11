# Test info

- Name: Login Functionality with Multiple Valid Users >> should login successfully with username: locked_out_user
- Location: C:\Senior-test-engineer-assessment\tests\login.spec.ts:7:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected pattern: /.*inventory.html/
Received string:  "https://www.saucedemo.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"

    at LoginPage.assertLoginSuccess (C:\Senior-test-engineer-assessment\pages\LoginPage.ts:21:29)
    at C:\Senior-test-engineer-assessment\tests\login.spec.ts:11:23
```

# Page snapshot

```yaml
- text: Swag Labs
- textbox "Username": locked_out_user
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Sorry, this user has been locked out." [level=3]':
  - button
  - text: "Epic sadface: Sorry, this user has been locked out."
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
  10 |   async goto() {
  11 |     await this.page.goto('https://www.saucedemo.com/');
  12 |   }
  13 |
  14 |   async login(username: string, password: string) {
  15 |     await this.page.fill('#user-name', username);
  16 |     await this.page.fill('#password', password);
  17 |     await this.page.click('.btn_action');
  18 |   }
  19 |
  20 |   async assertLoginSuccess() {
> 21 |     await expect(this.page).toHaveURL(/.*inventory.html/);
     |                             ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  22 |     await expect(this.page.locator('.title')).toHaveText(/Products/i);
  23 |   }
  24 | }
  25 |
```