import { test, chromium, expect } from "@playwright/test"



test('To test the application', async ({ page }) => {
 page.goto("");
 expect(page).toHaveTitle("");

});


