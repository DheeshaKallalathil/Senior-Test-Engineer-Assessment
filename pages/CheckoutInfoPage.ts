import { Page, expect } from '@playwright/test';

export class CheckoutInfoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
  }

  async continueToOverview() {
    await this.page.click('.cart_button'); // "Continue" button
    await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
  }
}
