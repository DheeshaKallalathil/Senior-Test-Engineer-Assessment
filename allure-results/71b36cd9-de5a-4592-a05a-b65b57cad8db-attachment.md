# Test info

- Name: add item to cart and verify in cart page
- Location: C:\Senior-test-engineer-assessment\tests\cart.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.inventory_item_name')
Expected string: "Sauce Labs Backpack"
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.inventory_item_name')

    at C:\Senior-test-engineer-assessment\tests\cart.spec.ts:26:26
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
- text: Your Cart QTY DESCRIPTION
- link "Continue Shopping":
  - /url: ./inventory.html
- link "CHECKOUT":
  - /url: ./checkout-step-one.html
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
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('add item to cart and verify in cart page', async ({ page }) => {
   4 |   // Step 1: Go to the login page
   5 |   await page.goto('https://www.saucedemo.com/v1/');
   6 |
   7 |   // Step 2: Login
   8 |   await page.fill('#user-name', 'standard_user');
   9 |   await page.fill('#password', 'secret_sauce');
  10 |   await page.click('.btn_action');
  11 |
  12 |   // Step 3: Wait for inventory page
  13 |   await expect(page).toHaveURL(/.*inventory.html/);
  14 |
  15 |   // Step 4: Add the first item (Sauce Labs Backpack) to the cart
  16 |   const firstAddButton = page.locator('.inventory_item').nth(0).locator('button');
  17 |
  18 |   // Step 5: Go to cart
  19 |   await page.click('.shopping_cart_link');
  20 |
  21 |   // Step 6: Confirm we're on the cart page
  22 |   await expect(page).toHaveURL(/.*cart.html/);
  23 |
  24 |   // Step 7: Check the correct item is in the cart
  25 |   const cartItem = page.locator('.inventory_item_name');
> 26 |   await expect(cartItem).toHaveText('Sauce Labs Backpack');
     |                          ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  27 | });
  28 |
```