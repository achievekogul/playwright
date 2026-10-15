import { test, expect, defineConfig } from '@playwright/test';


test('click on ebay', async ({ page }) => {
    await page.goto('https://www.ebay.com/');

    //const link = await page.locator('a').filter({ hasText: "Women's costumes", });
    // await link.click();

    await page.locator('a').filter({ has: page.getByText("Men's costumes", { exact: true }) }).click();
});

test('click on opentab', async ({ page, context }) => {
    await page.goto('https://www.ebay.com/');

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('')]);
});

test('click on opentab1', async ({ page, context }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click(),
    ]);

    await newPage.waitForLoadState();

    const text = newPage.getByRole('heading', { name: 'SDET-QA Blog' });
    console.log(text);

});

test('heroku', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    //await page.waitForLoadState('domcontentloaded');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'Click Here' }).click(),
    ]);
    await newPage.waitForLoadState('domcontentloaded');

    const text = newPage.getByRole('heading', { name: 'New Window' });

    console.log(await text.textContent());
    console.log(await newPage.title());

    const pages = page.context().pages();

    console.log(pages.length);
    //await newPage.close();
    await page.bringToFront();
    const pages1 = page.context().pages();
    console.log(pages1.length);
});

test('dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', (dialog) => {
        console.log(dialog.message());
        dialog.accept();
    });

    const alert = page.getByRole('button', { name: 'Simple Alert' });
    await alert.click();

});

test('dialog accept1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', (dialog) => {
        console.log(dialog.message());
        dialog.accept('kogul');
    });

    const alert = page.getByRole('button', { name: 'Prompt Alert' });
    await alert.click();

});

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


test('upload files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('#singleFileInput').setInputFiles('testdata/Lavanya.pdf');
    await page.pause();
})

test('upload multiple files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('#multipleFilesInput').setInputFiles(['testdata/Lavanya.pdf', 'testdata/Lavanya.pdf'
    ]);
    await page.pause();
})


test('download a file', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/upload-download-test/');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Download' }).click()
    ])
    console.log('File name:', download.suggestedFilename());
    await download.saveAs('testdata/rename.xlsx' + download.suggestedFilename());

    expect(download.suggestedFilename()).toContain('.xlsx');

});

test('drag', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    await page.pause();

});


test.only('hover', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.getByText('Point Me', {
        exact: true
    }).hover();
   // await page.pause();
});

test('screenshot', async ({ page }) => {

    const date = Date.now();

    await page.goto('https://www.google.com')

    await page.screenshot({
        path: `screenshot/test${date}.png`
    });
})

test('screenshot element', async ({ page }) => {

    Date.now();
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    const primarybutton = page.getByRole('button', {
        name: 'Primary Action'
    });

    await primarybutton.screenshot({ path: 'screenshot/primarybutton.png' });
});

test('attach screenshot', async ({ page }, testinfo) => {
page.goto('https://www.google.com');

    const screenshot = await page.screenshot();

    testinfo.attach(
        'screenshot', {
        body: screenshot,
        contentType: 'image/png'
    }

    );
});
