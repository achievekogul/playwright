import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/splashui/challenge?ap=1&appName=orch&ru=https%3A%2F%2Fwww.ebay.com%2F&iid=0ce2b5cf-e745-4e25-9a90-f2b678922c5f&iim=lMTIyLjP&iia=ZfE2NC4ygy&iiz=BsLMDMuMjMyTJv');
  await page.goto('https://www.ebay.com/');
});