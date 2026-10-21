import { Page, test, Locator } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly usenameinput: Locator;
    readonly passwordInput: Locator;
    readonly loginbutton: Locator;
    readonly inventoryitems: Locator;

    constructor(page: Page) {

        this.page = page;
        this.usenameinput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.locator('#password');
        this.loginbutton = page.locator("#login-button");
        this.inventoryitems = page.locator('.inventory_item');

    }

    async login(name: string, password: string): Promise<void> {

        await this.usenameinput.fill(name)
        await this.passwordInput.fill(password);
        await this.loginbutton.click();
    }

    async clickcart(): Promise<void> {

        // const button =  this.inventoryitems.filter({
        //     hasText:'Sauce Labs Backpack'
        // });

        const button = this.page.locator('.inventory_item').filter({
            has: this.page.getByText('Sauce Labs Backpack')
        });

        const addToCart = button.getByRole('button', { name: 'Add to cart' });
        await addToCart.click();

            
    const cart1 = await this.page.locator('.tes').allInnerTexts();

    const v = cart1.map(p => parseFloat(p.replace('S', " ")));
    v.filter(p => p > 20);
    }


}