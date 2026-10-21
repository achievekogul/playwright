import { test as base } from "@playwright/test";
import { SaucedemoPage } from "../pagesaucedemo/loginPagelocators";

type PageFixtures = {
    saucedemo: SaucedemoPage;
};

export const test = base.extend<PageFixtures>({
    saucedemo: async ({ page }, use) => {
        const saucedemo = new SaucedemoPage(page);
        await use(saucedemo);
    },
});

export { expect } from "@playwright/test";