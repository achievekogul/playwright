import { test, expect, defineConfig } from '@playwright/test';

test('dialog accept', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    page.on('dialog', async (dialog) => {
        if (dialog.type() === 'beforeunload') {
            await dialog.accept();
        }
        else {
            console.log('Alert message:', dialog.message());
            await dialog.dismiss();
        }
    }
    )
});



