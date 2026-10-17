import { test, expect, request } from '@playwright/test';

test('To login functionality', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://eventhub.rahulshettyacademy.com/login");


  await page.getByRole('textbox', {
    name: 'Email'
  }).fill('test14@gmail.com');

  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('Forgetforget@123');

  await page.getByRole('button', {
    name: 'Sign In'
  }).click();

  const dashboard = await page.getByText('Discover & Book').textContent();
  console.log(dashboard);

  await page.locator('test').filter({
    hasText: 'login'
  }).locator('');

  const book = await page.getByText('Book Now').nth(0).textContent();
  console.log(book);



});

test('Test functionalilty', async ({ request }) => {

  const response = await request.get('https://playwright.dev/');
  expect(response.ok()).toBeTruthy();
  console.log('Status code:', response.status());


});

