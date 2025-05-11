# Test info

- Name: complete checkout process successfully
- Location: C:\Senior-test-engineer-assessment\tests\CheckoutWithoutAddingItems.spec.ts:9:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.complete-header')
Expected string: "Thank you for your order!"
Received string: "THANK YOU FOR YOUR ORDER"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.complete-header')
    9 × locator resolved to <h2 class="complete-header">THANK YOU FOR YOUR ORDER</h2>
      - unexpected value "THANK YOU FOR YOUR ORDER"

    at CheckoutCompletePage.assertOrderComplete (C:\Senior-test-engineer-assessment\pages\CheckoutCompletePage.ts:12:32)
    at C:\Senior-test-engineer-assessment\tests\CheckoutWithoutAddingItems.spec.ts:25:30
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
- text: Finish
- heading "THANK YOU FOR YOUR ORDER" [level=2]
- text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
- img
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
   3 | export class CheckoutCompletePage {
   4 |   readonly page: Page;
   5 |
   6 |   constructor(page: Page) {
   7 |     this.page = page;
   8 |   }
   9 |
  10 |   async assertOrderComplete() {
  11 |     const confirmation = this.page.locator('.complete-header');
> 12 |     await expect(confirmation).toHaveText('Thank you for your order!');
     |                                ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  13 |   }
  14 | }
  15 |
```