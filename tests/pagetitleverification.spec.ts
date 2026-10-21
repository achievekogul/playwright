import { test, expect } from "playwright/test";

test('To verify title', async ({ page }) => {

    await page.goto("https://www.google.com");

    const title = await page.title();

    await expect(page.title()).toBe("Google");

    const rawPrices = await page.locator('.price').allInnerTexts(); // ['$10', '$25', '$5']
    const numericPrices = rawPrices.map(p => parseFloat(p.replace('$    ', '')));
    const expensiveitems = numericPrices.filter(price => price > 15);

    const rawprices = await page.locator('.tes').allInnerTexts();
    const numericprices = rawprices.map(p => parseFloat(p.replace('$ ', '')));
    numericprices.filter(price => price > 15);



    const rawprices1 = await page.locator('.tes').allInnerTexts();
    const n = rawprices1.map(p => parseFloat(p.replace('$ ', '')));
    n.filter(price => price < 10);




    const cart = await page.locator('.tes').allInnerTexts();

    const n1 = await cart.map(p => parseFloat(p.replace('$ ', ' ')));
    n1.filter(price => price > 10);



    const cart1 = await page.locator('.tes').allInnerTexts();

    const v = cart1.map(p => parseFloat(p.replace('S', " ")));
    v.filter(p => p > 20);
});


