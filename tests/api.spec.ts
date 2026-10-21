import { test, expect } from '@playwright/test';

test('To creat post request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'John Doe',
            role: 'automation'
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);

    const responsebody = await response.json();
    expect(responsebody.name).toBe('John Doe');

    console.log(response.ok());
    console.log(response.status());
    console.log(responsebody);

});



test('To post', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'test',
            id: 123
        }
    });

    expect(response.status()).toBe(201);
    const responsebody = await response.json();

    expect(responsebody.name).toBe('test');

    console.log(responsebody);

});

test('network mock', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',

            body: JSON.stringify([
                { id: 71, name: 'Cypress' }
            ])
        });
    });

    await page.goto('https://demo.playwright.dev/api-mocking');

    await expect(page.getByText('Cypress')).toBeVisible();


});



test('network mock 500', async ({ page }) => {

    page.on('request', request => {
        console.log('REQUEST:', request.url());
    });

    page.on('response', response => {
        console.log(
            'RESPONSE:',
            response.status(),
            response.url()
        );
    });

    page.on('pageerror', error => {
        console.log('PAGE ERROR:', error.message);
    });



    await page.route('**/api/v1/fruits', async (route) => {
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify(
                { message: 'Internal server error' }
            ),
        });
    });


    await page.goto('https://demo.playwright.dev/api-mocking');

    const responsePromise = await page.waitForResponse(response => response.url().includes('/api/v1/fruits'));
    await page.pause();

    console.log('Page title:', await page.title());
    console.log('Page URL:', page.url());
    console.log('Page content:', await page.locator('body').innerText());


    const response = await responsePromise;
    expect(response.status()).toBe(500);
    const body = await response.json();
    expect(body.message).toBe('Internal server error');

});


test.only('network mock 500 par2', async ({ page }) => {

    await page.route('**/api/v1/fruits', async (route) => {
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify(
                { message: 'Internal server error' }
            ),
        });
    });
    // Step 3: Listen for frontend JavaScript errors
    const pageErrors: string[] = [];

    page.on('pageerror', error => {
        pageErrors.push(error.message);
        console.log('Frontend error:', error.message);
    });

    // Step 4: Navigate to the demo
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Step 5: Verify the API response
    const response = await page.waitForResponse(
        response => response.url().endsWith('/api/v1/fruits')
    );

    expect(response.status()).toBe(500);

    // Step 6: Verify the mocked error message
    const body = await response.json();

    expect(body.message).toBe('Internal server error');

    // Step 7: Observe the frontend error
    await expect.poll(() => pageErrors.length).toBeGreaterThan(0);

    expect(pageErrors.some(error =>
        error.includes('map is not a function')
    )).toBeTruthy();


});