import { chromium, test } from '@playwright/test';

test('dialog accept', async () => {

    const browser = await chromium.launch({
          headless: true,
        slowMo: 3000,
      //  args: ['--start-maximized']
    });

    const context = await browser.newContext();
    const page = await context.newPage();


    page.on('dialog', async (dialog) => {
        if (dialog.type() === 'beforeunload') {
            await dialog.accept();
        }
        else {
            console.log('Alert message:', dialog.message());
            await dialog.dismiss();
        }
    });

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.pause();
    console.log(await page.evaluate(() => ({
        width: window.innerWidth,
        height: window.innerHeight
    })));
    await browser.close();
});