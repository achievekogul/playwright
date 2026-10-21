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

test.only('network mock', async ({ page }) => {
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