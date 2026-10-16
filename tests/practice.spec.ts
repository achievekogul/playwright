import { chromium, test, expect } from '@playwright/test';

test('To launch browser', async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://wwww.google.com")
});


test('brower in fixture', async ({ page }) => {

    await page.goto("https://eventhub.rahulshettyacademy.com/login");

    // const email = await page.getByRole('textbox', { name: 'email' });
    // await email.fill('test14@gmail.com');

    const fill1 = await page.locator('.space-y-4').filter({ has: page.getByRole('textbox', { name: 'email' }) }).getByRole('textbox', {
        name: 'Email'
    });

    await fill1.fill('test14@gmail.com');

    const password = await page.getByRole('textbox', { name: 'Password' });
    await password.fill('Forgetforget@123');

    const buttonclick = await page.getByRole('button', { name: 'Sign In' });
    await buttonclick.click();

    //   const text = await page.getByText('Discover').textContent();
    //   console.log(text);

    const disc = page.locator('h1').filter({ hasText: 'Discover' });
    console.log(await disc.textContent());

    const iphoneCard = page.locator('.card').filter({
        has: page.getByText('iPhone')
    });

    const disc1 = await page.locator('h1').filter({ hasText: 'Discover' });
    const count = await disc1.count();

    for (let i = 0; i < count; i++) {
        console.log(await disc1.nth(i).textContent());
    }

    const texts = await disc1.locator('h1').allTextContents();

    for (const text of texts) {
        console.log(text);
    }



    fill1.fill('test@gmail.com');

    await expect(page.getByText('Discover')).toBeVisible();
    await page.close();
}); 