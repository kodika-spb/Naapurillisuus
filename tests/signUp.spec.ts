import { test, expect, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomPassword = faker.random.alphaNumeric(8)
const randomEmail = faker.internet.email();

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test('create account', async ({ page }) => {
  await page.locator('.amplify-tabs-item').nth(1).click();
  await page.locator('.amplify-field label').nth(0).fill(randomEmail);
  await page.locator('.amplify-field label').nth(0).press('Enter');
  await page.locator('.amplify-field label').nth(1).fill(randomPassword);
  await page.locator('.amplify-field label').nth(1).press('Enter');
  await page.locator('.amplify-field label').nth(2).fill(randomPassword);
  await page.locator('.amplify-field label').nth(2).press('Enter');

  await page.goto('https://main.d2h09ft1pooas1.amplifyapp.com/login')
  await page.locator('.amplify-field label').nth(0).fill('vitaly.esipov@gmail.com');
  await page.locator('.amplify-field label').nth(0).press('Enter');
  await page.locator('.amplify-field label').nth(1).fill("#sPzt@wx%J3Bh5y$");
  await page.locator('.amplify-field label').nth(1).press('Enter');
  await page.goto('https://main.d2h09ft1pooas1.amplifyapp.com/backoffice/clients')


  await expect(page.locator('.p-column-title')).toHaveText([randomEmail]);

})
