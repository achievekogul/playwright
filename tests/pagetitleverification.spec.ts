import { test, expect } from "playwright/test";

test('To verify title', async ({ page }) => {

    await page.goto("https://www.google.com");

    const title = await page.title();


    await expect(page.title()).toBe("Google");

    const rawPrices = await page.locator('.price').allInnerTexts(); // ['$10', '$25', '$5']
    const numericPrices = rawPrices.map(p => parseFloat(p.replace('$    ', '')));
   const expensiveitems= numericPrices.filter(price => price > 15);

});

