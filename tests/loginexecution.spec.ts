import { link } from "node:fs";
import { LoginPage } from "../page/Login.spec";
import { test } from "@playwright/test";


test("Run the login", async ({ page }) => {

    const loginpage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");
    await loginpage.login('standard_user', 'secret_sauce');
    await loginpage.clickcart();

     await page.waitForTimeout(2000);


 

   
})