# Test info

- Name: invalid login shows error message
- Location: C:\Senior-test-engineer-assessment\tests\login.spec.ts:23:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/v1/", waiting until "load"

    at C:\Senior-test-engineer-assessment\tests\login.spec.ts:25:14
```

# Page snapshot

```yaml
- textbox "Username"
- textbox "Password"
- button "LOGIN"
- img
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('valid login redirects to inventory page', async ({ page }) => {
   4 |   // Go to the login page
   5 |   await page.goto('https://www.saucedemo.com/v1/');
   6 |
   7 |   // Enter valid username and password
   8 |   await page.fill('#user-name', 'standard_user');
   9 |   await page.fill('#password', 'secret_sauce');
  10 |
  11 |   // Click on the login button
  12 |   await page.click('.btn_action');
  13 |
  14 |   // Wait for the inventory page to load and verify the title
  15 |   await expect(page).toHaveURL(/.*inventory.html/);
  16 |
  17 |   // Check for the correct title on the inventory page
  18 |   const inventoryTitle = page.locator('.product_label'); // Changed the selector here
  19 |   await expect(inventoryTitle).toHaveText('Products');
  20 | });
  21 |
  22 |
  23 | test('invalid login shows error message', async ({ page }) => {
  24 |   // Go to the login page
> 25 |   await page.goto('https://www.saucedemo.com/v1/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  26 |
  27 |   // Enter invalid credentials
  28 |   await page.fill('#user-name', 'invalid_user');
  29 |   await page.fill('#password', 'wrong_pass');
  30 |
  31 |   // Click on the login button
  32 |   await page.click('.btn_action');
  33 |
  34 |   // Verify that the error message is displayed
  35 |   const errorMessage = page.locator('[data-test="error"]');
  36 |   await expect(errorMessage).toBeVisible();
  37 |   await expect(errorMessage).toContainText('Username and password do not match');
  38 | });
  39 |
```