import { test } from '@playwright/test';


test('click the card', async ({ browser, page }) => {

  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const fill1 = await page.locator('.space-y-4').filter({ has: page.getByRole('textbox', { name: 'email' }) }).getByRole('textbox', {
    name: 'Email'
  });

  await fill1.fill('test14@gmail.com');

  const password = await page.getByRole('textbox', { name: 'Password' });
  await password.fill('Forgetforget@123');

  const buttonclick = await page.getByRole('button', { name: 'Sign In' });
  await buttonclick.click();

  const book = await page.locator('div').filter({ hasText: 'Book Now' });
  book.getByRole('link', { name: 'Book Now' });
  await book.nth(0).click();

  await page.frameLocator('#login-frame').getByLabel('test');
  const fr = await page.frame({ name: 'loginFrame' });

  fr?.getByLabel('')
  page.frameLocator('').frameLocator('').getByRole('button', {
    name: 'test'
  }).click();

  page.frames();
});

















test.only('To test login functionality', async ({ page }) => {
  const text = await page.locator("").filter({ hasText: 'iphone' });

  await text.getByRole('button', { name: 'Add To cart' });

  page.locator('button').nth(0).textContent();

  const gr = await page.locator('').isVisible();

  if (gr) {

  } else {

  }


  const link = await page.locator('a');

  const count = await link.count();

  for (let i = 0; i < count; i++) {

    if (await link.nth(i).isVisible()) {
      console.log(`Link ${i} is visible  is`);

    }
  }

});


