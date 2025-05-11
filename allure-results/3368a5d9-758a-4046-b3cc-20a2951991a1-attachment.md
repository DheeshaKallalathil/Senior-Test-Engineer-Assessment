# Test info

- Name: complete checkout process successfully
- Location: C:\Senior-test-engineer-assessment\tests\checkout.spec.ts:9:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.complete-header')
Expected string: "THANK YOU FOR YOUR ORDER"
Received string: "Thank you for your order!"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.complete-header')
    9 × locator resolved to <h2 class="complete-header" data-test="complete-header">Thank you for your order!</h2>
      - unexpected value "Thank you for your order!"

    at CheckoutCompletePage.assertOrderComplete (C:\Senior-test-engineer-assessment\pages\CheckoutCompletePage.ts:12:32)
    at C:\Senior-test-engineer-assessment\tests\checkout.spec.ts:31:30
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: "Swag Labs Checkout: Complete!"
- img "Pony Express"
- heading "Thank you for your order!" [level=2]
- text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
- button "Back Home"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 12 |     await expect(confirmation).toHaveText('THANK YOU FOR YOUR ORDER');
     |                                ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  13 |   }
  14 | }
  15 |
```