import { test, Page, Locator } from "@playwright/test";

export class SaucedemoPage {

    page: Page;
    email: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }


    async loginTest(username:string, password: string ): Promise<void> {
        this.email.fill(username);
        this.password.fill(password);
        this.loginButton.click();
        console.log('enter into click method')
    }
}
