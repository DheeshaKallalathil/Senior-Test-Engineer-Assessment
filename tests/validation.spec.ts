import { test, expect } from '@playwright/test';

async function loginAndGoToCheckoutStepOne(page) {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('.btn_action');
  await expect(page).toHaveURL(/.*inventory.html/);
  await page.locator('.inventory_item').nth(0).locator('button').click(); 
  await page.click('.shopping_cart_link');
  await page.click('.checkout_button');
  await expect(page).toHaveURL(/.*checkout-step-one.html/);
}

//   Missing **Last Name**
test('checkout blocks submission when LAST name is missing', async ({ page }) => {
  await loginAndGoToCheckoutStepOne(page);

  await page.fill('#first-name', 'John');
  await page.fill('#postal-code', '12345');
  await page.click('.cart_button'); 

  const error = page.locator('[data-test="error"]');
  await expect(error).toHaveText('Error: Last Name is required');
});

//   Missing **Postal Code**
test('checkout blocks submission when POSTAL CODE is missing', async ({ page }) => {
  await loginAndGoToCheckoutStepOne(page);

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.click('.cart_button'); 

  const error = page.locator('[data-test="error"]');
  await expect(error).toHaveText('Error: Postal Code is required');
});

// All fields blank (controls baseline error handling)
test('checkout blocks submission when ALL fields are blank', async ({ page }) => {
  await loginAndGoToCheckoutStepOne(page);

  // leave all fields empty
  await page.click('.cart_button'); 

  const error = page.locator('[data-test="error"]');
  await expect(error).toHaveText('Error: First Name is required');
});
